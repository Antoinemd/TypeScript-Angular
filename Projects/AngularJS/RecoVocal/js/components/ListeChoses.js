System.register(["@angular/core", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, service_1, htmlTemplate, ListeChoses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = (c) => true;
                    this.filterActives = (c) => !c.fait;
                    this.filterCompleted = (c) => c.fait;
                    this.filterCurrent = this.filterAll;
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.filterCurrent);
                }
                ToutEstFait() {
                    return (this.choses.reduce((acc, c) => acc && c.fait, true));
                }
                ToutCocherOuDecocher() {
                    let faire = !this.ToutEstFait();
                    this.choses.forEach(c => c.Fait(faire));
                }
                getNbRestante() {
                    return this.choses.filter(this.filterActives).length;
                }
                SupprimerCochees() {
                    this.choses.filter(this.filterCompleted).forEach(c => c.dispose());
                }
                checkCompatibility() {
                }
                speechAction() {
                    console.log("mousedown!");
                    if (!('webkitSpeechRecognition' in window)) {
                        window.alert("Erreur: L'API SpeechRecognition non supportée par votre navigateur !");
                    }
                    else {
                        let recognition = new webkitSpeechRecognition();
                        let userSentence = "";
                        recognition.lang = "fr-FR";
                        recognition.continuous = false;
                        recognition.interimResults = true;
                        // Methode qui apparament donne les meilleurs résultats pour la reco
                        recognition.maxAlternatives = 1;
                        recognition.onstart = function () {
                            //Listening (capturing voice from audio input) started.
                            //This is a good place to give the user visual feedback about 
                            //that (i.e. flash a red light, etc.)
                        };
                        recognition.onnomatch = function (event) {
                        };
                        recognition.onend = function () {
                            //Again – give the user feedback that you are not listening anymore. 
                            //If you wish to achieve continuous recognition – 
                            //you can write a script to start the recognizer again here.
                            console.log("fin de l'écoute");
                        };
                        recognition.onresult = function (event) {
                            if (typeof (event.results) === 'undefined') {
                                console.log("Quelquechose cloche...");
                                recognition.stop();
                                return;
                            }
                            //Todo remplacer par un foreach
                            for (let i = event.resultIndex; i < event.results.length; ++i) {
                                if (event.results[i].isFinal) {
                                    // resultat final qui nous interesse ..
                                    console.log("resultat final: " + event.results[i][0].transcript);
                                    userSentence = event.results[i][0].transcript;
                                }
                                else {
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
                            if (keyWord === "ajouter") {
                                console.log("ajouter OK = ", keyWord, "ajout de la tache ", tacheATtaiter);
                            }
                            else if (keyWord === "supprimer") {
                                console.log("suppr OK = ", keyWord, "suppression de la tache ", tacheATtaiter);
                            }
                            else if (keyWord === "éditer") {
                                console.log("editer OK = ", keyWord, "edition de la tache ", tacheATtaiter);
                            }
                            // else {
                            //     console.log("commande non-reconnue");
                            // }
                        };
                        recognition.start();
                    }
                }
                arrayContains(needle, arrhaystack) {
                    return (arrhaystack.indexOf(needle) > -1);
                }
                ajouterTache() {
                }
                supprimerTache() {
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }),
                __metadata("design:paramtypes", [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0RwQixDQUFDO1lBT1csV0FBVyxHQUF4QjtnQkFLQyxZQUFzQixZQUFnQztvQkFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO29CQUQzQyxXQUFNLEdBQWMsRUFBRSxDQUFDO29CQTZCL0IsY0FBUyxHQUFnQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7b0JBQ3JDLGtCQUFhLEdBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDNUMsb0JBQWUsR0FBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztvQkE3QnpDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDM0MsQ0FBQztnQkFBQSxDQUFDO2dCQUNDLFFBQVE7b0JBQ0osNEJBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRTt3QkFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBTyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxTQUFTO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsV0FBVztvQkFDUCxNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDckIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUN2QixJQUFJLENB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QUM1QyxJQUFJO3dCQUNSLENBQUMsQ0FBQTt3QkFDRCxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxhQUFhLENBQUMsTUFBTSxFQUFFLFdBQVc7b0JBQzdCLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCxZQUFZO2dCQUVaLENBQUM7Z0JBRUQsY0FBYztnQkFFZCxDQUFDO2FBT0osQ0FBQTtZQXZJWTtnQkFBUixZQUFLLEVBQUU7O3NEQUFnQjtZQURmLFdBQVc7Z0JBSnZCLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFJLGNBQWM7b0JBQzFCLFFBQVEsRUFBSSxZQUFZO2lCQUN6QixDQUFDO2lEQU1tQyw0QkFBa0I7ZUFMMUMsV0FBVyxDQXdJdkI7O1FBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RlQ2hvc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9ICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzIGFzIExpc3RlQ2hvc2VzTkZ9IFx0ZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5pbXBvcnQge0xpc3RlQ2hvc2VzU2VydmljZX0gICAgICAgICAgICAgICAgICAgICBmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvc2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cblx0XHRcdDxoMT57e3RpdHJlfX08L2gxPlxuXHRcdFx0PGZvcm0gKG5nU3VibWl0KT1cIm5mLkFqb3V0ZXIobmV3VG9kby52YWx1ZSk7IG5ld1RvZG8udmFsdWU9JydcIj5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIiBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIiAjbmV3VG9kbyBhdXRvZm9jdXM+XG5cdFx0XHQ8L2Zvcm0+XG5cblx0XHQ8L2hlYWRlcj5cblxuXHRcdDxzZWN0aW9uIGNsYXNzPVwibWFpblwiPlxuXHRcdFx0PGlucHV0ICBjbGFzcz1cInRvZ2dsZS1hbGxcIiBcblx0XHRcdCAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcblx0XHRcdCAgICAgICAgW25nTW9kZWxdPVwiVG91dEVzdEZhaXQoKVwiXG5cdFx0XHQgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIlRvdXRDb2NoZXJPdURlY29jaGVyKClcIlxuXHRcdFx0ICAgICAgICAvPlxuXHRcdFx0PGxhYmVsIGZvcj1cInRvZ2dsZS1hbGxcIj5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG5cdFx0XHQ8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cblx0XHRcdCAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ2V0Q2hvc2VzKClcIiBbY2xhc3MuZWRpdGluZ109XCJDb21wby5lZGl0aW5nXCI+XG5cdFx0XHQgICAgICAgIDxpdGVtLWNob3NlIFtuZl09XCJpdGVtXCIgI0NvbXBvPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tY2hvc2U+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cdFx0PC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj48c3Ryb25nPnt7Z2V0TmJSZXN0YW50ZSgpfX08L3N0cm9uZz4gcmVzdGFudGVzPC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmaWx0ZXJBbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckN1cnJlbnQ9ZmlsdGVyQWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJmaWx0ZXJDdXJyZW50PT09ZmlsdGVyQWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Ub3VzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZpbHRlckFjdGl2ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckN1cnJlbnQ9ZmlsdGVyQWN0aXZlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZmlsdGVyQ3VycmVudD09PWZpbHRlckFjdGl2ZXNcIj5BY3RpZnM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyQ29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJDdXJyZW50PWZpbHRlckNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZmlsdGVyQ3VycmVudD09PWZpbHRlckNvbXBsZXRlZFwiPkNvbXBsw6l0w6lzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWNvbXBsZXRlZFwiIChjbGljayk9XCJTdXBwcmltZXJDb2NoZWVzKClcIj5TdXBwcmltZXIgY29jaMOpZXM8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG5cdDwvc2VjdGlvbj5cblx0PGJyLz5cblx0PHNlY3Rpb24+XG5cdCAgICA8c2VjdGlvbiAqbmdGb3I9XCJsZXQgY2hvc2Ugb2YgZ2V0Q2hvc2VzKClcIj5cblx0ICAgICAgICB7e2Nob3NlLmZhaXR9fSA6IHt7Y2hvc2UudGV4dGV9fVxuICAgICAgICA8L3NlY3Rpb24+XG5cdDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwZWVjaEJ0blwiIChtb3VzZWRvd24pPVwic3BlZWNoQWN0aW9uKClcIj4gU3BlZWNoIHJlY29nbml0aW9uIDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbmA7XG5cbnR5cGUgZmlsdGVyQ2hvc2UgPSAoYyA6IENob3NlKSA9PiBib29sZWFuO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yXHRcdDogXCJsaXN0ZS1jaG9zZXNcIixcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdHJlXHQ6IHN0cmluZztcbiAgICBwdWJsaWMgbmYgICAgICAgOiBMaXN0ZUNob3Nlc05GO1xuICAgIGZpbHRlckN1cnJlbnQ6IGZpbHRlckNob3NlO1xuICAgIHByaXZhdGUgY2hvc2VzICA6IENob3NlW10gPSBbXTtcblx0Y29uc3RydWN0b3JcdFx0KHByaXZhdGUgc2VydmljZUxpc3RlOiBMaXN0ZUNob3Nlc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJDdXJyZW50ID0gdGhpcy5maWx0ZXJBbGw7XG5cdH07XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIExpc3RlQ2hvc2VzU2VydmljZS5nZXREYXRhKCkudGhlbiggKG5mKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5mICAgICA9IG5mO1xuICAgICAgICAgICAgdGhpcy5jaG9zZXMgPSBuZi5jaG9zZXM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDaG9zZXMoKSA6IENob3NlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaG9zZXMuZmlsdGVyKCB0aGlzLmZpbHRlckN1cnJlbnQgKTtcbiAgICB9XG4gICAgVG91dEVzdEZhaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybih0aGlzLmNob3Nlcy5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCBjKSA9PiBhY2MgJiYgYy5mYWl0XG4gICAgICAgICAgICAsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuICAgIFRvdXRDb2NoZXJPdURlY29jaGVyKCkge1xuICAgICAgICBsZXQgZmFpcmU9IXRoaXMuVG91dEVzdEZhaXQoKTtcbiAgICAgICAgdGhpcy5jaG9zZXMuZm9yRWFjaChjID0+IGMuRmFpdChmYWlyZSkpO1xuICAgIH1cbiAgICBnZXROYlJlc3RhbnRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIoIHRoaXMuZmlsdGVyQWN0aXZlcyApLmxlbmd0aDtcbiAgICB9XG4gICAgU3VwcHJpbWVyQ29jaGVlcygpIHtcbiAgICAgICAgdGhpcy5jaG9zZXMuZmlsdGVyKCB0aGlzLmZpbHRlckNvbXBsZXRlZCApLmZvckVhY2goIGMgPT4gYy5kaXNwb3NlKCkgKTtcbiAgICB9XG4gICAgZmlsdGVyQWxsOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiB0cnVlO1xuICAgIGZpbHRlckFjdGl2ZXM6IGZpbHRlckNob3NlID0gKGMpID0+ICFjLmZhaXQ7XG4gICAgZmlsdGVyQ29tcGxldGVkOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiBjLmZhaXQ7XG5cbiAgICBjaGVja0NvbXBhdGliaWxpdHkoKSA6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgc3BlZWNoQWN0aW9uKCkgOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VzZWRvd24hXCIpO1xuXG4gICAgICAgIGlmICghKCd3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbicgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkVycmV1cjogTCdBUEkgU3BlZWNoUmVjb2duaXRpb24gbm9uIHN1cHBvcnTDqWUgcGFyIHZvdHJlIG5hdmlnYXRldXIgIVwiKTsgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgbGV0IHJlY29nbml0aW9uID0gbmV3IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgICAgICAgICBsZXQgdXNlclNlbnRlbmNlID0gXCJcIjtcblxuICAgICAgICAgICAgcmVjb2duaXRpb24ubGFuZyA9IFwiZnItRlJcIjsgXG4gICAgICAgICAgICByZWNvZ25pdGlvbi5jb250aW51b3VzID0gZmFsc2U7XG4gICAgICAgICAgICByZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IHRydWU7XG4gICAgICAgICAgICAvLyBNZXRob2RlIHF1aSBhcHBhcmFtZW50IGRvbm5lIGxlcyBtZWlsbGV1cnMgcsOpc3VsdGF0cyBwb3VyIGxhIHJlY29cbiAgICAgICAgICAgIHJlY29nbml0aW9uLm1heEFsdGVybmF0aXZlcyA9IDE7IFxuXG4gICAgICAgICAgICByZWNvZ25pdGlvbi5vbnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy9MaXN0ZW5pbmcgKGNhcHR1cmluZyB2b2ljZSBmcm9tIGF1ZGlvIGlucHV0KSBzdGFydGVkLlxuICAgICAgICAgICAgICAgIC8vVGhpcyBpcyBhIGdvb2QgcGxhY2UgdG8gZ2l2ZSB0aGUgdXNlciB2aXN1YWwgZmVlZGJhY2sgYWJvdXQgXG4gICAgICAgICAgICAgICAgLy90aGF0IChpLmUuIGZsYXNoIGEgcmVkIGxpZ2h0LCBldGMuKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVjb2duaXRpb24ub25ub21hdGNoID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICByZWNvZ25pdGlvbi5vbmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vQWdhaW4g4oCTIGdpdmUgdGhlIHVzZXIgZmVlZGJhY2sgdGhhdCB5b3UgYXJlIG5vdCBsaXN0ZW5pbmcgYW55bW9yZS4gXG4gICAgICAgICAgICAgICAgLy9JZiB5b3Ugd2lzaCB0byBhY2hpZXZlIGNvbnRpbnVvdXMgcmVjb2duaXRpb24g4oCTIFxuICAgICAgICAgICAgICAgIC8veW91IGNhbiB3cml0ZSBhIHNjcmlwdCB0byBzdGFydCB0aGUgcmVjb2duaXplciBhZ2FpbiBoZXJlLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluIGRlIGwnw6ljb3V0ZVwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlY29nbml0aW9uLm9ucmVzdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGV2ZW50LnJlc3VsdHMpID09PSAndW5kZWZpbmVkJykgeyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVscXVlY2hvc2UgY2xvY2hlLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICByZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1RvZG8gcmVtcGxhY2VyIHBhciB1biBmb3JlYWNoXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50LnJlc3VsdEluZGV4OyBpIDwgZXZlbnQucmVzdWx0cy5sZW5ndGg7ICsraSkgeyAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0c1tpXS5pc0ZpbmFsKSB7IC8vIHJlc3VsdGF0IGZpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHRhdCBmaW5hbCBxdWkgbm91cyBpbnRlcmVzc2UgLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0YXQgZmluYWw6IFwiICsgZXZlbnQucmVzdWx0c1tpXVswXS50cmFuc2NyaXB0KTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZW50ZW5jZSA9IGV2ZW50LnJlc3VsdHNbaV1bMF0udHJhbnNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcmVzIGludGVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHRhdCBpbnRlcm1lZGlhaXJlIHBvdXIgdm9pciBsZSBkw6lyb3VsZW1lbnQgLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0YXQgaW50ZXJtZWRpYWlyZTogXCIgKyBldmVudC5yZXN1bHRzW2ldWzBdLnRyYW5zY3JpcHQpOyAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSAvL2ZpbiBkdSBmb3JcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGZhaXJlIHVuIHRhYmxlYXUgZGUgU3RyaW5nIGF2ZWMgbGEgbGlzdGUgZGUgdG91cyBsZXMgb3JkcmVzP1xuICAgICAgICAgICAgICAgIC8vIHRyYWl0ZW1lbnQgZGVzIHR5cGVzIGQnYWN0aW9uIMOgIGZhaXJlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gdXNlclNlbnRlbmNlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGlucHV0LmluZGV4T2YoXCIgXCIpO1xuICAgICAgICAgICAgICAgIGxldCBrZXlXb3JkID0gaW5wdXQuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgICAgICAgICAgIGxldCB0YWNoZUFUdGFpdGVyID0gaW5wdXQuc3Vic3RyaW5nKGkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIHJlc3RcIiwgdGFza1RvQWRkKTtcblxuXG4gICAgICAgICAgICAgICAgaWYoa2V5V29yZCA9PT0gXCJham91dGVyXCIpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFqb3V0ZXIgT0sgPSBcIiwga2V5V29yZCxcImFqb3V0IGRlIGxhIHRhY2hlIFwiLHRhY2hlQVR0YWl0ZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihrZXlXb3JkID09PSBcInN1cHByaW1lclwiKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdXBwciBPSyA9IFwiLCBrZXlXb3JkLFwic3VwcHJlc3Npb24gZGUgbGEgdGFjaGUgXCIsdGFjaGVBVHRhaXRlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGtleVdvcmQgPT09IFwiw6lkaXRlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0ZXIgT0sgPSBcIiwga2V5V29yZCxcImVkaXRpb24gZGUgbGEgdGFjaGUgXCIsdGFjaGVBVHRhaXRlcik7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjb21tYW5kZSBub24tcmVjb25udWVcIik7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb2duaXRpb24uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFycmF5Q29udGFpbnMobmVlZGxlLCBhcnJoYXlzdGFjaykge1xuICAgICAgICByZXR1cm4gKGFycmhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xKTtcbiAgICB9XG5cbiAgICBham91dGVyVGFjaGUoKSA6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgc3VwcHJpbWVyVGFjaGUoKSA6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgZWRpdGVyXG5cblxuXG4gICAgICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=
