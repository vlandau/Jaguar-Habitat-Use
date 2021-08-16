install.packages("HDInterval")
library(HDInterval)

area_pred <- read.csv("data/final/Jaguar_habitat_summaries_by_region_posteriors_12122020.csv")

HDIs <- cbind(
  total_area = hdi(area_pred$probSumAll),
  US_area = hdi(area_pred$probSumUS),
  US_perc = hdi(area_pred$propUS),
  north_I10_perc = hdi(area_pred$propI10)
)
