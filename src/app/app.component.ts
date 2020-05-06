
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  @ViewChild('form') form: NgForm;


  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  formData = {};
  isSubmited = false;



  addRandEmail() {
    const randEmail = 'serbin@gmail.com';

    this.form.form.patchValue({
      user: { email: randEmail }
    });
  }

  submitForm(form: NgForm) {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }
}
