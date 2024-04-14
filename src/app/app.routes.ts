import { Routes } from '@angular/router';
import { CharacterComponent } from './routes/character/character.component';
import { TeamsBrowserComponent } from './routes/teams-browser/teams-browser.component';

export const routes: Routes = [
    { path: 'Character', component: CharacterComponent }
    , { path: 'Teams', component: TeamsBrowserComponent }
];
