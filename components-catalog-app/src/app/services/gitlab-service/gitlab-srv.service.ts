import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Config} from 'protractor';
import {flatMap, map} from 'rxjs/operators';
import {forkJoin, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitlabSrvService {

  headers: HttpHeaders = new HttpHeaders();
  _next;
  _keys;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({'Private-Token': 'Jr1bgb7iA46sbYqzxjRe'});
  }

  callGitLab(url: string, headers: HttpHeaders): Observable<any> {
    return this.http.get(url, {observe: 'response', headers: headers})
      .pipe(
        map((res: any) => {
            // Aquí se gestiona tener la siguiente URL
            this._next = +res.headers.get('X-Next-Page');
            this._keys = res.headers.get('link');
            res.json();
          },
          flatMap((second: any) => {
            if (this._next > 0) {
              return this.http.get(this.cutUpURL(this._keys))
                .pipe(
                  map((res: any) => res.json())
                );
            }
          }))
      );
  }

  // Ejemplo Angular 6 con el flatMap
  getBookAuthor(id: number): Observable<any> {
    return this.http.get('/api/books/' + id)
      .pipe(
        map((res: any) => res.json(),
          flatMap((book: any) => {
            return this.http.get('/api/authors/' + book.author_id)
              .pipe(
                map((res: any) => res.json())
              );
          })
        )
      );
  }

  getRepositoryList(url: string): Observable<any> {
    return this.callGitLab(url, this.headers);
  }

  cutUpURL(linkHeader) {
    let choppedLink = linkHeader.split(/", </g); // Creo un objeto con las URLs separadas facilitadas por la cabecera "Link" de la respuesta
    // Itero sobre el objeto creado hasta encontrar la URL que contenga el flag "next" y la devuelvo.
    for (let position in choppedLink) {
      let value = choppedLink[position];
      if (value.includes('next')) {
        return this.getValidURL(value); // Llamamos a la función que devuelve únicamente la url.
      }
    }
  }

  getValidURL(urlValue: string): string {
    let auxVar = urlValue.search(/; rel="next"/g); // Esto tendrá como valor la posición del punto y coma
    let linkValue: string = urlValue.slice(1, (auxVar - 1)); // Se recoge desde la 'h' hasta la última letra de la URL sin '>'
    return linkValue;
  }


  /* Will return:

  {
    id: 1,
    first_name: 'Daniele',
    last_name: 'Ghidoli'
  }

  */
}
