import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() topMovies:Movie[]=[]
  @Input() posterPrefixinchild:string=""
  @Output() Trending:EventEmitter<string>=new EventEmitter<string>

  constructor(){
    console.log("constructor run")
  }
  ngOnInit():void{
    console.log("oninit run")
  }
  ngOnChanges(): void {
    console.log("onchange run")
  }
  ngOnDestroy(): void {
    console.log("destroy")

  }

  senddata(e:any){
    this.Trending.emit(e.target.value)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplaySpeed: 1000,
    autoplayTimeout:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
}
