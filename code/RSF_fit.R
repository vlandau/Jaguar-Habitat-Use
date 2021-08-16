#### Script to format data and run MCMC algorithm for integrated RSPF
#### Written by Vincent Landau, 2017-12-08
library(RhpcBLASctl)
library(doParallel)
library(arrangements)
library(HDInterval)
library(boot)
library(dplyr)

##################################
######## DATA PREPARATION ########
##################################
## Occupancy data
occupancy1 <- read.csv("data/occupancy_data/jagOccAttr10122020.csv")
SiteHistory <- read.csv("data/occupancy_data/OccupancySiteHistory.csv")
SiteHistory$year = NULL
SiteHistory$IDcode2 <- SiteHistory$IDcode
occupancy <- full_join(occupancy1, SiteHistory[,5:14], by = "IDcode")
occupancy$.geo = NULL
occupancy$year.y = NULL
occupancy$IDcode2 = NULL
occupancy$PresAbBin = NULL

# Create new column containing number of visits per site
J <- NULL
for (i in 1:288){
  x <- occupancy[i,22:28]
  J[i] <- 7 - length(x[is.na(x)])
}
occupancy$y <- rowSums(x = occupancy[22:28],na.rm=TRUE)
occupancy$LogDistRoad <- log(occupancy$Dist_Road_m)
occupancy$LogDistSett <- log(occupancy$Dist_Sett_m)

## Presence data
presence <- read.csv("data/presence_background_data/PresenceAttr10122020.csv")
presence$y <- 1
presence$LogDistRoad <- log(presence$Dist_Road_m)
presence$LogDistSett <- log(presence$Dist_Sett_m)

## Background data
available <- read.csv("data/presence_background_data/backgroundAttr10122020.csv")
available <- available[is.na(available$NDVI1080) == FALSE,] ## remove null entries
available <- available[is.na(available$Dist_Road_m) == FALSE,] ## remove null entries
available <- available[available$Dist_Sett_m != 0.01,] # remove observations within settlements (coded as 0.01 in covariate export) 
available$y <- 0 #set y to 0 for the background sample
available$LogDistRoad <- log(available$Dist_Road_m)
available$LogDistSett <- log(available$Dist_Sett_m)

## Function to scale covariates using all datasets
scaleEm <- function(input, varList){
  out <- matrix(nrow=length(input[,1]),ncol=length(varList)+1)
  out[,1]<-1
  colnames(out) <- c("intercept",varList)
  
  for(i in 1:length(varList)){
    varName <- varList[i]
    
    mean <- mean(c(presence[[varName]],occupancy[[varName]],available[[varName]]))
    stdev <- sd(c(presence[[varName]],occupancy[[varName]],available[[varName]]))
    out[,i+1] <- (input[[varName]]-mean)/stdev
    print(c(varName,mean,stdev))
  }
  
  return(out)
}

## standardize variables and create datasets
varList <- c("chiliSD3240", "NDVI2160",  "LogDistRoad",
             "LogDistSett","riparianDist", "waterDistm")
presX1 <- scaleEm(presence,varList)
occX <- scaleEm(occupancy,varList)
availX <- scaleEm(available,varList)

# Create final datasets
n.avail <- 25000 # only use 1st 25k, this is fine because the sample was 100% random in space/time
presX2 <- as.matrix(rbind(presX1,availX[1:n.avail, ])) # presence-available data
presChiliSq <- presX2[, 2]^2
presX <- cbind(presX2[, c(1, 2)], presChiliSq, presX2[, -c(1, 2)])
colnames(presX)[3] <- c("chili3240Sq")

occX2 <- as.matrix(occX) # occupancy data
occChiliSq <- occX2[, 2]^2
occX <- cbind(occX2[, c(1, 2)], occChiliSq, occX2[, -c(1, 2)])
colnames(occX)[3] <- c("chili3240Sq")
y <- as.vector(occupancy$y)
n.visits <- as.vector(J)
w <- as.vector(c(presence$y,rep(0, n.avail)))

# Remove non-needed variables
rm(i,occupancy,occupancy1,SiteHistory,J,available,occX2,presX2,x)
varList <- colnames(occX)[-1]

##################################
######### RUN THE MODELS #########
##################################
var_indices <- 2:8

# Get all possible 
allmodels <- c(combinations(var_indices, 2, layout = "list"),
               combinations(var_indices, 3, layout = "list")#,
               combinations(var_indices, 4, layout = "list"),
               combinations(var_indices, 5, layout = "list"),
               combinations(var_indices, 6, layout = "list")
               )

models <- list()

# Remove models with correlated variables
rc <- function(object){
  con1 <- 3 %in% object & (2 %in% object == FALSE) # removes models with TR^2 without TR
  con2 <- (7 %in% object) & 8 %in% object # removes models with water and riparian covariates
  
  or <- sum(con1, con2)
  return(or)
}

for (i in 1:length(allmodels)){
  object = allmodels[[i]]
  if(rc(object)==0){models[[length(models)+1]] <- object}
}

