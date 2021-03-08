import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessagePipelineService } from 'src/app/services/message-pipeline.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: any;
  password: any;
  username: any;
  errorMessage: any;
  currentVersion: string;

  constructor(private authService: AuthenticationService, private router: Router, private msgService: MessagePipelineService) {
    this.currentVersion = this.msgService.pullCurrentVersionValue();
  }

  signUp(valid: boolean): void {
    const email = this.email;
    const password = this.password;
    const username = this.username;
    if (username.toLowerCase().match('^billy$')) {
      this.msgService.addErrorMessage('THERE CAN ONLY BE ONE');
    } else if (!valid) {
      this.msgService.addErrorMessage('Sign up service is greatly broken.');
      return;
    } else {
      this.errorMessage = '';
      // this.authService.signUpFire(email, password, username)
      //   .then(resolve => {
      //     this.errorMessage = 'Success!';
      //     this.router.navigate(['/chat']);
      //   })
      //   .catch(error => {
      //     this.errorMessage = error.message;
      //   });
    }
  }

  validate(): void {
    const validEmail = !!this.email.match('[^@]+@[^.]+..+');
    const validDisplayName = !!this.username.match('^[a-zA-Z0-9]+');
    const validPassword = !!this.password.match('.{6,}');
    let valid = false;

    if (!validEmail) {
      this.msgService.addErrorMessage('Invalid email format');
      this.errorMessage = 'Invalid email format';
      return;
    } else if (!validDisplayName) {
      this.msgService.addErrorMessage('Display name may not include special characters');
      this.errorMessage = 'Display name may not include special characters';
      return;
    } else if (!validPassword) {
      this.msgService.addErrorMessage('Password must be at least 6 characters');
      this.errorMessage = 'Password must be at least 6 characters';
      return;
    } else {
      valid = validDisplayName && validEmail && validPassword;
      this.signUp(valid);
    }
  }
}
