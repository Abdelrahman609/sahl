import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cats = [];
  dataOfCats:any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    
    this.getCats();
    
  }
  getCats() {
    this.api.getCats().subscribe(
      (data)=>{


        this.dataOfCats = data;
        console.log(this.dataOfCats.code);

        if(this.dataOfCats.code === 200) {
          console.log('good');
          this.cats = this.dataOfCats.data;
          console.log(this.cats[1]['name']);
        }
        else {
          console.log(this.dataOfCats.message);
        }
      },
      (error)=>{ 
        console.log(error);
      }
    )
  
  }

}
