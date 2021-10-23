import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup} from '@angular/forms';


var markdown;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page implements OnInit{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        name:"",
        content: ""
      }
    )
  }
       
comments = [
    {
      name: 'Jan-Kanty Pawelski',
      content: 'I made it! My awesome angular comment system. What do you think?',
    },
    {
      name: 'Tomasz Jakut',
      content: 'Nice looking. Good job dude ;)',
    },
    {
      name: 'Jan-Kanty Pawelski',
      content: 'Thanks man. I tried hard.',
    },
    {
      name: 'Grzegorz Bąk',
      content: 'Third! Amazing system man! By the way check my new website: <a href="//gregbak.com">http://gregbak.com</a>.',
    }
];
  newComment = {};
  addNewComment = function () {
    
    console.log(this.form.value);
    this.comments.push(this.form.value);
    return this.newComment = {};
  };
}
