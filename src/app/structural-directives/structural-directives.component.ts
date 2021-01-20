import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = true;
  isLogin: boolean = true;
  color: string = 'primary';
  movieList: any[] = [
    {name: "Avenger", price: 80000},
    {name: "Wonder woman", price: 76000},
    {name: "One punch man", price: 90123},
  ]

  constructor() {}

  ngOnInit(): void {}
}
