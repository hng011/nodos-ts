import { Request, Response } from 'express';
import TaskService from '../services/taskService';


export const getTasks = async (req: Request, res: Response) => {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
};


export const createTask = async (req: Request, res: Response) => {
    const { desc } = req.body;
    const task = await TaskService.createTask(desc);
    res.status(201).json(task); // 201: new resource was created
};


export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { desc, completed } = req.body;
    const updatedTask = await TaskService.updateTask(id, desc, completed);
    res.json(updatedTask);
};


export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    res.status(200).json({message: `Task with ID ${id} was successfully deleted`}); 
};
