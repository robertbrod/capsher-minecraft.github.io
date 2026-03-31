import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule, MatToolbarModule, ClipboardModule, MatIconModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  constructor(private snackBar: MatSnackBar) {}
  copySuccess() {
    this.snackBar.open('Server IP copied to clipboard!', 'Close', {
      duration: 2000,
    });
  }
}
