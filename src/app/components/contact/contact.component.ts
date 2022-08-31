import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isSendMessageBtnDiactivated: boolean = false;
  errorDispaly: boolean = false;
  errorMessage: string = "Success: message sent";
  errorAlertCSSClass: string = "alert alert-success";

  firstName: string = "";
  lastName: string = "";
  userEmail: string = "";
  userRequest: string = "";
  userText: string = "";

  constructor(private apiService: ApiService) { }
  ngOnInit(): void { }

  // Event methods + API request
  eventSendMessage() {
    if (this.errorChecker()) {
      return null;
    } else {
      console.log(this.firstName, this.lastName, this.userEmail, this.userRequest, this.userText)
      let newMessage = {
        "f_name": this.firstName,
        "l_name": this.lastName,
        "email": this.userEmail,
        "request_type": this.userRequest,
        "user_message": this.userText
      }
      this.apiService.addUserMessage(newMessage).subscribe({
        next: (response) => {
          if (response.email == this.userEmail) {
            this.isSendMessageBtnDiactivated = true;
            this.cleanForm();
            this.setDisplayMessage("Success: message sent", false);
          }
        },
        error: (error) => {
          console.log(error);
        }
      })

    }
  }

  // Help methods
  setDisplayMessage(errorMessage: string, isItError: boolean) {
    if (isItError) {
      this.errorAlertCSSClass = "alert alert-danger";
    } else {
      this.errorAlertCSSClass = "alert alert-success";
    }
    this.errorMessage = errorMessage;
    this.errorDispaly = true;
  }

  cleanForm() {
    this.firstName = "";
    this.lastName = "";
    this.userEmail = "";
    this.userRequest = "";
    this.userText = "";
  }

  errorChecker() {
    if (this.firstName.length == 0 || this.lastName.length == 0 ||
      this.userEmail.length == 0 || this.userRequest.length == 0 ||
      this.userText.length == 0) {
      this.cleanForm();
      this.setDisplayMessage("Error: some fields are empty", true);
      return true;
    }
    if (this.userEmail.search("@") == -1) {
      this.cleanForm();
      this.setDisplayMessage("Error: email is incorrect", true);
      return true;
    }
  }
}
