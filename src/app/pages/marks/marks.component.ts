import { Component, OnInit } from '@angular/core';
import {routeAnimation} from '../../route.animation';

@Component({
  selector: 'ms-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class MarksComponent implements OnInit {

  rows;

  tableHover: boolean = true;
  tableStriped: boolean;
  tableCondensed: boolean;
  tableBordered: boolean;

  constructor() { }

  ngOnInit() {
    this.rows = [
      {
        "school": "EPSIC",
        "schoolclass": "XMPT 3A",
        "branche": "English",
        "examdate": "02/01/2017",
        "note": "4.5"
      },
      {
        "school": "EPSIC",
        "schoolclass": "XMPT 3A",
        "branche": "German",
        "examdate": "10/02/2017",
        "note": "5.5"
      },
      {
        "school": "EPSIC",
        "schoolclass": "XMPT 3A",
        "branche": "Math",
        "examdate": "15/02/2017",
        "note": "2.5"
      },
      {
        "school": "EPSIC",
        "schoolclass": "INFO 3A",
        "branche": "PHP",
        "examdate": "28/02/2017",
        "note": "5.5"
      }
    ];

  }

}
