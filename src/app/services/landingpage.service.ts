import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';


//Destructors apiUsers value, from the environment-file.
const { apiUsers, apiKey } = environment;



//Singleton: only one instance.... cannot be instantiated 
@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  //Dependency injection. Private so that the component do not have direct access to it
  //Java eq: public LandingpageService (HttpClient http){};
  constructor(private readonly http: HttpClient) { 

  };

  // Models, Observables, and RxJS operators.
  
  // Login
  public login(username: string): Observable<Trainer>{
    return this.checkUsername(username)
    .pipe(
      switchMap((trainer: Trainer | undefined) =>{
        if (trainer === undefined) { //user does not exist
              return this.createUser(username);
        }
        return of(trainer);
      })
    )
  };
  
  // Check if user exists. 
  //Java equivalent: public Observable<Trainer|undefined> checkUsername(String username){};
public checkUsername(username: string): Observable<Trainer | undefined> {
  //The below query will check if the username exists and will come back with an array or an empty array...
  return this.http.get<Trainer[]>(`${apiUsers}?username=${username}`)
  .pipe(
    //Here we can use RxJS-operators
    map((response: Trainer[] ) => response.pop())
  )
};

  // Create a User
  private createUser(username: string): Observable<Trainer> {
    // trainer
    const trainer = {
      username,
      pokemon: []
    };

    // headers -> API key
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });
    // POST - create items on the server
    return this.http.post<Trainer>(apiUsers, trainer, {
      headers
    })
    
  }

  // IF user || Created User -> Store user
}
