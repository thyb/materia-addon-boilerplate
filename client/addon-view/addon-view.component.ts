
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AddonView } from '@materia/addons';
import { IApp } from '@materia/interfaces';

@AddonView('@materia/addon-boilerplate')
@Component({
    selector: 'materia-addon-boilerplate',
    templateUrl: './addon-view.component.html',
    styleUrls: ['./addon-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddonViewComponent implements OnInit {
    @Input() app: IApp;
    @Input() settings: {name: string};

    @Output() openSetup = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {}
}
