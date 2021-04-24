import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //父传子：子组件通过@Input()接收父组件传过来的数据
  //并在子组件使用[]接收
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
