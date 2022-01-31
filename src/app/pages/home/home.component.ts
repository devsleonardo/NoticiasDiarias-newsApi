import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../resources/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allItens: any = [];
  public form = new FormGroup({
    temaSearch: new FormControl(null, [Validators.required]),
  });

  constructor(private auth: AuthService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.auth.getInfo('Notícias', '52', '1').subscribe(
      (res: any) => {
        console.log(res);
        this.allItens = res.articles;
        console.log(this.allItens);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  infoClick(): void {
    this.auth.getInfoClick(this.form.value.temaSearch, '50', '1').subscribe(
      (res: any) => {
        this.allItens = res.articles;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
