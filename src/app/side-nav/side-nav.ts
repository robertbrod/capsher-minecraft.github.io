import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule, RouterOutlet, MatSidenavModule, MatListModule, RouterLink],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {}
