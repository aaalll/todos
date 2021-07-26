
import { log } from "console";
import { Request, Response } from "express";

import { getRepository, Repository } from "typeorm";

import Todo from "../entities/Todo";

export default class TodoController {


    static getAll = async (req: Request, res: Response) => {
        try {
            const todosRepository: Repository<Todo> = getRepository(Todo);
            const userId = parseInt(req.params.user);
            const data = await todosRepository.find({ userId: userId });
            res.send(data);
        } catch (e) {
            res.status(404).send(e.message)
        }
    }
    static getOne = async (req: Request, res: Response) => {
        try {
            const todosRepository: Repository<Todo> = getRepository(Todo);
            const todoId = parseInt(req.params.todo);
            const userId = parseInt(req.params.user);
            const data = await todosRepository.findOne({ id: todoId, userId: userId });
            if (data) {
                console.log(data);
                res.send(data);
            } else {
                const error = new Error();
                error.message = "Todo not found";
                res.status(404).send(error.message)
            }
        } catch (e) {
            res.status(400).send(e.message)
        }
    }
    static createTodo = async (req: Request, res: Response) => {
        try {
            const todosRepository: Repository<Todo> = getRepository(Todo);
            const dataTodo: any = req.body;
            const userId = parseInt(req.params.user);
            const newTodo: Todo = new Todo();
            newTodo.title = dataTodo.title;
            newTodo.userId = userId;
            const data: Todo = await todosRepository.save(newTodo);
            res.send(newTodo)
        } catch (e) {
            res.status(400).send(e.message)
        }
    }

    static updateTodo = async (req: Request, res: Response) => {
        try {
            const todosRepository: Repository<Todo> = getRepository(Todo);
            const todoId = parseInt(req.params.todo);
            const userId = parseInt(req.params.user);
            console.log({ id: todoId, userId: userId });
            await todosRepository.update({ id: todoId, userId: userId }, req.body)
            res.send('todo');
        } catch (e) {
            console.log(e);
            res.status(400).send(e.message);
        }
    }
    static deleteTodo = async (req: Request, res: Response) => {
        try {
            const todosRepository: Repository<Todo> = getRepository(Todo);
            const todoId = parseInt(req.params.todo);
            const userId = parseInt(req.params.user);
            await todosRepository.delete({ id: todoId, userId: userId })
            res.send('deleted');
        } catch (e) {
            console.log(e)
            res.status(404).send(e.message);
        }
    }
}