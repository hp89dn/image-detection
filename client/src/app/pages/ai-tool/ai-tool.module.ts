import { NbCardModule, NbButtonModule, NbInputModule, NbIconModule, NbFormFieldModule, NbToastrModule, NbSpinnerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiToolComponent } from './ai-tool.component';
import { CvImageComponent } from './cv-image/cv-image.component';
import { AIToolRoutingModule } from './ai-tool-routing.module';



@NgModule({
  declarations: [AiToolComponent, CvImageComponent],
  imports: [
    CommonModule,
    NbCardModule,
    AIToolRoutingModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NbToastrModule.forRoot(),
  ]
})
export class AIToolModule { }
