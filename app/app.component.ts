import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importe RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Marca o componente como standalone
  imports: [RouterModule],  // Adiciona RouterModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Projeto UFC';
}
