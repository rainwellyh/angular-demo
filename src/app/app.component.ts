import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //组件名称，这个组件在最外面的index.html使用
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄之旅'; //声明属性
}
