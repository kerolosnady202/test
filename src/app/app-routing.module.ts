import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent , children:[
    {path:"silder",component:SliderComponent}
  ]},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent ,
   children:[
    {path:"",component:WebComponent},
    {path:"web",component:WebComponent},
    {path:"mobile",component:MobileComponent},
   ]
    },
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
