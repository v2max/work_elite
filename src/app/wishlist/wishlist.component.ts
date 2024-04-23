import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
collection:any = [];

 ngOnInit(): void {
  
   this.wishlist();
 }
 
 wishlist(){

  let data:any = localStorage.getItem('wishlist');
   
  this.collection = JSON.parse(data);

  console.log(this.collection,"wishes");
  

 }

}
