import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../Service/news-api.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css','../reponsiveCategory.css','../app.component.css']
})
export class MarketComponent implements OnInit {

  thiTruongResult: any = [];
  totalLength:any;
  page:number=1;
  constructor(private service: NewsApiService) { }
  ngOnInit(): void {
    this.getItems();
  }
  getItems():void{
    this.service.thiTruongtApi().subscribe((result) => {
      this.thiTruongResult = result.items;
      this.totalLength = result.items.length;
      console.log(result)
    })
  }
  replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }
}
