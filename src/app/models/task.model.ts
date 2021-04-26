export class Task {
    title: string;
    finished: boolean;
    
    constructor(title: string) {
        this.title = title;
        this.finished = false;
    }
}
