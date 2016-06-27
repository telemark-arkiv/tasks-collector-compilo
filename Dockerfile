###########################################################
#
# Dockerfile for tasks-collector-compilo
#
###########################################################

# Setting the base to nodejs 4.4.6
FROM mhart/alpine-node:4.4.6

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TASKS_COLLECTOR_COMPILO_TAG tasks-collector-compilo
ENV TASKS_COLLECTOR_COMPILO_URL http://compilo.no
ENV TASKS_COLLECTOR_COMPILO_HOST localhost
ENV TASKS_COLLECTOR_COMPILO_PORT 8000

# Startup
CMD ["node", "service.js", "--seneca-log=type:act"]