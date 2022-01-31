import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/resources/services/auth.service';

@Component({
  selector: 'app-top-mundo',
  templateUrl: './top-mundo.component.html',
  styleUrls: ['./top-mundo.component.scss'],
})
export class TopMundoComponent implements OnInit {
  public allItens: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getInfoTopMundo('us', '100', '1').subscribe((res: any) => {
      console.log(res);
      this.allItens = res.articles;
      console.log(this.allItens);
    });
  }
}
