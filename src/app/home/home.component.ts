import { Movie } from './../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../sevrvices/movies.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   searchTrend:string=""
   imgURL:string='https://image.tmdb.org/t/p/w500'
   trendingMovies:Movie[]=[]
   errmessage=""
   datafromchild:string=''
   constructor(private Movie_Service:MoviesService){
    console.log("constructor")
  }
  welcoe(){
     console.log("welcome")

   }


  ngOnInit(): void {
    this.Movie_Service.getTrandingMovies().subscribe({
      next:(movies)=>{this.trendingMovies=movies.results},
      error:(err)=>{this.errmessage = err.message},
     }
   )
  }
}
