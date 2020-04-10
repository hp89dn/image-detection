import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { AiToolComponent } from './ai-tool.component';
import { CvImageComponent } from './cv-image/cv-image.component';

const routes: Routes = [
  {
    path: '',
    component: AiToolComponent,
    children: [
        {
            path: 'cv-image',
            component: CvImageComponent,  
        },
      {
        path: '404',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AIToolRoutingModule {
}