var.subsets <- models

makePlot <- function(var.subset,Labels,mcmc.out){
  par(mfrow=c(1,1), bg='ivory',mar = c(5.1,5.1,4.1,2.1))
  CIs <- matrix(ncol=2,nrow = length(var.subset))
  for (i in 1:length(var.subset)){
    CIs[i,]<- quantile(mcmc.out$beta[i,],probs = c(0.025,0.975))
  }
  
  means <- NULL
  for (i in 1:length(var.subset)){
    means[i]=mean(mcmc.out$beta[i,])
  }
  
  meansCIs <- cbind(seq(1.5,1.5+(length(var.subset)-1),1),means,CIs)
  
  plot(cbind(seq(1.5,1.5+(length(var.subset)-1),1),means),xaxt="n", xlim=c(1,length(var.subset)+1),ylim = c(-3,4.2),
       ylab="Parameter Value",cex=1.5,cex.axis=1.5,cex.lab=1.5,frame.plot = FALSE)
  abline(h=-0.01,lty=2,lwd=2)
  
  labels = Labels[var.subset]
  
  for(i in 1:length(var.subset)){
    for(j in 3:4){
      arrows(x0 = meansCIs[i,1], y0 = meansCIs[i,2], x1 = meansCIs[i,1], y1=meansCIs[i,j],length = 0.05,angle = 90)
    }
    label = labels[i]
    
    text(x = meansCIs[i,1], y = 3.2, bquote(underline(.(label))),cex=1.5)
  }
}

getDIC <- function(mcmc.out){
  B0 <- mean(mcmc.out$B0)
  Bmean = rowMeans(mcmc.out$beta)
  pMean = mean(mcmc.out$p)
  bMean = mean(mcmc.out$b)
  DevMean = -2*(sum(log(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, Bmean))*bMean))) + 
                  sum(log(1-inv.logit(occMod%*%c(B0, Bmean)) + dbinom(x = y, size = n.visits, prob = pMean)*inv.logit(occMod%*%c(B0, Bmean)))))
  print(DevMean)
  
  P_d = mean(mcmc.out$DIC) - DevMean
  print(mean(mcmc.out$DIC))
  print(P_d)
  print(DevMean + 2*P_d)
  return(mean(mcmc.out$DIC) + P_d)
}

Labels <- colnames(occX)

DICtable <- matrix(ncol=2, nrow = length(var.subsets))
colnames(DICtable)=c("Model", "DIC")

library(doParallel)
cl <- makeCluster(7)
registerDoParallel(cl)

source('code/RSF_MCMC.R')
source('code/gelman_diag.R')

get_beta <- function(){
  rnorm(5, 0, 0.5)
}

n.burn <- 250
n.mcmc <- 1000

for (m in 1:length(var.subsets)){
  starttime <- proc.time()[3]
  
  w <- as.vector(c(presence$y,rep(0,n.avail)))
  
  var.subset <- var.subsets[[m]]
  
  presMod <- cbind(presX[,c(1,var.subset)])
  occMod <- cbind(occX[,c(1,var.subset)])
  beta.mu.all <- rep(0, 8)
  beta.mu <- beta.mu.all[var.subset]
  
  beta.sd.all <- rep(1.5, 8)
  beta.sd <- beta.sd.all[var.subset]
  
  beta.tune.all <- sqrt(c(0.25^2,0.25^2,0.18^2,0.20^2,0.20^2,0.55^2,0.45^2,0.4^2))
  beta.tune <- beta.tune.all[var.subset]
  
  B0.mean <- 0
  B0.sd <- 1.5
  
  p.alpha1 <- 7.487 
  p.alpha2 <- 41.006 
  b.alpha1 <- 1
  b.alpha2 <- 1 
  
  B0.tune <- 0.32
  b.tune <- 0.025
  
  beta.start.all <- replicate(7, get_beta(), simplify = FALSE)
  B0.start.all <- rnorm(7, -3, 0.5)
  b.start.all <- runif(7, 0.03, 0.095)
  
  all <- foreach(i=1:7, .combine=list, .packages = c("boot"), .multicombine = TRUE,.noexport = ) %dopar% {
    RhpcBLASctl::blas_set_num_threads(1)
    B0.start <- B0.start.all[i]
    beta.start <- as.vector(beta.start.all[[i]][c(1:length(var.subset))])
    b.start <- b.start.all[i]
    
    out <- JointLikePresOccMultCov.mcmc(w, y, n.visits, presMod, occMod, beta.mu, beta.sd, B0.start, 
                                        B0.mean, B0.sd, beta.start, p.alpha1, p.alpha2, b.alpha1, 
                                        b.alpha2, beta.tune, b.start, b.tune,
                                        B0.tune, n.burn, n.mcmc)
    output <- out
  }
  
  mcmc.out <- all[[1]]
  for (j in 2:3){
    sub <- all[[j]]
    beta <- sub$beta
    mcmc.out$beta <- cbind(mcmc.out$beta,beta)
    mcmc.out[2:8] <- mapply(c, mcmc.out[2:8], all[[j]][2:8])
  }
  rownames(mcmc.out$beta) <- colnames(occMod)[-1]
  
  cat(noquote(paste("MCMC for Model",m , "of",length(var.subsets),"complete\n",collapse=" ")))
  
  DICtable[m,2] <- getDIC(mcmc.out)
  DICtable[m,1] <- paste0(Labels[var.subset],collapse = " + ")
  
  print(rowMeans(rbind(mcmc.out$B0,mcmc.out$b)))
  print(rowMeans(mcmc.out$beta))
  print(c("p",mean(mcmc.out$p)))
  
  ##### Gelman-Rubin Convergence Diagnostic on first 3 chains #####
  to.test <- list(list(), list(), list())
  for (i in 1:3){
    to.test[[i]] <- lapply(X = seq(1,length(as.vector(beta.start.all[[i]][c(1:length(var.subset))])),1), FUN = function(j){return(as.vector(all[[i]]$beta[j,]))})
    names(to.test[[i]]) <- Labels[var.subset]
    to.test[[i]]$B0 <- all[[i]]$B0
    to.test[[i]]$p <- all[[i]]$p
    to.test[[i]]$b <- all[[i]]$b
  }
  
  print(PSRF(to.test))
  
  ##### Plot Beta means and CIs 
  makePlot(var.subset,Labels,mcmc.out)
  rm(all)
  cat(noquote(paste("Model",m , "of",length(var.subsets),"complete."," Time elapsed:",round(proc.time()[3]-starttime,digits = 2),"seconds\n\n",collapse=" ")))
  cat(noquote("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n"))
}

