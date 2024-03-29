import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
                    },
                    {
                        path: 'add-task/:id',
                        loadChildren: () => import('../add-task/add-task.module').then(m => m.AddTaskPageModule),
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
                    },
                    {
                        path: 'add-task/:id',
                        loadChildren: () => import('../add-task/add-task.module').then(m => m.AddTaskPageModule),
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
