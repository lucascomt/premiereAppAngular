import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ma première application';
  sujet = 'Apprentissage de Angular';
  description = `Pour l'instant, je le préfère à react, on verra mais ça s'annonce bien.`;
  logo = 'https://odinn.ca/medias/logo.webp';
}
