import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { _HttpClient } from './http/_HttpClient';

@NgModule({
  declarations: [],
  providers: [
    _HttpClient
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
