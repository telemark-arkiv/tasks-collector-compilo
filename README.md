# tasks-collector-compilo
Service for collecting a user's tasks from Compilo

## Inbound messages
This service listens for the following messages

- ```{cmd: 'collect-tasks'}```

## Outbound messages
This microservice do not emit any outbound messages

## Docker
Build the image

```
$ docker build -t tasks-collector-compilo .
```

Start

```
$ docker run -d -p 80:3000 --name tasks-collector-compilo tasks-collector-compilo
```

From hub.docker.com

```
$ docker run -d -p 80:3000 --name tasks-collector-compilo telemark/tasks-collector-compilo
```

Call the service

```
$ curl -d '{"cmd":"collect-tasks", "user":"gasg"}' -v http://192.168.99.100/act
```