import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Login } from '../shared/login.model';
import { UserStorageService } from '../shared/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login: Login = new Login();
  public invalid: boolean;

  constructor(
    private authService: AuthService,
    private userStorageService: UserStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.signIn(this.login).subscribe((data: any) => {
      //console.log(data);
      this.userStorageService.set(data['body']);
      this.router.navigate(['/admin/games']);
    });
  }
}
