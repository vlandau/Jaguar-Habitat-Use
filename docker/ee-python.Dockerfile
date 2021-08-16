FROM ubuntu:18.04

ENV CPLUS_INCLUDE_PATH=/usr/include/gdal
ENV C_INCLUDE_PATH=/usr/include/gdal

# Install deps
RUN apt-get update && \
	apt-get install -y --no-install-recommends \
	 ca-certificates \
	 python3-dev \
	 python3-pip \
	 gdal-bin \
	 curl \
	 python3-gdal \
     nano

# Install the python gdal bindings and other packages
RUN pip3 install GDAL==2.2.2 --global-option=build_ext \
	--global-option="-I/usr/include/gdal"

# Install the python gdal bindings and other packages
RUN pip3 install --upgrade pip
RUN pip3 install setuptools wheel

RUN pip3 install pandas \
    shapely \
    pyyaml \
    bokeh \
    folium \
    matplotlib \
    pscript \
    && rm -rf /.cache/pip

# Install ee python API
RUN pip3 install --upgrade google-api-python-client \
    oauth2client \
    pyOpenSSL>=0.11 \
    earthengine-api \
    && rm -rf /.cache/pip

# Install google cloud sdk

RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

RUN apt-get install -y --no-install-recommends \
    apt-transport-https gnupg

RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

RUN apt-get update && apt-get install -y --no-install-recommends google-cloud-sdk

# Install crcmod and deps
RUN apt-get update && apt-get install -y --no-install-recommends gcc python-setuptools

RUN pip install --no-cache -U crcmod \
    && rm -rf /.cache/pip

# Add GDAL binaries, aside from GDAL in python 3.6
RUN apt-get install -y --no-install-recommends gdal-bin

RUN apt-get autoremove \
    && rm -rf /var/lib/apt /var/cache/apt

RUN apt-get update && apt-get install -y osmctools

WORKDIR home

RUN echo 'PS1="\u@🐋:\w\[> \]"' >> ~/.bashrc
