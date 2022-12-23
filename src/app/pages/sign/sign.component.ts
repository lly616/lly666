import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MessageService } from 'primeng/api';
import { Login, Register } from 'src/app/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})


export class SignComponent implements OnInit {
  issign: boolean = true;

  form: Login = {
    username: '',
    password: ''
  }

  regForm: Register = {
    username: '',
    password: '',

  }

  constructor(private userService: UserService, private message: MessageService,private router: Router) { }

  sign() {
    this.userService.login(this.form).subscribe(res => {
      console.log(res)
      if (res[0].password == this.form.password) {
        this.message.add({ severity: 'success', summary: 'LOG IN', detail: res.message });
        console.log(res)
        this.router.navigate(['/'],{ queryParams: { username:this.form.username }});
      } else {
        this.message.add({ severity: 'info', summary: 'LOG IN', detail: res.message });
      }
    })
  }

  register() {
    this.userService.register(this.regForm).subscribe(res => {
      if (res.success) {
        this.message.add({ severity: 'success', summary: 'REGISTER', detail: res.message });
      } else {
        this.message.add({ severity: 'info', summary: 'REGISTER', detail: res.message });
      }
    })
  }

  ngOnInit(): void {
  }

}
