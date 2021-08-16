# https://www.sciencedirect.com/science/article/pii/S1616504711000796
p1=0.21 #probability of detecting at least once during 16 days, 1-(1-p1)^16 = p, 1-p1 = (1-p)^(1/16), p1 = 1-(1-p)^(1/16)
p2= 1-(1-p1)^(1/16) # prob of detecting once during 1 day, (1-(1-p1)^7)
1-(1-p2)^7 

# https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0137541
p3=0.34 #probability of detecting at least once during 30 days (1 month), 1-(1-p1)^30 = p, 1-p1 = (1-p)^(1/30), p1 = 1-(1-p)^(1/30)
p4= 1-(1-p3)^(1/30) # prob of detecting once during 1 day, (1-(1-p1)^7)
1-(1-p4)^7 # I think this is actually a capture prob, not a detection prob....

# https://peerj.com/articles/2886/
# p = 0.03 per day

mu <- (0.6*(1-(1-0.03)^7)+0.4*(1-(1-p2)^7))
var <- 0.002638
sqrt(var)
mm.beta <- function(mu,var){
  alpha = (mu^2-mu^3-mu*var)/var
  beta = (mu-2*mu^2+mu^3-var+mu*var)/var
  return(list(alpha=alpha,beta=beta))
}
params <- mm.beta(mu,var)
a <- params$alpha
b <- params$beta
curve(dbeta(x,a,b))
abline(v=c(1-(1-p2)^7,1-(1-0.03)^7,0.05),col=c('red','red','blue'))
mean(rbeta(100000,a,b))
pbeta(1-(1-0.03)^7,a,b,lower.tail=TRUE) - pbeta(1-(1-p2)^7,a,b,lower.tail=TRUE)
pbeta(1-(1-0.03)^7,a,b,lower.tail=FALSE)
