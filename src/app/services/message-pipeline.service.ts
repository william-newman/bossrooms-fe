import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagePipelineService {
  currentVersion = '0.1.0';
  errorMessages: string[] = [];
  errorMsg400 = 'Bad Request';
  errorMsg404 = 'Item not found';
  errorMsg500 = 'Internal error';
  tryAgainMsg = 'Please try again';

  constructor() { }

  // Add error message to array, wait 5 secs, clear that message
  addErrorMessage(errMessage: string): void {
    this.errorMessages.push(errMessage);
    setTimeout(() => {
      this.removeErrorMessages();
    }, 5000);
  }

  removeErrorMessages(): void {
    this.errorMessages.shift(); // Possible error history functionality
  }

  pullCurrentVersionValue(): string {
    return this.currentVersion;
  }
}
