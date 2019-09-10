import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public titleInfo = {
    title1: 'titl1'
  };
  public itemArr = [{
    name: '',
    path: './assets/img/shop/group3.png'
  },
  {
    name: '',
    path: './assets/img/shop/group1.png'
  },
  {
    name: '',
    path: '../../assets/img/shop/group2.png'
  }
  ];
  // 路由导航
  public navgationArr = [{
    title: '首页',
    path: '/home'
  }, {
    title: '小店',
    path: '/shop'
  }];
}
