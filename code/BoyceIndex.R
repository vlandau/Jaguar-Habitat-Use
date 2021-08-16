# n <- sum(c(0,0,0,0,0,0,8,452,892,841))
# The ranks and values were manually copy/pasted for each data data type from numbers generated with code/GoogleEarthEngine/sample-predictions-for-boyce-index.js
devtools::install_github("rasmusab/bayesian_first_aid")
library(BaysianFirstAid)

n <- sum(c(0,1,0,0,0,0,1,10,20,24))
par(col="white")
bins <- c(1,2,3,4,5,6,7,8,9,10)
binPercentArea <- c(0.09966775887477966,
                    0.10054578143426236,
                    0.09976516812952324,
                    0.09958250522615415,
                    0.09944752832590889,
                    0.09954021080474229,
                    0.0996379159384056,
                    0.09994283903313386,
                    0.10065703967289699,
                    0.10121324254473803)
adjust <- 0.1/binPercentArea
expected <- n*binPercentArea

#observed <- c(0,0,0,0,0,0,8,452,892,841)
observed <- c(0,0,1,0,0,0,1,10,20,24)
diff <- (observed - expected)/expected

### Visualize
plot <- barplot(height = diff,col="grey90",border = "grey70",ylim=c(-1,5),xlab="Class",ylab = "Deviance from expected")
abline(h=seq(-1,5,1),col="grey90",lty=8)
abline(h=0,col="black")
axis(side = 1,at=plot,labels = bins,line = FALSE,tick=FALSE)

### Spearman rank correlation
c(0,0,0,0,0,0,6,421,854,912)
c(3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 7, 8, 9, 10)



bayes.cor.test(x = bins, y = rank(c(0,1,0,0,0,0,1,10,20,24)*adjust), cred.mass = 0.95, n.iter = 50000)
bayes.cor.test(x = bins, y = rank(c(0,0,0,0,0,0,8,452,892,841)*adjust), cred.mass = 0.95, n.iter = 25000)
bayes.cor.test(x = bins, y = c(3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 7, 8, 9, 10), cred.mass = 0.95)



samples <- out$mcmc_sample
mean(samples[[1]][,1])
?bayes.cor.test
cor(x = bins, y = observed*adjust, method='spearman')
cor(x = bins, y = observed*adjust, method='pearson')
cor(x = bins, y = c(3,3,6,3,3,3,7,9,8,10), method='pearson')
