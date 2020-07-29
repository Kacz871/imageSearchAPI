
import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchWord = '';
  public image = [];
  public searchEnd = false;

  constructor(private searchAPI: SearchService) {}

  searchClear = () =>{
    this.searchWord ='';
    this.image = [];
    this.searchEnd = false;
  }

  onSubmit = () =>{
    this.searchAPI.getImage(this.searchWord)
    .subscribe((res: any) => {
        this.image = res['results'];
        console.log(this.image);
    });
    this.searchEnd = true;

  }

}
