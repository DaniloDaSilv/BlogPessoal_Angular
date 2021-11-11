import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USerLogin } from '../model/USerLogin';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  entrar(USerLogin: USerLogin): Observable<USerLogin> {
    return this.http.post<USerLogin>('https://blogpesuar.herokuapp.com/usuarios/logar', USerLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://blogpesuar.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://blogpesuar.herokuapp.com/usuarios/${id}`)
  }
  logado() {
    let ok = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}

