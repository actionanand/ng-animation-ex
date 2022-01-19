import { Component } from "@angular/core";


@Component({
  selector: 'app-page3',
  template: `
  <div class="page-container">
    <h3>See you all! This is Page 3</h3>
    <button class="btn btn-success" routerLink="/page-1">Page 1</button>
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


export class Page3 {
  
}