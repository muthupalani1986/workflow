import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner/spinner.service';

@Component({
  selector: 'workflow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'workflow';
  constructor(public spinnerService:SpinnerService){}
    ngOnInit(): void {}
}