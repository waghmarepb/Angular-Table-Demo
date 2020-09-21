import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'one/demo',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'one',
        loadChildren: './demo-one/demo-one.module#DemoOneModule'
      },
      {
        path: 'two',
        loadChildren: './demo-two/demo-two.module#DemoTwoModule'
      },
      {
        path: 'three',
        loadChildren: './demo-three/demo-three.module#DemoThreeModule'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
