import { Component } from '@angular/core';
import { ListsService } from '../../services/lists.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    
    constructor(public listsService: ListsService) {
    
    }
    
}
