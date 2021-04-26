import { Task } from './task.model';

export class TaskList {
    id: number;
    title: string;
    createdAt: Date;
    finishedAt: Date;
    finished: boolean;
    items: Task[];
    
    constructor(title?: string) {
        if (title !== undefined) {
            this.id = new Date().getTime();
            this.title = title;
            this.createdAt = new Date();
            this.finished = false;
            this.items = [];
        }
    }
    
    fillFromJson(json): TaskList {
        this.id = json.id;
        this.title = json.title;
        this.createdAt = json.createdAt;
        this.finishedAt = json.finishedAt;
        this.finished = json.finished;
        this.items = json.items;
        
        return this;
    }
    
    getPending(): number {
        return this.items.filter(item => !item.finished).length;
    }
}
