### Function to calculate Gelman-Rubin diagnostic, using a list of 3 lists containing the model parameters, one for each chain
PSRF <- function(input){
  var.names = names(input[[1]])
  grubin <- matrix(0,nrow = length(var.names),ncol=1)
  rownames(grubin) <- var.names
  colnames(grubin) <- "PSRF"

  n.mcmc =length(input[[1]][[paste(var.names[1])]])

  for (i in 1:length(var.names)){
    param = var.names[i]
    means = c(mean(input[[1]][[i]]),mean(input[[2]][[i]]),mean(input[[3]][[i]]))

    B <-  n.mcmc/(2) * sum((means-mean(means))^2) #variance of means for chains 1-3 * n
    W <- mean(c(var(input[[1]][[i]]),var(input[[2]][[i]]),var(input[[3]][[i]]))) #mean of variance for chains 1-3
    Vhat <- (1 - 1/n.mcmc)*W + B/n.mcmc
  
    R <- sqrt(Vhat/W)
    
    grubin[i,1] <- R
  }
  return(grubin)
}