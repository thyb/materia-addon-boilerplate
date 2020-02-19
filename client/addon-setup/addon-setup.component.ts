
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AddonSetup } from '@materia/addons';
import { IApp } from '@materia/interfaces';

export interface IBoilerplateSetup {
    name: string;
}

@AddonSetup('@materia/addon-boilerplate')
@Component({
    selector: 'materia-addon-boilerplate-setup',
    templateUrl: './addon-setup.component.html',
    styleUrls: ['./addon-setup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddonSetupComponent implements OnInit {
    @Input() app: IApp;
    @Input() settings: {name: string};

    @Output() save = new EventEmitter<IBoilerplateSetup>();
    @Output() cancel = new EventEmitter<void>();

    form: FormGroup;

    get requiredError() { return this.form.get('name').hasError('required'); }

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(this.settings?.name ?? '', Validators.required)
        });
    }

    saveClick() {
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    }
}
