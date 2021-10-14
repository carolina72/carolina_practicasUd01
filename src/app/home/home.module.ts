
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { MisComponentesModule } from './../componentes/mis-componentes.module';
import { HomePage } from './home.page';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MisComponentesModule,
    TabsPageRoutingModule,
    TabsPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
