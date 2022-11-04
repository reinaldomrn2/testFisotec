import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fisotec-tool-bar',
  templateUrl: './fisotec-tool-bar.component.html',
  styleUrls: ['./fisotec-tool-bar.component.css'],
})
export class FisotecToolBarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public isActive(route: string): boolean {
    return this._router.url.includes(route);
  }

  public handleClickTab(route: string): void {
    this._router.navigate([`/${route}`]);
  }
}
