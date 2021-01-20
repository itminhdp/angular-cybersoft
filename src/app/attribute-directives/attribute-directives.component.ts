import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  active: boolean = true;
  color: string = 'red';
  result: string = `
    <div class="bg-primary>
      <span class="text-danger">Hello World</span>
    </div>
  `
  imgUrl: string = "https://bizweb.dktcdn.net/100/042/434/files/bao-hiem-cho-meo-can.jpg?v=1548607439627";

  constructor() { }

  ngOnInit(): void {
  }

}
