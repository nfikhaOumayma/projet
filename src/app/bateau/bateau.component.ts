import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { bateau } from '../classeBateau/bateau';
import { bateauService } from '../services/Bateau.service';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css']
})
export class BateauComponent implements OnInit {
  @Input()bateau!:bateau;
 
  constructor(private http:HttpClient,) { }

  ngOnInit(): void {
  }

}
