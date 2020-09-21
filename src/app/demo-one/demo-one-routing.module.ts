import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';


// const routes: Routes = [
//   {
//     path:'demo',
//     component:DemoComponent,
//   }
// ];

const routes: Routes = [
  {
      path: '',
      redirectTo: '/',
      pathMatch: 'full',
  },
{
    path: '',
    children: [
        {
            path: 'demo',
            component: DemoComponent,
            data: {
                title: 'Add Task Template'
            }
        },       
    ]
  }];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoOneRoutingModule { }
