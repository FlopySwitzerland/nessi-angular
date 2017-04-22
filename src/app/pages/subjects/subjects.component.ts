import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'ms-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects;
  schoolclasses;
  academicyears;

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit() {

    this.searchService.getsubjects().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });

    this.schoolclasses = [
      {
        name: 'XMPT 3A',
        establishment: 'EPSIC'
      },
      {
        name: 'INFO 3A',
        establishment: 'EPSIC'
      }
    ];

    this.academicyears = [
      {
        name: '2015 - 2016',
        startenddates: 'août 24 2015 - juin 10 2016'
      },
      {
        name: 'INFO 3A',
        establishment: 'EPSIC'
      }
    ];

    this.subjects = [
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
