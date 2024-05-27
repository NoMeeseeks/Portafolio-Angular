import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RepositorioComponent } from "../components/repositorio/repositorio.component";
import { LandingPageService } from "../services/landing-page.service";
import { Repository } from "../interfaces/repositorios.interfaces";
import { ContactoComponent } from "../components/contacto/contacto.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RepositorioComponent, ContactoComponent],
  templateUrl: 'app.home.component.html',
})
export class AppHomeComponent {

  repositorios: Repository[] = [];

  private _landingPageService = inject(LandingPageService);

  constructor() {
    this.listaDeRepositorios()
  }

  private listaDeRepositorios() {
    this._landingPageService.obtenerRepositorios()
      .subscribe(
        resp => {
          this.repositorios = resp;
          // console.log(resp)
        }
      )

  }

}
