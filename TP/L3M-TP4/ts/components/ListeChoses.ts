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
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
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
}
