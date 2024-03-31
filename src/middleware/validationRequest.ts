import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validationRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req?.body
            })
            next()
        } catch (error) {
            next(error)
            // console.log(error);
        }
    }
}

export default validationRequest