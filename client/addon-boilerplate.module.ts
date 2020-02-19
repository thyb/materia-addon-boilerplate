import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Addon } from '@materia/addons';

import { AddonViewComponent } from './addon-view/addon-view.component';
import { AddonSetupComponent } from './addon-setup/addon-setup.component';

@Addon('@materia/addon-boilerplate')
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: [AddonViewComponent, AddonSetupComponent],
  exports: [AddonViewComponent, AddonSetupComponent],
  entryComponents: [AddonSetupComponent]
})
export class AddonBoilerplateModule {}
