library (ggplot2)
library(geoR)
library(sp)
library(gstat)
library(spdep)
library(tidyverse)
resid <- read.csv("output_new/RSFpredictionsToPoints_new_coords.csv") %>% 
  mutate(residual = value - probabilit) %>%
  # filter(value == 1) %>% 
  select(x_meters, y_meters, residual)

dist <- dist(resid[,1:2], method = "euclidean")
hist(dist)             
breaks <- seq(30000,600000,60000)

vari <- variog(coords = resid[,1:2], data = resid$residual, breaks = breaks, option = "bin")


data <- tibble(distance = vari$u/1000, semivariance = vari$v)

p1 <- ggplot(data = data) +
  geom_point(aes(x = distance, y = semivariance)) +
  scale_x_continuous(breaks = seq(0,600, 100)) +
  xlab("distance (kilometers)")

ggsave("output_new/variogram.png",plot = p1, width = 7.5, height = 4.5)
             
