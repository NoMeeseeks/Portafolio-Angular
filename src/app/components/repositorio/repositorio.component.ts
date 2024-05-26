import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  standalone: true,
  imports: [],
  templateUrl: './repositorio.component.html',
  styleUrl: './repositorio.component.css'
})
export class RepositorioComponent {

  @Input() titulo: string = '';
}
