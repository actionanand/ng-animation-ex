import { Component } from "@angular/core";


@Component({
  selector: 'app-page2',
  template: `
  <div class="page-container">
    <h3>Hey there! I'm in the left side. This is Page 2</h3>
    <button class="btn btn-success" routerLink="/page-3">Page 3</button>
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


export class Page2 {
  
}