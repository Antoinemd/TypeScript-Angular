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
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1EcEIsQ0FBQztZQU9XLFdBQVcsR0FBeEI7Z0JBS0MsWUFBc0IsWUFBZ0M7b0JBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtvQkFEM0MsV0FBTSxHQUFjLEVBQUUsQ0FBQztvQkE2Qi9CLGNBQVMsR0FBZ0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO29CQUNyQyxrQkFBYSxHQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzVDLG9CQUFlLEdBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBN0J6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzNDLENBQUM7Z0JBQUEsQ0FBQztnQkFDQyxRQUFRO29CQUNKLDRCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQU8sRUFBRSxDQUFDO3dCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsU0FBUztvQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDO2dCQUNwRCxDQUFDO2dCQUNELFdBQVc7b0JBQ1AsTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ3JCLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFDdkIsSUFBSSxDQUFDLENBQ1YsQ0FBQztnQkFDTixDQUFDO2dCQUNELG9CQUFvQjtvQkFDaEIsSUFBSSxLQUFLLEdBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsYUFBYTtvQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLE1BQU0sQ0FBQztnQkFDM0QsQ0FBQztnQkFDRCxnQkFBZ0I7b0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUM7Z0JBQzNFLENBQUM7YUFJSixDQUFBO1lBbkNZO2dCQUFSLFlBQUssRUFBRTs7c0RBQWdCO1lBRGYsV0FBVztnQkFKdkIsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUksY0FBYztvQkFDMUIsUUFBUSxFQUFJLFlBQVk7aUJBQ3pCLENBQUM7aURBTW1DLDRCQUFrQjtlQUwxQyxXQUFXLENBb0N2Qjs7UUFDRCxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvTGlzdGVDaG9zZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gICAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDaG9zZSwgTGlzdGVDaG9zZXMgYXMgTGlzdGVDaG9zZXNORn0gXHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcbmltcG9ydCB7TGlzdGVDaG9zZXNTZXJ2aWNlfSAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9zZXJ2aWNlXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCI+XG5cdFx0PGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuXHRcdFx0PGgxPnt7dGl0cmV9fTwvaDE+XG5cdFx0XHQ8Zm9ybSAobmdTdWJtaXQpPVwibmYuQWpvdXRlcihuZXdUb2RvLnZhbHVlKTsgbmV3VG9kby52YWx1ZT0nJ1wiPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiUXVlIGZhaXJlP1wiICNuZXdUb2RvIGF1dG9mb2N1cz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdDxpbnB1dCAgY2xhc3M9XCJ0b2dnbGUtYWxsXCIgXG5cdFx0XHQgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHQgICAgICAgIFtuZ01vZGVsXT1cIlRvdXRFc3RGYWl0KClcIlxuXHRcdFx0ICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJUb3V0Q29jaGVyT3VEZWNvY2hlcigpXCJcblx0XHRcdCAgICAgICAgLz5cblx0XHRcdDxsYWJlbCBmb3I9XCJ0b2dnbGUtYWxsXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuXHRcdFx0PHVsIGNsYXNzPVwidG9kby1saXN0XCI+XG5cdFx0XHQgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdldENob3NlcygpXCIgW2NsYXNzLmVkaXRpbmddPVwiQ29tcG8uZWRpdGluZ1wiPlxuXHRcdFx0ICAgICAgICA8aXRlbS1jaG9zZSBbbmZdPVwiaXRlbVwiICNDb21wbz5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWNob3NlPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXHRcdDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNvdW50XCI+PHN0cm9uZz57e2dldE5iUmVzdGFudGUoKX19PC9zdHJvbmc+IHJlc3RhbnRlczwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyQWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJDdXJyZW50PWZpbHRlckFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZmlsdGVyQ3VycmVudD09PWZpbHRlckFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+VG91czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmaWx0ZXJBY3RpdmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJDdXJyZW50PWZpbHRlckFjdGl2ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImZpbHRlckN1cnJlbnQ9PT1maWx0ZXJBY3RpdmVzXCI+QWN0aWZzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZpbHRlckNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyQ3VycmVudD1maWx0ZXJDb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImZpbHRlckN1cnJlbnQ9PT1maWx0ZXJDb21wbGV0ZWRcIj5Db21wbMOpdMOpczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIiAoY2xpY2spPVwiU3VwcHJpbWVyQ29jaGVlcygpXCI+U3VwcHJpbWVyIGNvY2jDqWVzPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuXHQ8L3NlY3Rpb24+XG5cdDxoci8+XG5cdDxzZWN0aW9uPlxuXHQgICAgPHNlY3Rpb24gKm5nRm9yPVwibGV0IGNob3NlIG9mIGdldENob3NlcygpXCI+XG5cdCAgICAgICAge3tjaG9zZS5mYWl0fX0gOiB7e2Nob3NlLnRleHRlfX1cbiAgICAgICAgPC9zZWN0aW9uPlxuXHQ8L3NlY3Rpb24+XG5gO1xuXG50eXBlIGZpbHRlckNob3NlID0gKGMgOiBDaG9zZSkgPT4gYm9vbGVhbjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3Rvclx0XHQ6IFwibGlzdGUtY2hvc2VzXCIsXG4gIHRlbXBsYXRlXHRcdDogaHRtbFRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0aXRyZVx0OiBzdHJpbmc7XG4gICAgcHVibGljIG5mICAgICAgIDogTGlzdGVDaG9zZXNORjtcbiAgICBmaWx0ZXJDdXJyZW50OiBmaWx0ZXJDaG9zZTtcbiAgICBwcml2YXRlIGNob3NlcyAgOiBDaG9zZVtdID0gW107XG5cdGNvbnN0cnVjdG9yXHRcdChwcml2YXRlIHNlcnZpY2VMaXN0ZTogTGlzdGVDaG9zZXNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ3VycmVudCA9IHRoaXMuZmlsdGVyQWxsO1xuXHR9O1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBMaXN0ZUNob3Nlc1NlcnZpY2UuZ2V0RGF0YSgpLnRoZW4oIChuZikgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZiAgICAgPSBuZjtcbiAgICAgICAgICAgIHRoaXMuY2hvc2VzID0gbmYuY2hvc2VzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2hvc2VzKCkgOiBDaG9zZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvc2VzLmZpbHRlciggdGhpcy5maWx0ZXJDdXJyZW50ICk7XG4gICAgfVxuICAgIFRvdXRFc3RGYWl0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4odGhpcy5jaG9zZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjYywgYykgPT4gYWNjICYmIGMuZmFpdFxuICAgICAgICAgICAgLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cbiAgICBUb3V0Q29jaGVyT3VEZWNvY2hlcigpIHtcbiAgICAgICAgbGV0IGZhaXJlPSF0aGlzLlRvdXRFc3RGYWl0KCk7XG4gICAgICAgIHRoaXMuY2hvc2VzLmZvckVhY2goYyA9PiBjLkZhaXQoZmFpcmUpKTtcbiAgICB9XG4gICAgZ2V0TmJSZXN0YW50ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jaG9zZXMuZmlsdGVyKCB0aGlzLmZpbHRlckFjdGl2ZXMgKS5sZW5ndGg7XG4gICAgfVxuICAgIFN1cHByaW1lckNvY2hlZXMoKSB7XG4gICAgICAgIHRoaXMuY2hvc2VzLmZpbHRlciggdGhpcy5maWx0ZXJDb21wbGV0ZWQgKS5mb3JFYWNoKCBjID0+IGMuZGlzcG9zZSgpICk7XG4gICAgfVxuICAgIGZpbHRlckFsbDogZmlsdGVyQ2hvc2UgPSAoYykgPT4gdHJ1ZTtcbiAgICBmaWx0ZXJBY3RpdmVzOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiAhYy5mYWl0O1xuICAgIGZpbHRlckNvbXBsZXRlZDogZmlsdGVyQ2hvc2UgPSAoYykgPT4gYy5mYWl0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