# write output data
# identify top model and rerun
top_ind <- which.min(DICtable[, 2])
m <- top_ind
n.burn <- 250
n.mcmc <- 1000

w <- as.vector(c(presence$y,rep(0,n.avail))); var.subset <- var.subsets[[m]]
presMod <- cbind(presX[,c(1,var.subset)]); occMod <- cbind(occX[,c(1,var.subset)])
beta.mu.all <- rep(0, 8); beta.mu = beta.mu.all[var.subset]
beta.sd.all <- rep(1.5, 8); beta.sd = beta.sd.all[var.subset]
beta.tune.all <- sqrt(c(0.25^2,0.25^2,0.18^2,0.20^2,0.20^2,0.55^2,0.45^2,0.4^2))
beta.tune <- beta.tune.all[var.subset]
B0.mean <- 0; B0.sd <- 1.5; p.alpha1 <- 7.487; p.alpha2 <- 41.006; b.alpha1 <- 1; b.alpha2 <- 1 
B0.tune <- 0.32; b.tune = 0.025
beta.start.all <- replicate(7, get_beta(), simplify = FALSE); B0.start.all <- rnorm(7, -3, 0.5); b.start.all <- runif(7, 0.03, 0.095)

all <- foreach(i=1:7, .combine=list, .packages = c("boot"), .multicombine = TRUE,.noexport = ) %dopar% {
  RhpcBLASctl::blas_set_num_threads(1)
  B0.start <- B0.start.all[i]
  beta.start <- as.vector(beta.start.all[[i]][c(1:length(var.subset))])
  b.start <- b.start.all[i]
  
  out <- JointLikePresOccMultCov.mcmc(w, y, n.visits, presMod, occMod, beta.mu, beta.sd, B0.start, 
                                      B0.mean, B0.sd, beta.start, p.alpha1, p.alpha2, b.alpha1, 
                                      b.alpha2, beta.tune, b.start, b.tune,
                                      B0.tune, n.burn, n.mcmc)
  output <- out
}

mcmc.out <- all[[1]]
for (j in 2:7){
  sub <- all[[j]]
  beta <- sub$beta
  mcmc.out$beta <- cbind(mcmc.out$beta,beta)
  mcmc.out[2:8] <- mapply(c, mcmc.out[2:8], all[[j]][2:8])
}
rownames(mcmc.out$beta) <- colnames(occMod)[-1]

saveRDS(mcmc.out, "output/topModelOutput.RDS")

## Get HDIs and save
hdis <- cbind(
  intercept = hdi(mcmc.out$B0),
  hdi(t(mcmc.out$beta)),
  b = hdi(mcmc.out$b),
  p = hdi(mcmc.out$p)
)
write.csv(hdis, "output/topModelHDIs.csv", row.names = T, col.names = TRUE)

### Get 10000 samples from intercept and beta for subsequent analyses
indices <- sample(x = c(1:ncol(mcmc.out$beta)), size = 10000,replace = FALSE)
samples <- cbind(mcmc.out$B0[indices],t(mcmc.out$beta[,indices]))
write.csv(samples, file = "output/betaAndIntSamples10000_int_rug_rug2_rip.csv")

write.csv(DICtable, file = "output/DICallSubs.csv")

