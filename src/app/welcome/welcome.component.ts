import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class WelcomeComponent implements OnInit {

  [x: string]: any;
  vdo:any="assets/img/stiles.mp4";
  
  newcol:any=[];

  constructor(private httpClient: HttpClient,private router: Router,private dialog: MatDialog) {

   
    }
  ngOnInit(): void {
    this.clicekNewCol()
  }

  menData: any = 'assets/data/men.data.json';
  womenData: any = 'assets/data/women.data.json';


  clickMen() {
    this.router.navigateByUrl('/collection', { state: { data: this.menData } });
    console.log('Men area clicked');
  }

  clickWomen() {
    this.router.navigateByUrl('/collection', { state: { data: this.womenData } });
    console.log('Women area clicked');
  }

  clicekNewCol(){
    this.httpClient.get('assets/data/newCollection.json').subscribe((data: any) => {
     this.newcol= data;

     for(let i =0;i< this.newcol.length;i++){

      let bundle = this.newcol[i].rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.newcol[i].rate = bundle;
      console.log(this.newcol[i].rate,'newRate');

     }
   });
 }

 openPopup(boxset:any): void {

  console.log("hjhfjdfdjfh",boxset )
  const dialogRef = this.dialog.open(PopupComponent, {
    width: '800px',
    height:'550px',
  data: boxset
  });
 }

}
