import Task from '../models/taskModel';


class TaskService {
    static async getAllTasks() {
        return Task.findAll();
    }


    static async createTask(desc: string) {
        return Task.create({ desc });
    }


    static async updateTask(id: string, desc: string, completed: boolean) {
        const task = await Task.findByPk(id);
        
        if (!task) {
            throw new Error('Task not found');
        }
        
        task.desc = desc != null ? desc : task.desc;
        task.completed = completed;
        return task.save();
    }

    static async deleteTask(id: string) {
        const task = await Task.findByPk(id);

        if (!task) {
            throw new Error('Task not found');
       }

        return task.destroy();
    }
}

export default TaskService;
