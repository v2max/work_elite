import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collection: any = [];
  event: any;
  
  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.data) {
      
      this.httpClient.get(state.data).subscribe((data: any) => {
        this.collection = data;
      });
    }
  } 
  

   openPopup(boxset:any): void {

    console.log("hjhfjdfdjfh",boxset )
    const dialogRef = this.dialog.open(PopupComponent, {
      
      width: '1000px',
      height:'600px',
    
      data: boxset
    });
  }

}
