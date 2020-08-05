
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
  public hint = [];
  constructor(private searchAPI: SearchService) {}

  searchClear = () =>{
    this.searchWord ='';
    this.image = [];
    this.searchEnd = false;
    this.hint = ['sad', 'bad', 'mad'];
  }

  onSubmit = () =>{
    this.searchAPI.getImage(this.searchWord)
    .subscribe((res: any) => {
        this.image = res['results'];
        console.log(this.image);
    });
    this.searchEnd = true;

  }

  onKey(event: any) {
    this.searchAPI.getSearchHint(this.searchWord)
    .subscribe((res: any) => {
      this.hint= res['fuzzy'];
      console.log(this.hint);
  });
  }

  searchWithHint = (hint) =>{
    this.searchWord = hint;
    this.searchAPI.getImage(hint)
    .subscribe((res: any) => {
        this.image = res['results'];
        console.log(this.image);
    });
    this.searchEnd = true;

  }
}
