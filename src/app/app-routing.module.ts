import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'; //引入仪表盘
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; //详情页

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //添加默认路由
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
