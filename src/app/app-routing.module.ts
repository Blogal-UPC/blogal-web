import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningsComponent } from './pages/earnings/earnings.component';
import { PublicationComponent } from './publication/publication.component';
import { QuestionsComponent } from './pages/questions/questions.component';

const routes: Routes = [{path:'earnings', component:EarningsComponent},
  {path:'publication', component:PublicationComponent},
  {path:'questions', component:QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
