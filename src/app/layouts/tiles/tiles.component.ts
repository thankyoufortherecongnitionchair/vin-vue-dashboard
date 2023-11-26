import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
})
export class TilesComponent implements OnInit {
  constructor() {}

  @Input() postData: any;
  ngOnInit(): void {}
}
