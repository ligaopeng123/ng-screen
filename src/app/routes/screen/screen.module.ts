import { NgModule } from '@angular/core';
import { ScreenAddComponent } from '@routes/screen/add/screen-add.component';
import { ScreenComponent } from '@routes/screen/screen.component';


// 需要动态加载的组件
const COMPONENTS = [
  ScreenComponent,
  ScreenAddComponent
];

// 动态加载模块
const DERSCRIBECOMPONENTSHEADER = [

];
// 需要动态加载的组件
const DERSCRIBECOMPONENTS = [

];


@NgModule({
  imports: [
    ...DERSCRIBECOMPONENTS
  ],
  providers: [],
  declarations: [...COMPONENTS, ...DERSCRIBECOMPONENTSHEADER],
  exports: [...COMPONENTS],
})
export class ScreenModule {}
