import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { bateau } from '../classeBateau/bateau';
import { bateauService } from '../services/Bateau.service';
@Component({
  selector: 'app-listbateaux',
  templateUrl: './listbateaux.component.html',
  styleUrls: ['./listbateaux.component.css']
})
export class ListbateauxComponent implements OnInit {
  lesbateaux!:bateau[];
  constructor(private bateauService:bateauService) { }
  ngOnInit(): void {
    this.bateauService.getbateaux()
        .subscribe (data => this.lesbateaux = data)
  }
}
