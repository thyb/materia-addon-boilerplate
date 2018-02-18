
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Addon } from "@materia/addons";

@Addon({
	package: "@materia/addon-boilerplate",
	deps: []
})
@Component({
	selector: "materia-addon-boilerplate",
	templateUrl: "./addon-view.component.html",
	styleUrls: ["./addon-view.component.scss"],
	providers: []
})
export class AddonViewComponent implements OnInit {
	@Input() app;
	@Input() settings;

	@Output() openSetup = new EventEmitter<void>();

	constructor() {}

	ngOnInit() {
	}
}