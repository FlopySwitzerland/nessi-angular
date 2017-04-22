import { Component, OnInit } from '@angular/core';
import {routeAnimation} from '../../route.animation';
import * as _ from 'lodash';
import { MdDialogRef, MdDialog } from "@angular/material";

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
  branches;

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

    this.branches = [
      {
        image: 'math/Calculator.png',
        name: 'Math',
        subject: 'EPSIC - XMPT 3A',
        content: '2 marks'
      },
      {
        image: 'science/Physics.png',
        name: 'Physics',
        subject: 'EPSIC - XMPT 3A',
        content: '1 mark'
      },
      {
        image: 'languages/Germany.png',
        name: 'German',
        subject: 'EPSIC - XMPT 3A',
        content: '3 marks'
      },
      {
        image: 'culture/Money.png',
        name: 'Economy',
        subject: 'EPSIC - XMPT 3A',
        content: '1 mark'
      },
      {
        image: 'culture/Archeology.png',
        name: 'History',
        subject: 'EPSIC - XMPT 3A',
        content: '2 marks'
      },
      {
        image: 'electronics/Cisco_Router.png',
        name: 'Module 256',
        subject: 'EPSIC - INFO 3A',
        content: '0 mark'
      }
    ];

  }

}
