import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { LandingpageService } from 'src/app/services/landingpage.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-landingpagelogin-form',
  templateUrl: './landingpagelogin-form.component.html',
  styleUrls: ['./landingpagelogin-form.component.css']
})
export class LandingpageloginFormComponent {

  //Emits events to the login-page (its parent...) when a login happens...
  @Output() login: EventEmitter<void> = new EventEmitter();

  //Dependency injection...
  constructor(    
    private readonly landingpageLoginService: LandingpageService,
    private readonly trainerService: TrainerService,) {

   }
   
   public loginSubmit(loginForm: NgForm): void{

    // username
    const { username } = loginForm.value;    

    this.landingpageLoginService.login(username)
    .subscribe({
      next: (trainer: Trainer) => {
        this.trainerService.trainer = trainer;
        this.login.emit();
      },
      error: () => {

      }
    }
    )
  }

}
