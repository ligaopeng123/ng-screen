import {
  Component,
  OnInit,
} from '@angular/core';
import { _HttpClient } from '@core/http/_HttpClient';

@Component({
  selector: 'layout-default',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  styles: [`
    .content-details{
     
    }
  `]
})
export class LayoutComponent implements OnInit {
  constructor(
    public http: _HttpClient
  ) {}
  private readonly url = '/api/commission/layout';
  ngOnInit() {
    this.getCommission();
  }
  getCommission() {
    this.http.get(this.url).subscribe(data => {
      console.log(data);
    })
  }
}
