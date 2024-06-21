import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent,CommonModule,HttpClientModule, CardsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}
)


export class AppComponent {
  showList = new BehaviorSubject(false);
  onSubmit(){
    console.log("Chegou no app")
    this.showList.next(true)
  }
}
