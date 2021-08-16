library(boot)
JointLikePresOccMultCov.mcmc <- function(w, y, n.visits, presMod, occMod, beta.mu, beta.sd, B0.start, 
                                        B0.mean, B0.sd, beta.start, p.alpha1, p.alpha2, b.alpha1, 
                                        b.alpha2, beta.tune, b.start, b.tune,
                                        B0.tune, n.burn, n.mcmc){
  #set up popup progress bar

  
  ###
  ### Libraries, functions, variable storage setup
  ###
  
  # set up inv.logit function
  mm.beta <- function(mu,var){
    alpha = (mu^2-mu^3-mu*var)/var
    beta = (mu-2*mu^2+mu^3-var+mu*var)/var
    return(list(alpha=alpha,beta=beta))
  }
  
  # set up storage vectors/matrices
  beta.save <- matrix(nrow=length(beta.start), ncol=(n.mcmc + n.burn))
  
  B0.save <- rep(0,(n.mcmc + n.burn))
  b.save <- rep(0,(n.mcmc + n.burn))
  z <- rep(0,length(y))
  z[y!=0] <- 1

  # starting values and other variables
  n.y.zero <- length(y[y==0])#number of failures to detect/absences
  # set z = 1 where y > 0
  z[y==0] <- rbinom(length(z[y==0]),1,.2)
  
  beta <- beta.start
  B0 <- B0.start
  b <- b.start
  
  beta.accept <- rep(0,length(beta))
  B0.accept <- 0
  b.accept <- 0 
  
  p.save <- rep(0,(n.mcmc + n.burn))
  b.save <- rep(0,(n.mcmc + n.burn))
  DIC.save <- rep(0,(n.mcmc + n.burn))
  ###
  ### MCMC algorithm
  ###
  
  for (k in 1:(n.mcmc + n.burn)){
    #########################################
    ## Progress bar
    #########################################
    ###
    ### sample p (Gibbs), only using data point for which z_j = 1
    ###
    p <- rbeta(1, shape1 = sum(y[z==1]) + p.alpha1, 
                  shape2 = sum(n.visits[z==1] - y[z==1]) + p.alpha2)
    
    ###
    ### Sample z (Gibbs) only for points where y_j = 0
    ###

    psi.temp = (inv.logit(occMod[y==0,]%*%c(B0,beta))*(1-p)^(n.visits[y==0])) / 
               (inv.logit(occMod[y==0,]%*%c(B0,beta))*(1-p)^(n.visits[y==0]) + 1 - inv.logit(occMod[y==0,]%*%c(B0,beta)))
    
    z[y==0] <- rbinom(n.y.zero, size = 1, prob = psi.temp)
    
    ###
    ### Sample B0
    ###
    
    B0.star <- rnorm(1, mean = B0, sd = B0.tune)
    
    mh1 <- sum(dbinom(x = z, size = 1, prob = inv.logit(occMod%*%c(B0.star, beta)), log = TRUE)) +
      sum(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0.star, beta))*b, log = TRUE)) +
      dnorm(x = B0.star, mean = B0.mean, sd = B0.sd,log=TRUE)
    
    mh2 <- sum(dbinom(x = z, size = 1, prob = inv.logit(occMod%*%c(B0, beta)), log = TRUE)) +
      sum(dbinom(x = w, size = 1, inv.logit(presMod%*%c(B0, beta))*b, log = TRUE)) +
      dnorm(x = B0, mean = B0.mean, sd = B0.sd,log=TRUE)
    
    mh=exp(mh1-mh2)
    
    if (mh > runif(1)){
      B0 <- B0.star
      B0.accept <- B0.accept + 1
    }
    
    
    ###
    ### Sample Betas
    ###
    for (t in 1:length(beta.start)){

      beta.star = beta
      beta.star[t] = rnorm(1, mean = beta[t], sd = beta.tune[t])
      
      mh1 <- sum(dbinom(x = z, size = 1, prob = inv.logit(occMod%*%c(B0, beta.star)), log = TRUE)) +
        sum(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, beta.star))*b, log = TRUE)) +
        dnorm(x = beta.star[t], mean = beta.mu[t], sd = beta.sd[t],log=TRUE)
      
      mh2 <- sum(dbinom(x = z, size = 1, prob = inv.logit(occMod%*%c(B0, beta)), log = TRUE)) +
        sum(dbinom(x = w, size = 1, inv.logit(presMod%*%c(B0, beta))*b, log = TRUE)) +
        dnorm(x = beta[t], mean = beta.mu[t], sd = beta.sd[t], log=TRUE)
      
      mh=exp(mh1-mh2)
      
      if(mh > runif(1)){
        beta[t] = beta.star[t]
        beta.accept[t] = beta.accept[t] + 1
      }
    }
    ###
    ### Sample b
    ###

    # b.params <- mm.beta(mu = b, var = b.tune)
    # b.star <- rbeta(n = 1, shape1 = b.params$alpha, shape2 = b.params$beta)
    # b.star.params <- mm.beta(mu = b.star, var = b.tune)
    # 
    # mh1 <- sum(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, beta))*b.star, log = TRUE)) +
    #        dbeta(x = b.star, shape1 = b.alpha1, shape2 = b.alpha2, log = TRUE) + 
    #        dbeta(x=b,shape1 = b.star.params$alpha, shape2 = b.star.params$beta, log = TRUE)
    # 
    # mh2 <- sum(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, beta))*b, log = TRUE)) +
    #        dbeta(x = b, shape1 = b.alpha1, shape2 = b.alpha2, log = TRUE) + 
    #        dbeta(x=b.star,shape1 = b.params$alpha, shape2 = b.params$beta, log = TRUE)
    # 
    # mh <- exp(mh1-mh2)
    # 
    # if(is.na(mh1)==FALSE){
    #   if(mh > runif(1)){
    #     b = b.star
    #     b.accept = b.accept + 1
    #   }
    # }
    
    
    #uniform M-H sampler
    b.star = runif(n = 1,min = max(0,b-b.tune),max = min(1,b+b.tune))
    
    mh1 <- sum(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, beta))*b.star, log = TRUE)) +
      dbeta(x = b.star, shape1 = b.alpha1, shape2 = b.alpha2, log = TRUE) + 
      dunif(x=b,min = max(0,b.star-b.tune), max = min(1,b.star+b.tune), log = TRUE)
    
    mh2 <- sum(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, beta))*b, log = TRUE)) +
      dbeta(x = b, shape1 = b.alpha1, shape2 = b.alpha2, log = TRUE) +
      dunif(x=b.star, min = max(0,b-b.tune), max = min(1,b+b.tune), log = TRUE)
    
    mh <- exp(mh1-mh2)
    
    if(mh > runif(1)){
      b = b.star
      b.accept = b.accept + 1
    }
    ###
    ### Save p and Beta and DIC
    ###
    p.save[k] <- p
    beta.save[,k] <- beta
    B0.save[k] <- B0
    b.save[k] <- b
    
    DIC.save[k] <- -2*(sum(log(dbinom(x = w, size = 1, prob = inv.logit(presMod%*%c(B0, beta))*b))) +
                     sum(log((1-inv.logit(occMod%*%c(B0, beta)) + dbinom(x = y, size = n.visits, prob = p)*inv.logit(occMod%*%c(B0, beta))))))
    
  }
  
  return(list(beta = beta.save[,(n.burn + 1):(n.mcmc + n.burn)],
              B0 = B0.save[(n.burn + 1):(n.mcmc + n.burn)],
              p = p.save[(n.burn + 1):(n.mcmc + n.burn)],
              beta.accept = beta.accept / (n.mcmc + n.burn),
              B0.accept = B0.accept / (n.mcmc + n.burn),
              b = b.save[(n.burn + 1):(n.mcmc + n.burn)],
              b.accept = b.accept / (n.mcmc + n.burn),
              DIC = DIC.save[(n.burn + 1):(n.mcmc + n.burn)]
              ))
}
