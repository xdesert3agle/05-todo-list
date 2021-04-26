import { Component } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { TaskList } from '../../models/task-list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    lists: TaskList[] = [];
    
    constructor(public listsService: ListsService,
                public router: Router,
                public alertController: AlertController) {
        
    }
    
    async addList() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Nueva lista',
            inputs: [
                {
                    name: 'title',
                    type: 'text',
                    placeholder: 'Nombre de la lista'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Crear',
                    handler: (data) => {
                        const listId =  this.listsService.createList(data.title);
                        this.router.navigateByUrl(`/tabs/tab1/add-task/${listId}`);
                    }
                }
            ]
        });
        
        await alert.present();
    }
}
