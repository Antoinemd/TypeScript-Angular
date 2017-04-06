import { Component, Input, ViewChild, ElementRef} from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				name			= "fait"
				[ngModel]="nf.fait"
				(ngModelChange)="nf.Fait($event)"/>
		<label 	class="texte" (dblclick)="modeEdition()">{{nf.texte}}</label>
		<button class="destroy" (click)="nf.dispose()"></button>
	</div>
	<form *ngIf="editing" (ngSubmit)="setText(newText.value)">
		<input 	class="edit" [ngModel]="nf.texte" name="newText" #newText (blur)="setText(newText.value)"/>
	</form>
`;

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
    @Input ("nf" ) nf   : Chose;
	@ViewChild("newText") newTextInput : ElementRef;
	editing			    : boolean = false;

	//constructor() {}
    modeEdition() {
        this.editing = true;
        requestAnimationFrame(() => {
            this.newTextInput.nativeElement.focus();
        });
    }

    setText(txt: string) {
        this.editing=false;
        //console.log("On tue tout");
        if(txt==="") {
            this.nf.dispose();
        } else {this.nf.Texte(txt);}
    }
}
