import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { KittenComponent } from './info-box/kitten/kitten.component';
import { WeatherComponent } from './info-box/weather/weather.component';
import { PlayerComponent } from './info-box/player/player.component';
import { FormsModule } from '@angular/forms';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    ContactsComponent,
    KittenComponent,
    WeatherComponent,
    PlayerComponent,
    InfoBoxComponent,
  ],
})
export class DashboardModule { }
