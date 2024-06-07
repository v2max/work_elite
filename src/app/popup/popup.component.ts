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
  list: any;
  wishlist: any;
  isAlreadyInWishlist: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('djfhjdhfjdh', data);
    this.list = data;
  }

  ngOnInit() {
    this.check();
  }

  wish() {

    if (this.wishlist.length == 0) {
      this.setStorage();
    } else {
      this.loopForwish();
      if (!this.isAlreadyInWishlist) {
        this.setStorage();
        console.log('Item added to wishlist');
      } else {
        false;
      }
    }
  }

  check() {
    this.checkExistWish()
    this.loopForwish()
  }

  close(): void {
    this.dialogRef.close();
  }

  setStorage(this: any) {
    this.wishlist.push(this.list);
    let setString = JSON.stringify(this.wishlist);
    localStorage.setItem('wishlist', setString);
    setbtn();
  }

  checkExistWish() {
    let existWish = localStorage.getItem('wishlist');
    this.wishlist = existWish ? JSON.parse(existWish) : [];
  }

  loopForwish() {
    for (let i = 0; i < this.wishlist.length; i++) {
      if (isEqual(this.wishlist[i], this.list)) {
        setbtn();
        break;
      }
    }
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
