import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-foreign',
  templateUrl: './foreign.component.html',
  styleUrls: ['./foreign.component.css', '../app.component.css','../reponsiveCategory.css']
})
export class ForeignComponent implements OnInit {

  thoiSuQuocteResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.service.thoiSuQuocte().subscribe((result) => {
      this.thoiSuQuocteResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
