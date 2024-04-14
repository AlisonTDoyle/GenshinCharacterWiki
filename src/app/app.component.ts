import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { CharacterBrowserComponent } from './routes/character-browser/character-browser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
    , HeaderComponent
    , CharacterBrowserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GenshinCharacterWiki';
}
