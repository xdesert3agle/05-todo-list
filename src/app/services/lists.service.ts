import { Injectable } from '@angular/core';
import { TaskList } from '../models/task-list.model';

@Injectable({
    providedIn: 'root'
})
export class ListsService {
    readonly STORAGE_LISTS_KEY = 'data';
    lists: TaskList[] = [];
    
    constructor() {
        this.loadLists();
    }
    
    createList(title: string): number {
        const newList = new TaskList(title);
        this.lists.push(newList);
        
        this.saveLists();
        
        return newList.id;
    }
    
    saveLists() {
        localStorage.setItem(this.STORAGE_LISTS_KEY, JSON.stringify(this.lists));
    }
    
    loadLists() {
        if (localStorage.getItem(this.STORAGE_LISTS_KEY)) {
            const savedLists = JSON.parse(localStorage.getItem(this.STORAGE_LISTS_KEY));
            
            for (const list of savedLists) {
                this.lists.push(new TaskList().fillFromJson(list));
            }
        }
    }
    
    getList(id: number | string): TaskList {
        const listId = Number(id);
        return this.lists.find(l => l.id === listId);
    }
    
    deleteList(list: TaskList) {
        this.lists = this.lists.filter(l => l.id !== list.id);
        this.saveLists();
    }
}
