import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { Baitap1Component } from './baitap1.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    Baitap1Component,
  ],
  imports: [CommonModule],
  // Khai báo các component có thể được sử dụng ở bên ngoài module
  exports: [
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // ContentComponent,
    Baitap1Component
  ],
})
export class Baitap1Module {}
