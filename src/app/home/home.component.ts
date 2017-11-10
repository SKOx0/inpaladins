import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';

import { HiRezService } from './hiRez.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;

  constructor(private hiRezService: HiRezService) { }

  ngOnInit() {
    this.isLoading = true;

    this.hiRezService.createSession()
      .finally(() => { this.isLoading = false; })
      .subscribe(console.log, console.log);
  }
}
