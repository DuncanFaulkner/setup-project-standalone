import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { FooterComponent } from './footer/footer.component';

const IMPORTS = [CommonModule, RouterModule];
@Component({
  selector: 'app-root',
  imports: [...IMPORTS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'setup-project-standalone';
}
