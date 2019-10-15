import { Request, Response } from "express";

import pool from "../database";

class IndexController {

    public index (req: Request, res: Response){
        pool.query('Describe auditoria')
        res.json('games')
    }
} 

export const indexcontroller = new IndexController();