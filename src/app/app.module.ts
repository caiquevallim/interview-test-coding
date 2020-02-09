import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemSolutionComponent} from './components/problem-solution/problem-solution.component';
import {ProblemService} from './shared/problem.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProblemListComponent,
    ProblemSolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProblemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
