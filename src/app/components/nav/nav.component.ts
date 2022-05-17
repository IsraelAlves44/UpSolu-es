
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
     var nav = $(".nav-link");
     nav.on("click", function() {
       nav.removeClass("active");
       $(this).addClass("active");
     })
  }

}
