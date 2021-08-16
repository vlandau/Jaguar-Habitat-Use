FROM rocker/geospatial:4.0.3

RUN install2.r \
	arrangements \
	doParallel \
	RhpcBLASctl \
	HDInterval

