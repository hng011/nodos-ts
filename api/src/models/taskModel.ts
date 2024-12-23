import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import generateTaskID from '../utils/idGenerator'; 
// import { v4 as uuidv4 } from 'uuid';


class Task extends Model {
    public id!: string;
    public desc!: string;
    public completed!: boolean;
}


Task.init(
    {
        id: {
            type: DataTypes.STRING, 
            defaultValue: generateTaskID,
            primaryKey: true,
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'tasks',    
    },
);

export default Task;
