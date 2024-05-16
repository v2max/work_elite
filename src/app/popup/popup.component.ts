import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  [x: string]: any;
  boxset: any;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('djfhjdhfjdh', data);
  }

  ngOnInit() {
    this.check()
  }

  wish() {
    let existWish = localStorage.getItem('wishlist');
    let wishlist = existWish ? JSON.parse(existWish) : [];

    let list = this.data;
    let isAlreadyInWishlist = false;

    console.log(list, 'data for list');

    if (wishlist.length == 0) {
      wishlist.push( list);
      let stringfiy = JSON.stringify( wishlist);
      localStorage.setItem('wishlist', stringfiy);
      console.log('length');
    } else {
      console.log('in for');

      for (let i = 0; i < wishlist.length; i++) {
        if (isEqual(wishlist[i], list)) {
          console.log('Item already exists in wishlist');
          setbtn();
          isAlreadyInWishlist = true;
          break;
        }
      }

      if (!isAlreadyInWishlist) {
        wishlist.push(list);
        let stringify = JSON.stringify(wishlist);
        localStorage.setItem('wishlist', stringify);
        setbtn();
        console.log('Item added to wishlist');
      } else {
        false;
      }
    }
  }

  check(){

    let existWish = localStorage.getItem('wishlist');
    let wishlist = existWish ? JSON.parse(existWish) : [];

    let list = this.data;

    if (wishlist.length == 0) {
      wishlist.push( list);
     let stringfiy = JSON.stringify( wishlist);
     localStorage.setItem('wishlist', stringfiy);
   }else{

    for (let i = 0; i < wishlist.length; i++) {
      if (isEqual(wishlist[i], list)) {
        
        setbtn();
        break;

      }else{
        false;
      }
    }

   }

  }

  close(): void {
    this.dialogRef.close();
  }
}

function setbtn() {
  const myButton = document.querySelector('#wishbtn') as HTMLButtonElement;
  myButton.textContent = 'Added In Wishlist';
  myButton.disabled = true;
}

function isEqual(obj1: { [x: string]: any }, obj2: { [x: string]: any }) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
