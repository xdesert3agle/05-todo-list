import { Component } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { ActivatedRoute } from '@angular/router';
import { TaskList } from '../../models/task-list.model';
import { Task } from '../../models/task.model';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.page.html',
    styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
    list: TaskList;
    newTaskTitle = '';
    
    constructor(private tasksService: ListsService,
                private route: ActivatedRoute) {
        
        const listId = this.route.snapshot.paramMap.get('id');
        this.list = this.tasksService.getList(listId);
    }
    
    addNewTask() {
        if (this.newTaskTitle.length > 0) {
            this.list.items.push(new Task(this.newTaskTitle));
            this.tasksService.saveLists();
            
            this.newTaskTitle = '';
        }
    }
    
    checkboxChanged() {
        if (this.list.getPending() === 0) {
            this.list.finishedAt = new Date();
            this.list.finished = true;
            
        } else {
            this.list.finishedAt = null;
            this.list.finished = false;
        }
        
        this.tasksService.saveLists();
    }
    
    deleteTask(i: number) {
        this.list.items.splice(i, 1);
        this.tasksService.saveLists();
    }
}
