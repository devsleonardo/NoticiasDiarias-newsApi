import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private everything: string = '/v2/everything'; //Pesquise cada artigo publicado
  private topHeadlines: string = '/v2/top-headlines'; //Retorna manchetes de notícias de última hora para países
  private sources: string = '/v2/top-headlines/sources'; //Informações de retorno (incluindo nome, descrição e categoria)
  private country: string = 'br'; //letras do país pelo que você quer obter manchetes.
  //private language: string = 'pt'; idioma usado nas pesquisas
  // private pagesize: string = ''; o número de resultados a serem retornado por página.
  // private page: string = '1'; use isso para página através dos resultados.
  private totalResults: string = 'page'; //use isso para página através dos resultados.

  private sortBy: string = 'publishedAt'; // a ordem para classificar os artigos. Opções possíveis: . .
  // relevancy | popularity | publishedAt | relevancy | q | popularity | publishedAt

  getInfo(tema: string, pageSize: string, page: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API}${this.everything}?q=${tema}&pageSize=${pageSize}&page=${page}&language=pt&sortBy=${this.sortBy}&apiKey=${environment.API_KEY}`
    );
  }

  getInfoClick(tema: string, pageSize: string, page: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API}${this.everything}?q=${tema}&pageSize=${pageSize}&page=${page}&language=pt&sortBy=${this.sortBy}&apiKey=${environment.API_KEY}`
    );
  }

  getInfoGames(tema: string, pageSize: string, page: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API}${this.everything}?q=${tema}&pageSize=${pageSize}&page=${page}&language=pt&sortBy=${this.sortBy}&apiKey=${environment.API_KEY}`
    );
  }

  getInfoTopBrasil(contry: string, pageSize: string, page: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API}${this.topHeadlines}?country=${contry}&pageSize=${pageSize}&page=${page}&language=pt&sortBy=${this.sortBy}&apiKey=${environment.API_KEY}`
    );
  }

  getInfoTopMundo(contry: string, pageSize: string, page: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.API}${this.topHeadlines}?country=${contry}&pageSize=${pageSize}&page=${page}&sortBy=${this.sortBy}&apiKey=${environment.API_KEY}`
    );
  }
}
