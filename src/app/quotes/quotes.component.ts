import { Response } from '@angular/http';
import { QuoteService } from '../quote.service';
import { Quote } from '../quote.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.onGetQuotes();
  }

  onGetQuotes(){
    this.quoteService.getQuotes().subscribe(
      (quotes: Quote[]) => this.quotes = quotes,
      (error: Response) => console.log(error)
    );
  }

}
