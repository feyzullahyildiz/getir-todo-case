import express, { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { Todo } from './db';
export const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.json({});
    }
    next();
});
if (process.env.FRONTEND_DIST) {
    app.use(express.static(process.env.FRONTEND_DIST));
    console.log('frontend inited');
} else {
    console.log('frontend not inited');
}

const createMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().max(300),
        });
        const validateResult = schema.validate(req.body);
        if (validateResult.error) {
            throw validateResult.error;
        }
        next();
    } catch (error) {
        next(error);
    }
};
app.post('/api/', createMiddleware, async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.json(todo);
    } catch (error) {
        next(error);
    }
});
app.get('/api/', async (req, res, next) => {
    try {
        const todoList = await Todo.find({});
        res.json(todoList);
    } catch (error) {
        next(error);
    }
});

const findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const t = await Todo.findById(req.params.id);
        if (!t) {
            throw new Error('Todo Not Found');
        }
        next();
    } catch (error) {
        next(error);
    }
};
const updateMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().max(300),
            completed: Joi.boolean(),
        });
        const validateResult = schema.validate(req.body);
        if (validateResult.error) {
            throw validateResult.error;
        }
        next();
    } catch (error) {
        next(error);
    }
};
app.put('/api/:id', updateMiddleware, findById, async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const todo = await Todo.updateOne({ _id: id }, body);
        res.json(todo);
    } catch (error) {
        next(error);
    }
});

app.delete('/api/:id', findById, async (req, res, next) => {
    try {
        const id = req.params.id;

        const todo = await Todo.deleteOne({ _id: id });
        res.json(todo);
    } catch (error) {
        next(error);
    }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!err) {
        return res.json({ error: { message: 'UnknownError' } });
    }
    const message = err.message || 'UnknownError';
    res.status(500).json({
        error: { message },
    });
});
