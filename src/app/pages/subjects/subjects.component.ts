import {Component, HostListener, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import * as _ from 'lodash';
import { MdDialogRef, MdDialog } from '@angular/material';
import {routeAnimation} from '../../route.animation';
import {NgForm} from '@angular/forms';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {AppSettings} from '../../app.settings';
import {RequestOptions} from '@angular/http';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  animations: [ routeAnimation ]
})

export class SubjectsComponent implements OnInit {

  subjects;
  schoolclasses;
  academicyears;
  AddAcademicYearRef: MdDialogRef<AddAcademicYearDialogComponent>;
  AddEstablishmentRef: MdDialogRef<AddEstablishmentDialogComponent>;
  AddSchoolClassRef: MdDialogRef<AddSchoolClassDialogComponent>;
  result: string;


  constructor(
    private searchService: SearchService,
    public dialog: MdDialog
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


  openDialog() {
    this.AddSchoolClassRef = this.dialog.open(AddSchoolClassDialogComponent, {
      disableClose: false
    });

    this.AddSchoolClassRef.afterClosed().subscribe(result => {
      this.result = result;
      this.AddSchoolClassRef = null;
    });
  }

  addSchoolClass() {
    this.AddSchoolClassRef = this.dialog.open(AddSchoolClassDialogComponent, {
      disableClose: false
    });

  }

}


/**
 *  School Classes
 *
 */
@Component({
  selector: 'app-addschoolclass-dialog',
  templateUrl: '../../components/addschoolclass.component.html'
})
export class AddSchoolClassDialogComponent {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public dialogRef: MdDialogRef<AddSchoolClassDialogComponent>, public authHttp: AuthHttp) { }


  save(form: NgForm) {
    console.log(form.value);
    this.authHttp.post(AppSettings.API_ENDPOINT + 'schoolclasses/add.json', localStorage.getItem('token'))
      .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Request Complete')
    );
  }
}


/**
 *  Establishments
 *
 */
@Component({
  selector: 'app-addestablishment-dialog',
  templateUrl: '../../components/addacademicyear.component.html'
})
export class AddEstablishmentDialogComponent {
  constructor(public dialogRef: MdDialogRef<AddEstablishmentDialogComponent>) { }

  save(form: NgForm) {

  }

}


/**
 *  Academic Years
 *
 */
@Component({
  selector: 'app-addacademicyear-dialog',
  templateUrl: '../../components/addacademicyear.component.html',
})
export class AddAcademicYearDialogComponent {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public dialogRef: MdDialogRef<AddAcademicYearDialogComponent>) { }

}
