
import { log } from "console";
import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";

import { Todo, User } from "../models";

export default class UserController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const usersRepository: Repository<User> = getRepository(User);
            const data = await usersRepository.find();
            res.send(data);
        } catch (e) {
            res.status(404).send(e.message)
        }
    }
    static getOne = async (req: Request, res: Response) => {
        try {
            const usersRepository: Repository<User> = getRepository(User);
            const userId = parseInt(req.params.user);
            const data = await usersRepository.findOne({ id: userId });
            if (data) {
                console.log(data);
                res.send(data);
            } else {
                const error = new Error();
                error.message = "User not found";
                res.status(404).send(error.message)
            }
        } catch (e) {
            res.status(400).send(e.message)
        }
    }
    static createUser = async (req: Request, res: Response) => {
        try {
            const usersRepository: Repository<User> = getRepository(User);
            const dataUser: any = req.body;
            const newUser: User = new User();
            newUser.name = dataUser.name;
            const data: User = await usersRepository.save(newUser);
            res.send(newUser)
        } catch (e) {
            res.status(400).send(e.message)
        }
    }

    static updateUser = async (req: Request, res: Response) => {
        try {
            const usersRepository: Repository<User> = getRepository(User);
            const userId = parseInt(req.params.user);
            await usersRepository.update({ id: userId }, req.body)
            res.send('user');
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    static deleteUser = async (req: Request, res: Response) => {
        try {
            const usersRepository: Repository<User> = getRepository(User);
            const todosRepository: Repository<Todo> = getRepository(Todo);
            const userId = parseInt(req.params.user);
            await todosRepository.delete({ userId: userId })
            await usersRepository.delete({ id: userId })
            res.send('deleted');
        } catch (e) {
            console.log(e)
            res.status(404).send(e.message);
        }
    }
}