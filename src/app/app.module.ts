import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import FormsModule để sử dụng two-way binding
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Baitap4Module } from './baitap4/baitap4.module';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';



@NgModule({

  // Nơi khai báo các component do module quản lý
  // Component bắt buộc phải được qquanr lý bởi một module
  // 1 component không thể có 2 module cùng quản lý nó
  declarations: [AppComponent, HelloComponent, DataBindingComponent, StructuralDirectivesComponent, AttributeDirectivesComponent],
  // Nơi khai báo các module sử dụng trong module này AppModule
  // HomeModule: HeaderComponent, SidebarComponent, ContentComponent, FooterComponent
  // => Để sủ dụng được các component bên trong AppComponent cần gắn HomeModule vào trong mảng imports
  // Các module do angular tạo sẵn: RouterModule, HttpClientModule, FormsModule,...
  imports: [BrowserModule, AppRoutingModule, Baitap1Module, Baitap2Module, FormsModule, Baitap4Module ],
  // Nơi khai báo các services cần sử dụng
  providers: [],
  // Khai báo AppComponent là component khởi chạy đầu tiên của module
  bootstrap: [AppComponent],
})
export class AppModule {}
