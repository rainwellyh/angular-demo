import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component'; //根组件
import { HeroesComponent } from './heroes/heroes.component'; //英雄组件
import { FormsModule } from '@angular/forms'; //输入相关的表单组件
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpClientModule} from '@angular/common/http';

//模拟数据
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TestComponent } from './test/test/test.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({ //每个组件都必须声明在（且只能声明在）一个 NgModule 中。
  declarations: [ //声明
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TestComponent,
    TodolistComponent
  ],
  imports: [ //所需外部模块的列表
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
