import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-setup',
  imports: [
    MatCardModule,
    ClipboardModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
  ],
  templateUrl: './setup.html',
  styleUrl: './setup.scss',
})
export class Setup {
  constructor(private snackBar: MatSnackBar) {}
  copySuccess() {
    this.snackBar.open('Server IP copied to clipboard!', 'Close', {
      duration: 2000,
    });
  }
}
