import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'hello Minh';
  student: any = {
    name: 'Minh',
    age: 20,
  };
  username: string = 'Cybersoft';
  active: boolean = false;
  email: string = '';
  address: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeUserName(usernameRef: HTMLInputElement) {
    //Cách DOM thủ công javascript
    // const username = <HTMLInputElement>document.getElementById('username')
    // this.username = username.value

    // Cách DOM angular
    console.log(usernameRef);
    this.username = usernameRef.value;
  }

  changeEmail(event: any) {
    this.email = event.target.value
  }


}
