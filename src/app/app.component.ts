import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';
import { CardComponent } from './components/card/card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent,CommonModule,HttpClientModule,CardsListComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}
)


export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList :   Location [] = [];

  constructor(private unitService: GetUnitsService){}


  onSubmit(){
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
