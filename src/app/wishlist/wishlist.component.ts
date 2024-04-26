import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  [x: string]: any;
collection:any = [];

 ngOnInit(): void {
  
   this.wishlist();
 }
 
 wishlist(){

  let data:any = localStorage.getItem('wishlist');
   
  this.collection = JSON.parse(data);

  console.log(this.collection,"wishes");
  

 }

 remove(wishset: any) {

  let isAlreadyInWishlist:any
  let ff:any
 
    let existingData:any = localStorage.getItem("wishlist");
    let userArray = JSON.parse(existingData);
    console.log("arry find");
    
    console.log(wishset,'ertyuio');

    
    for (let i:any = 0; i < userArray.length; i++) {

      if (isEqual(userArray[i],wishset)) {

        console.log('Item already exists in wishlist');
        isAlreadyInWishlist = true;
         ff = i;
        console.log(ff,'uytre');
        
        break;
      }
    }

        if (isAlreadyInWishlist) {
          console.log(ff,'2uytre');
    userArray.splice( ff, 1);
    localStorage.setItem("wishlist", JSON.stringify(userArray));
    console.log('setted');
    } else {
      
       false;
    }
    
    
    this.wishlist();

}


}

function isEqual(obj1: { [x: string]: any; }, obj2: { [x: string]: any; }) {
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

 
