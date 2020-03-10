import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

// 需要动态加载的组件
const COMPONENTS = [
  LayoutComponent
];

const HEADERCOMPONENTS = [

];
// 动态加载模块
const DERSCRIBECOMPONENTSHEADER = [

];
// 需要动态加载的组件
const DERSCRIBECOMPONENTS = [

];

// passport
const PASSPORT = [  ];

@NgModule({
  imports: [
    ...DERSCRIBECOMPONENTS
  ],
  providers: [],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT, ...DERSCRIBECOMPONENTSHEADER],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
