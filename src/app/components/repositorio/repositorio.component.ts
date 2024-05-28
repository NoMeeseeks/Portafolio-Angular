import { Component, Input, inject } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repositorio.component.html',
  styleUrl: './repositorio.component.css'
})
export class RepositorioComponent {

  @Input() titulo: string = '';

  @Input() descripcion: string | null = '';

  @Input() github: string = '';

  @Input() lenguajesUrl: string = '';

  lenguajesUsados: any;

  private _landingPage = inject(LandingPageService);

  constructor() { this.obtenerLenguajesUsados() }

  private obtenerLenguajesUsados() {

    this._landingPage.obtenerLenguajesDelRepositorio(this.lenguajesUrl)
      .subscribe(
        resp => {
          this.lenguajesUsados = JSON.stringify(resp);
          console.log(this.lenguajesUsados);
        }
      )
  }
}
