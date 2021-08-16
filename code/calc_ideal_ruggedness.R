# mu = a + b*x + c*x^2
# mu_prime = b + 2*c*x

ideal <- -samples$chiliSD3240 / (2 * samples$chili3240Sq)

quantile(ecdf(scale(read.csv("data/RSF/backgroundAttr20181025.csv")$chiliSD3240))(ideal), prob = c(0.025, 0.975))
