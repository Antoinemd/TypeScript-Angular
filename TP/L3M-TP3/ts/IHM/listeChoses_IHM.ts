import {ListeChoses, EventListeChoses}	from "@NF/nf";
import {ComponentIHM} 	from "./ComponentIHM";
import {ChoseIHM}		from "./Chose_IHM";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>Liste</h1>
			<form action="#/">
				<input class="new-todo" placeholder="Que faire?" autofocus>
			</form>
		</header>
		<section class="main">
			<input class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list"></ul>
		</section>
	</section>
`;

// Classe à compléter...
export class ListeChosesIHM extends ComponentIHM {
	constructor(public NF: ListeChoses, root: HTMLElement | string) {
		super(NF, root);
		this.root.innerHTML = htmlTemplate;

		// Etape 0: Identifier dans le DOM les balises qui m'intéressent
		let newTodo: HTMLInputElement = this.root.querySelector( "form > input.new-todo" ) as HTMLInputElement;
		let form: HTMLFormElement = this.root.querySelector( "form" ) as HTMLFormElement;
		let ul: HTMLUListElement = this.root.querySelector( "ul.todo-list" ) as HTMLUListElement;

		let toggler : HTMLInputElement = this.root.querySelector("input.toggle-all") as HTMLInputElement;
        let updateInputToutFait = () => { // But de cette fonction => cocher ou pas la case
            toggler.checked = this.ToutEstCoche();
        };
        updateInputToutFait();

		// Etape 1: On traduit les événements issus du HTML en commandes du noyau fonctionnel
		form.onsubmit = (evt) => {
			this.NF.Ajouter( newTodo.value );
			// console.log("Ajout d'une chose à faire => NF=", this.NF);
			newTodo.value = "";
			evt.preventDefault();
		};
		
		toggler.onchange = (evt) => {
          let cocher = !this.ToutEstCoche();
            this.NF.choses.forEach( c => c.Fait(cocher) );
        };




		// Etape 2: Traduire les événements du Noyau fonctionnel en commandes IHM
		let chosesIHM : ChoseIHM[] = [];
		this.NF.on("update", (nf: ListeChoses, eventName: string, value: EventListeChoses) => {
			console.log("Le noyau m'informe que:", nf, eventName, value);
			if(value.append) { // On a ajouté une chose à faire dans le noyau
				//création de 3 éléments pour tester NF/IHM
				for (let i = 0; i < 3; ++i) {
					let li = document.createElement( "li" );
				    ul.appendChild(li);
				    // li.textContent = `Il faut ajouter un composant représentant une chose à faire pour ${value.append.texte}`;
	               	chosesIHM.push( new ChoseIHM(value.append, li) );
            	}
            }

            if(value.remove) { // on a supprimé une chose à faire dans le noyau
            	let choseNF = value.remove;
            	// Dispose de toutes les chosesIHM dans le NF
            	chosesIHM.filter( cihm =>  cihm.NF === choseNF).forEach( cihm => cihm.dispose() );
                chosesIHM = chosesIHM.filter( cihm => cihm.NF !== choseNF );

            }
		});
	}

	ToutEstCoche(): boolean {
		return this.NF.choses.reduce((acc, c) => acc && c.fait, true);
	}
}
