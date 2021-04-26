import { NgModule } from '@angular/core';
import { FinishedPipe } from './lists/finished.pipe';

@NgModule({
    declarations: [FinishedPipe],
    exports: [FinishedPipe]
})
export class PipesModule {
}
