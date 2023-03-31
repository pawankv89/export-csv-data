import { Component } from '@angular/core';
import { CdkTableExporterModule } from 'cdk-table-exporter';
export interface DataOfFootballers {
  playerName: string;
  playerCountry: string;
  playerClub: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CdkTableExporterModule{
  title = 'export-csv-data';
  dataSource:DataOfFootballers[]= [{
    playerName: 'Cristiano Ronaldo',
    playerCountry: 'Pourtgal',
    playerClub: 'Juventus'
  },
  {
    playerName: 'Lionel Messi',
    playerCountry: 'Argentina',
    playerClub: 'Barcelona'
  },
  {
    playerName: 'Neymar Junior',
    playerCountry: 'Brazil',
    playerClub: 'PSG'
  },
  {
  playerName: 'Tonni Kroos',
  playerCountry: 'Germany',
  playerClub: 'Real Madrid'
  },
  {
    playerName: 'Paul Pogba',
    playerCountry: 'France',
    playerClub: 'Manchester United'
  },
   {
    playerName: 'Jio',
    playerCountry: 'France',
    playerClub: 'Manchester United'
  }];
  displayedColumns: string[] = ['playerName', 'playerCountry', 'playerClub'];
}
