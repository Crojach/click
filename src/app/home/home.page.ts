import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  source: string;
  constructor() {}
  
  ngOnInit(): void {
    document
      .getElementById('button')
      .addEventListener('click', (event: Event) => {
        this.setSource(event.isTrusted)
      })
  }

  onRobotClick() {
    document.getElementById('button').click();
  }

  setSource(isTrusted: boolean) {
    this.source = isTrusted ? 'User' : 'Robot'
  }
}
