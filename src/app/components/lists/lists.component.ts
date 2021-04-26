import { Component, Input, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { TaskList } from '../../models/task-list.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
    @Input() finished: boolean;
    
    constructor(public listsService: ListsService,
                private router: Router) {
    }
    
    ngOnInit() {
    }
    
    openListDetails(list: TaskList): void {
        this.router.navigateByUrl(`/tabs/tab${this.finished ? 2 : 1}/add-task/${list.id}`);
    }
    
    deleteList(list: TaskList) {
        this.listsService.deleteList(list);
    }
    
}
