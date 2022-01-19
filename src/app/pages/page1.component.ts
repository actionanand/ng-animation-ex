import { Component } from "@angular/core";


@Component({
  selector: 'app-page1',
  template: `
  <div class="page-container">
    <h3>Hello Friends! This is Page 1</h3>
    <button class="btn btn-success" routerLink="/page-2">Page 2</button>
  </div>`,
  styles: [`
  .page-container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
  }
  `]
})

export class Page1 {

}