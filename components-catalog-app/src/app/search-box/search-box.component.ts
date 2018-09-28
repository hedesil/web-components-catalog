import {Component, OnInit} from '@angular/core';
import {SearchService} from '../services/search-service/search.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  results: any;
  queryField: FormControl = new FormControl();

  constructor(private _searchService: SearchService) {
  }

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(keyValue =>
          this._searchService.search(keyValue)
        )
      )
      .subscribe(p => {
        this.results = p.body;
      });
  }


}
