
import { log } from "console";
import { Request, Response } from "express";


export default class ServerController {
    static check = async (req: Request, res: Response) => {
        try {
            const data = { message: "ok" };
            res.send(data);
        } catch (e) {
            res.status(404).send(e.message)
        }
    }
}