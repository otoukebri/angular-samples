import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    mail: new FormControl(""),
    password: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // console.warn(this.profileForm.value);
    alert("bonjour!");
  }
}
