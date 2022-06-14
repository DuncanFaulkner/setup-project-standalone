import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const IMPORTS = [CommonModule, RouterModule, MatButtonModule];

@Component({
  selector: 'app-home',
  imports: [...IMPORTS],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  protected title = 'Home';
}
