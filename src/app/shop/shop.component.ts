import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public titleInfo = {
    title1: 'titl1',
    title1Txt: 'title1Txt',
    partOne: {
      title: 'partOneTitle',
      content: 'partOneContent',
      path: '././assets/img/shop/part1.png'
    },
    partTwo: {
      title: 'partTwoTitle',
      content: 'partTwoContent',
      path: '././assets/img/shop/part2.png'
    },
    partThree: {
      title: 'partThreeTitle',
      content: 'partThreeContent',
      path: '././assets/img/shop/part3.png'
    },
    partFour: {
      title: 'partFourTitle',
      content: 'partFourContent',
      path: '././assets/img/shop/part4.png'
    }
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
  },
  // {
  //   title: '小店',
  //   path: '/shop'
  // }
  ];
}
