import {Component, Input, OnInit}               from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} 	from "@NoyauFonctionnel/nf";
import {ListeChosesService}                     from "@NoyauFonctionnel/service";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form (ngSubmit)="nf.Ajouter(newTodo.value); newTodo.value=''">
				<input class="new-todo" placeholder="Que faire?" #newTodo autofocus>
			</form>

		</header>

		<section class="main">
			<input  class="toggle-all" 
			        type="checkbox"
			        [ngModel]="ToutEstFait()"
			        (ngModelChange)="ToutCocherOuDecocher()"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
			    <li *ngFor="let item of getChoses()" [class.editing]="Compo.editing">
			        <item-chose [nf]="item" #Compo>
                    </item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong>{{getNbRestante()}}</strong> restantes</span>
            <ul class="filters">
                <li>
                    <a class="filterAll"
                        (click)="filterCurrent=filterAll"
                        [class.selected]="filterCurrent===filterAll"
                        >Tous</a>
                </li>
                <li>
                    <a class="filterActives"
                        (click)="filterCurrent=filterActives"
                        [class.selected]="filterCurrent===filterActives">Actifs</a>
                </li>
                <li>
                    <a class="filterCompleted"
                        (click)="filterCurrent=filterCompleted"
                        [class.selected]="filterCurrent===filterCompleted">Complétés</a>
                </li>
            </ul>
            <button class="clear-completed" (click)="SupprimerCochees()">Supprimer cochées</button>
        </footer>
	</section>
	<br/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>
    <section>
        <button class="speechBtn" (mousedown)="speechAction()"> Speech recognition </button>
    </section>
`;

type filterChose = (c : Chose) => boolean;
@Component({
  selector		: "liste-choses",
  template		: htmlTemplate
})
export class ListeChoses implements OnInit {
    @Input() titre	: string;
    public nf       : ListeChosesNF;
    filterCurrent: filterChose;
    private choses  : Chose[] = [];
	constructor		(private serviceListe: ListeChosesService) {
        this.filterCurrent = this.filterAll;
	};
    ngOnInit(): void {
        ListeChosesService.getData().then( (nf) => {
            this.nf     = nf;
            this.choses = nf.choses;
        });
    }
    getChoses() : Chose[] {
        return this.choses.filter( this.filterCurrent );
    }
    ToutEstFait(): boolean {
        return(this.choses.reduce(
            (acc, c) => acc && c.fait
            , true)
        );
    }
    ToutCocherOuDecocher() {
        let faire=!this.ToutEstFait();
        this.choses.forEach(c => c.Fait(faire));
    }
    getNbRestante(): number {
        return this.choses.filter( this.filterActives ).length;
    }
    SupprimerCochees() {
        this.choses.filter( this.filterCompleted ).forEach( c => c.dispose() );
    }
    filterAll: filterChose = (c) => true;
    filterActives: filterChose = (c) => !c.fait;
    filterCompleted: filterChose = (c) => c.fait;

    checkCompatibility() : void {

    }

    speechAction() : void {
        console.log("mousedown!");

        if (!('webkitSpeechRecognition' in window)) {
             window.alert("Erreur: L'API SpeechRecognition non supportée par votre navigateur !");    }
        else {

            let recognition = new webkitSpeechRecognition();
            let userSentence = "";

            recognition.lang = "fr-FR"; 
            recognition.continuous = false;
            recognition.interimResults = true;
            // Methode qui apparament donne les meilleurs résultats pour la reco
            recognition.maxAlternatives = 1; 

            recognition.onstart = function() {
                //Listening (capturing voice from audio input) started.
                //This is a good place to give the user visual feedback about 
                //that (i.e. flash a red light, etc.)
            };

            recognition.onnomatch = function(event) {

            };


            recognition.onend = function() {
                //Again – give the user feedback that you are not listening anymore. 
                //If you wish to achieve continuous recognition – 
                //you can write a script to start the recognizer again here.
                console.log("fin de l'écoute");
            };

            recognition.onresult = function(event) {
                if (typeof(event.results) === 'undefined') { 
                    console.log("Quelquechose cloche...");
                    recognition.stop();
                    return;
                }

                //Todo remplacer par un foreach
                for (let i = event.resultIndex; i < event.results.length; ++i) {      
                    if (event.results[i].isFinal) { // resultat final
                        // resultat final qui nous interesse ..
                        console.log("resultat final: " + event.results[i][0].transcript);   
                        userSentence = event.results[i][0].transcript;
                    } else { // res inter...
                        // resultat intermediaire pour voir le déroulement ..
                        console.log("resultat intermediaire: " + event.results[i][0].transcript);  
                    } 
                } //fin du for

                // TODO: faire un tableau de String avec la liste de tous les ordres?
                // traitement des types d'action à faire
                
                let input = userSentence.toString().toLowerCase();
                let i = input.indexOf(" ");
                let keyWord = input.substring(0, i);
                let tacheATtaiter = input.substring(i);
                // console.log("the rest", taskToAdd);


                if(keyWord === "ajouter"){
                    console.log("ajouter OK = ", keyWord,"ajout de la tache ",tacheATtaiter);
                } else if(keyWord === "supprimer"){
                    console.log("suppr OK = ", keyWord,"suppression de la tache ",tacheATtaiter);
                } else if(keyWord === "éditer"){
                    console.log("editer OK = ", keyWord,"edition de la tache ",tacheATtaiter);
                } 
                // else {
                //     console.log("commande non-reconnue");
                // }
            }
            recognition.start();
        }
    }

    arrayContains(needle, arrhaystack) {
        return (arrhaystack.indexOf(needle) > -1);
    }

    ajouterTache() : void {

    }

    supprimerTache() : void {

    }

    editer



        
}