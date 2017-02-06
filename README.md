[![Build Status](https://travis-ci.org/telemark/tasks-collector-compilo.svg?branch=master)](https://travis-ci.org/telemark/tasks-collector-compilo)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tasks-collector-compilo

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tasks-collector-compilo.svg)](https://greenkeeper.io/)
Service for collecting a user's tasks from Compilo

## Inbound messages
This microservice listens for the following messages

- ```{cmd: 'collect-tasks', type: 'user'}```

## Outbound messages
This microservice emits the following messages

- ```{info: 'tasks', type:'user'}```

## Docker
Build the image

```
$ docker build -t tasks-collector-compilo .
```

Start

```
$ docker run -d --net host --name tasks-collector-compilo tasks-collector-compilo
```

From hub.docker.com

```
$ docker run -d --net host --name tasks-collector-compilo telemark/tasks-collector-compilo
```

Call the service

```
$ curl -d '{"cmd":"collect-tasks", "type": "user", "user":"gasg"}' -v http://192.168.99.100:8000/act
```