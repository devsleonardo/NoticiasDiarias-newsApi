import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/resources/services/auth.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public allItens: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getInfoGames('games', '100', '1').subscribe((res: any) => {
      console.log(res);
      this.allItens = res.articles;
      console.log(this.allItens);
    });
  }
}
