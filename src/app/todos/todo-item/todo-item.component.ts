import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  id:any;
  link:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.link="https://www.facebook.com/dialog/share?app_id=249365643438499&display=popup&quote=This+is+the+description+"+this.id+"parameter&href=https%3A%2F%2Fdeeplinktrials.page.link/?link=https%3A%2F%2Fdeeplinktrialz.web.app/todos/"+this.id+"%26st=Item"+this.id+"%26sd=ThisIs"+this.id+"%26si=https%3A%2F%2Fhomepages.cae.wisc.edu/~ece533/images/mountain.png";
  }

}
