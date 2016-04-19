###########################################################
#
# Dockerfile for tasks-collector-compilio
#
###########################################################

# Setting the base to nodejs 4.4.2
FROM mhart/alpine-node:4.4.2

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV SERVICE_PORT 3000

# Expose SERVICE_PORT
EXPOSE 3000

# Startup
ENTRYPOINT node service.js