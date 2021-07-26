# todo

```
$ docker-compose up --build
```

```
$ yarn
$ yarn start
```

```
Create user

```
Post: /user 
{
    "name": "test1"
}
```

Update user

```
Put: /user/:user
{
    "name": "test2"
}
```

Get user
```
Get: /user/:user
```

Get users list
```
Get: /user
```

Delete user
```
Delete: /user/:user
```

Create todo

```
Post: /user/:user/todos
{
    "title": "title"
}
```

Update todo

```
Put: /user/:user/todos/:todo
{
    "title": "title"
}
```

Get todo
```
Get: /user/:user/todos/:todo
```

Get todos list

```
Get: /user/:user/todos
```

Delete todo

```
Delete: /user/:user/todos/:todo
```