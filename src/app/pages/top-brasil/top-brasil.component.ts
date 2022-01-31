import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/resources/services/auth.service';

@Component({
  selector: 'app-top-brasil',
  templateUrl: './top-brasil.component.html',
  styleUrls: ['./top-brasil.component.scss'],
})
export class TopBrasilComponent implements OnInit {
  public allItens: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getInfoTopBrasil('br', '100', '1').subscribe((res: any) => {
      console.log(res);
      this.allItens = res.articles;
      console.log(this.allItens);
    });
  }
}
