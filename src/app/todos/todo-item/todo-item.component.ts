import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  id:any;
  linkfb:any;
  linkln:any;
  linktw:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.linkfb="https://www.facebook.com/dialog/share?app_id=249365643438499&display=popup&quote=This+is+the+description+"+this.id+"parameter&href=https%3A%2F%2Fdeeplinktrials.page.link/?link=https%3A%2F%2Fdeeplinktrialz.web.app/todos/"+this.id+"%26st=Item"+this.id+"%26sd=ThisIs"+this.id+"%26si=https%3A%2F%2Fhomepages.cae.wisc.edu/~ece533/images/mountain.png";
    this.linkln="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Ftrustd.page.link%2F%3Flink%3Dhttps%3A%2F%2Fdeeplinktrialz.web.app/todos/"+this.id+"%26st%3DItem"+this.id+"%26sd%3DDescription"+this.id+"%2F%26si%3Dhttps%3A%2F%2Fhomepages.cae.wisc.edu%2F~ece533%2Fimages%2Fmountain.png";
    this.linktw="https://twitter.com/intent/tweet?text=https://trustd.page.link/?link=https://deeplinktrialz.web.app/todos/"+this.id+"%26st=four%26sd=ThisIs"+this.id+"%26si=https://homepages.cae.wisc.edu/~ece533/images/mountain.png";
  }

}
