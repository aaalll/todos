import * as express from "express";
import { TodoController, UserController, ServerController } from '../controllers';

const appRouter = express.Router();
appRouter.get('/', ServerController.check)

appRouter.get('/user', UserController.getAll)
appRouter.get('/user/:user', UserController.getOne)
appRouter.post('/user', UserController.createUser)
appRouter.put('/user/:user', UserController.updateUser)
appRouter.delete('/user/:user', UserController.deleteUser)

appRouter.get('/user/:user/todos', TodoController.getAll)
appRouter.get('/user/:user/todos/:todo', TodoController.getOne)
appRouter.post('/user/:user/todos', TodoController.createTodo)
appRouter.put('/user/:user/todos/:todo', TodoController.updateTodo)
appRouter.delete('/user/:user/todos/:todo', TodoController.deleteTodo)

export default appRouter;