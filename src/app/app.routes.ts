
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JamesComponent } from './components/james/james.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';

const APP_ROUTES: Routes = [
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'jugadores', component:JugadoresComponent},
  {path: 'james', component:JamesComponent},
  {path: 'messi',component:MessiComponent},
  {path: 'ronaldo',component:RonaldoComponent },
  {path: '**', pathMatch:'full', redirectTo: 'jugadores'}
];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES)