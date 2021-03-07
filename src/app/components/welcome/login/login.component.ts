import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  errorMessage: any;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  login(valid: boolean): void {
    if (valid) {
      console.log('yay');
      // this.authService
      //   .login(this.email, this.password)
      //   .then(res => {
      //     const status = 'online';
      //     this.authService.setUserStatus(status);
      //   })
      //   .then(() => this.router.navigate(['/chat']))
      //   .catch(err => (this.errorMessage = err.message));
    } else {
      this.errorMessage = 'Fatal error';
    }
  }

  handleSubmit(event: any): void {
    if (event.keyCode === 13) {
      this.validate();
    }
  }

  validate(): void {
    const validEmail = !!(this.email.length > 2);
    // !!this.email.match('[^@]+@[^.]+..+');
    const validPassword = !!this.password.match('.{6,}');
    let valid = false;

    if (!validEmail) {
      this.errorMessage = 'Invalid email format - ignore this message'; // TODO
      return;
    } else if (!validPassword) {
      this.errorMessage = 'Password must be at least 6 characters';
      return;
    } else {
      valid = validEmail && validPassword;
      this.login(valid);
      return;
    }
  }
}
