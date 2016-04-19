# tasks-collector-compilo
Service for collecting tasks from Compilo

## Docker
Build the image

```
$ docker build -t tasks-collector-compilo .
```

Start

````
$ docker run -d -p 80:3000 --name tasks-collector-compilo
```

From hub.docker.com

```
$ docker run -d -p 80:3000 --name minelev telemark/tasks-collector-compilo
``