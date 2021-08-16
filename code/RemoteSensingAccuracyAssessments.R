val <- read.csv("data/classifications/validation/riparianValidationEdits.csv",sep = ",", header = TRUE)
val$strat <- rep(c(rep(0,15),rep(1,15),rep(2,15)),12) # the "true" values were deterministic, based on how samples were generated.
val$pred <- rep(c(rep(0,30),rep(1,15)),12) # the "true" values were deterministic, based on how samples were generated.

val$correct <- val[,6]==val[,9]
sum(val[val$strat==2,10])
sum(val$correct)/nrow(val)

rip_cm <- matrix(NA, nrow = 2, ncol = 3)
colnames(rip_cm) <- paste0("stratum ", c(1,2,3), c(" (0)"," (0)", " (1)"))
rownames(rip_cm) <- c("0", "1")

for (i in 1:3) {
  rip_cm[1, i] <- sum(val[val$strat == (i - 1),]$CLASS == 0)
  rip_cm[2, i] <- sum(val[val$strat == (i - 1),]$CLASS == 1)
}

val <- read.csv("data/classifications/validation/waterValidationEdits.csv",sep = ",", header = TRUE)
val$strat <- rep(c(rep(0,15),rep(1,15),rep(2,15)),12) # the "true" values were deterministic, based on how samples were generated.
val$pred <- rep(c(rep(0,30),rep(1,15)),12) # the "true" values were deterministic, based on how samples were generated.

water_cm <- matrix(NA, nrow = 2, ncol = 3)
colnames(water_cm) <- paste0("stratum ", c(1,2,3), c(" (0)"," (0)", " (1)"))
rownames(water_cm) <- c("0", "1")

for (i in 1:3) {
  water_cm[1, i] <- sum(val[val$strat == (i - 1),]$CLASS == 0)
  water_cm[2, i] <- sum(val[val$strat == (i - 1),]$CLASS == 1)
}
161/180
val$correct <- val[,6]==val[,9]
sum(val$correct)/nrow(val)

