import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes'; //导入模拟数据
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

//@Component 元数据中指定的样式和样式表都是局限于该组件的。
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;//selectedHero属性(对象)的类型为Hero
  heroes: Hero[];

  //heroes = HEROES; //使用heroes属性接收HEROES数组

  //注入 HeroService
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes(); //初始化调用，从服务中获取这些英雄数据。
  }

  //onSelect() 方法，它会把模板中被点击的英雄赋值给组件的 selectedHero 属性。
  onSelect(hero: Hero): void{
    this.selectedHero = hero; //此时html页面就有selectedHero属性了，才可以*ngif
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //从服务中异步方式获取这些英雄数据。
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
