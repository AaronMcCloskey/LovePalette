import { QuoteService } from './../quote.service';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  @Output() quoteAdded

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.quoteService.addQuote(form.value.content)
      .subscribe(
        () => alert('Quote created!')
      );
    form.reset();
  }

}
