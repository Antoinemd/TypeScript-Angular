import {Chose} 			from "@NF/nf";
import {ComponentIHM} 	from "./ComponentIHM";

const htmlTemplate = `
	<div class="view">
		<input class="toggle" type="checkbox">
		<label class="texte"></label>
		<button class="destroy"></button> 
	</div>
	<form>
		<input class="edit"/>
	</form>
`;

// Classe à compléter...
export class ChoseIHM extends ComponentIHM {
	constructor(public NF: Chose, root: HTMLElement | string) {
		super(NF, root);
		this.root.innerHTML = htmlTemplate;

		// Etape 0: J'identifie les éléments intéressant pour le HTML
		let label: HTMLLabelElement = this.root.querySelector( "label" ) as HTMLLabelElement;
		let inputFait : HTMLInputElement = this.root.querySelector( "input.toggle" ) as HTMLInputElement;	 	// désignation de la checkBox
		let btnDestroy : HTMLButtonElement = this.root.querySelector( "button.destroy") as HTMLButtonElement;	// désignation du bouton supprimer
		let formLabel : HTMLLabelElement = this.root.querySelector( "label.texte" ) as HTMLLabelElement;		// désignation de l'élement label 
		let inputEdit : HTMLInputElement = this.root.querySelector( "input.edit") as HTMLInputElement;			// désignation de l'élément input à éditer
		let submitForm : HTMLFormElement = this.root.querySelector( "form") as HTMLFormElement;					// désignation de l'élément  pour le preventDefault
		label.textContent = NF.texte;

		// Bloc 1 : S'abonner aux interaction sur la vue et les traduire en commandes NF
		inputFait.addEventListener("change", (evt) => {
			console.log("La vue dit que", evt);
			NF.Fait( inputFait.checked );
		}, false);

		btnDestroy.addEventListener("click", (evt) => {
			console.log("La vu pour destroy dit que ", evt)
			NF.dispose();

		}, false);

		formLabel.addEventListener("dblclick", (evt) => {
			console.log("La vu pour le label dit que ", evt)
			this.root.classList.add("editing");//.laBalise<li>
			inputEdit.value = NF.texte;
			inputEdit.focus;
		}, false);

		// EventListenner sur la perte de focus pour l'edition
		inputEdit.addEventListener("blur", (evt) => {
			console.log("La vu pour le blur dit que ", evt)
			NF.Texte( inputEdit.value );
			this.root.classList.remove("editing");

		}, false);

		// EventListener pour faire le preventDefault de la touche entrée
		submitForm.addEventListener("submit", (evt) => {
			console.log("La vue pour le preventDefault dit que ", evt)
			evt.preventDefault();
			inputEdit.blur();
		}, false);

		// Bloc 2 : S'abonner aux NF et mettre à jour la vue en conséquence
		NF.on("update", (nf, eventName, event) => {
			console.log("Le NF a dit que", event);
 
			if(NF.fait) {
				this.root.classList.add("completed");
			}else{
				this.root.classList.remove("completed");
			}
			inputFait.checked = NF.fait;
			label.textContent = NF.texte;
		});
	}
}
