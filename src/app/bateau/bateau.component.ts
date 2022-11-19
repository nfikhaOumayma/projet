import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css']
})
export class BateauComponent implements OnInit {

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }

}
