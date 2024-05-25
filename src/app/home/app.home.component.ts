import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RepositorioComponent } from "../components/repositorio/repositorio.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RepositorioComponent],
  templateUrl: 'app.home.component.html',
})
export class AppHomeComponent {

  items = [1, 2, 3, 4, 5]
}
