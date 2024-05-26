import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RepositorioComponent } from "../components/repositorio/repositorio.component";
import { LandingPageService } from "../services/landing-page.service";
import { Repository } from "../interfaces/repositorios.interfaces";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RepositorioComponent],
  templateUrl: 'app.home.component.html',
})
export class AppHomeComponent {

  items = [1, 2, 3, 4, 5];

  repositorios: Repository[] = [];

  private _landingPageService = inject(LandingPageService);

  constructor() { this.listaDeRepositorios() }

  private listaDeRepositorios() {
    this._landingPageService.obtenerRepositorios()
      .subscribe(
        resp => {
          this.repositorios = resp;
          console.log(resp)
        }
      )

  }

}
