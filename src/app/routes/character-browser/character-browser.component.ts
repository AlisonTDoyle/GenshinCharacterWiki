import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/character-browser/page-header/page-header.component';
import { CharacterCardComponent } from '../../components/character-browser/character-card/character-card.component';
import { CharacterQueryControlComponent } from '../../components/character-browser/character-query-control/character-query-control.component';

@Component({
  selector: 'app-character-browser',
  standalone: true,
  imports: [
    PageHeaderComponent
    , CharacterCardComponent
    , CharacterQueryControlComponent
  ],
  templateUrl: './character-browser.component.html',
  styleUrl: './character-browser.component.scss'
})
export class CharacterBrowserComponent {

}
