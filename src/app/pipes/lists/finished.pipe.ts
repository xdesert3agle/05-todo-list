import { Pipe, PipeTransform } from '@angular/core';
import { TaskList } from '../../models/task-list.model';

@Pipe({
    name: 'finished',
    pure: false
})
export class FinishedPipe implements PipeTransform {
    
    transform(lists: TaskList[], finished: boolean = true): TaskList[] {
        return lists.filter(l => l.finished === finished);
    }
}
