import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  [x: string]: any;
  boxset: any;
  // wishlist:any = [];

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('djfhjdhfjdh', data);
  }

  close(): void {
    this.dialogRef.close();
  }

  wish(){

    let existWish = localStorage.getItem('wishlist')
    let wishlist:any = existWish ? JSON.parse(existWish) : [];
    
    let list = this.data;

    console.log(list,"data for list");

     wishlist.push(list);

    console.log(wishlist,"fitted in arry");

    let stringfiy = JSON.stringify(wishlist);

    localStorage.setItem("wishlist",stringfiy);


  }

}
