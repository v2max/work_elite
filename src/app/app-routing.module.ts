import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavtabComponent } from './navtab/navtab.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormComponent } from './form/form.component';
import { LogComponent } from './log/log.component';
import { CollectionComponent } from './collection/collection.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  {path:'',component:WelcomeComponent},
 {path:'taskbar',component:NavtabComponent},
 {path:'login',component:LogComponent},
 {path:'form',component:FormComponent},
 {path:'collection',component:CollectionComponent},
 {path:'about',component:AboutComponent},
 {path:'wish',component:WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
