System.register(["./ComponentIHM", "./Chose_IHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, Chose_IHM_1, htmlTemplate, ListeChosesIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            },
            function (Chose_IHM_1_1) {
                Chose_IHM_1 = Chose_IHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root.innerHTML = htmlTemplate;
                    // Etape 0: Identifier dans le DOM les balises qui m'intéressent
                    let newTodo = this.root.querySelector("form > input.new-todo");
                    let form = this.root.querySelector("form");
                    let ul = this.root.querySelector("ul.todo-list");
                    let toggler = this.root.querySelector("input.toggle-all");
                    let updateInputToutFait = () => {
                        toggler.checked = this.ToutEstCoche();
                    };
                    updateInputToutFait();
                    // Etape 1: On traduit les événements issus du HTML en commandes du noyau fonctionnel
                    form.onsubmit = (evt) => {
                        this.NF.Ajouter(newTodo.value);
                        // console.log("Ajout d'une chose à faire => NF=", this.NF);
                        newTodo.value = "";
                        evt.preventDefault();
                    };
                    toggler.onchange = (evt) => {
                        let cocher = !this.ToutEstCoche();
                        this.NF.choses.forEach(c => c.Fait(cocher));
                    };
                    // Etape 2: Traduire les événements du Noyau fonctionnel en commandes IHM
                    let chosesIHM = [];
                    this.NF.on("update", (nf, eventName, value) => {
                        console.log("Le noyau m'informe que:", nf, eventName, value);
                        if (value.append) {
                            //création de 3 éléments pour tester NF/IHM
                            for (let i = 0; i < 3; ++i) {
                                let li = document.createElement("li");
                                ul.appendChild(li);
                                // li.textContent = `Il faut ajouter un composant représentant une chose à faire pour ${value.append.texte}`;
                                chosesIHM.push(new Chose_IHM_1.ChoseIHM(value.append, li));
                            }
                        }
                        if (value.remove) {
                            let choseNF = value.remove;
                            // Dispose de toutes les chosesIHM dans le NF
                            chosesIHM.filter(cihm => cihm.NF === choseNF).forEach(cihm => cihm.dispose());
                            chosesIHM = chosesIHM.filter(cihm => cihm.NF !== choseNF);
                        }
                    });
                }
                ToutEstCoche() {
                    return this.NF.choses.reduce((acc, c) => acc && c.fait, true);
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;base64,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NEJBQzNCLDZDQUE2Qzs0QkFDN0MsU0FBUyxDQUFDLE1BQU0sQ0FBRSxJQUFJLElBQUssSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDOzRCQUMvRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUUsQ0FBQzt3QkFFaEUsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELFlBQVk7b0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7YUFDRCxDQUFBOztRQUNELENBQUMiLCJmaWxlIjoiSUhNL2xpc3RlQ2hvc2VzX0lITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdGVDaG9zZXMsIEV2ZW50TGlzdGVDaG9zZXN9XHRmcm9tIFwiQE5GL25mXCI7XG5pbXBvcnQge0NvbXBvbmVudElITX0gXHRmcm9tIFwiLi9Db21wb25lbnRJSE1cIjtcbmltcG9ydCB7Q2hvc2VJSE19XHRcdGZyb20gXCIuL0Nob3NlX0lITVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cblx0XHRcdDxoMT5MaXN0ZTwvaDE+XG5cdFx0XHQ8Zm9ybSBhY3Rpb249XCIjL1wiPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiUXVlIGZhaXJlP1wiIGF1dG9mb2N1cz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIiB0eXBlPVwiY2hlY2tib3hcIj5cblx0XHRcdDxsYWJlbCBmb3I9XCJ0b2dnbGUtYWxsXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuXHRcdFx0PHVsIGNsYXNzPVwidG9kby1saXN0XCI+PC91bD5cblx0XHQ8L3NlY3Rpb24+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXNJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IExpc3RlQ2hvc2VzLCByb290OiBIVE1MRWxlbWVudCB8IHN0cmluZykge1xuXHRcdHN1cGVyKE5GLCByb290KTtcblx0XHR0aGlzLnJvb3QuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xuXG5cdFx0Ly8gRXRhcGUgMDogSWRlbnRpZmllciBkYW5zIGxlIERPTSBsZXMgYmFsaXNlcyBxdWkgbSdpbnTDqXJlc3NlbnRcblx0XHRsZXQgbmV3VG9kbzogSFRNTElucHV0RWxlbWVudCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBcImZvcm0gPiBpbnB1dC5uZXctdG9kb1wiICkgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRsZXQgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIFwiZm9ybVwiICkgYXMgSFRNTEZvcm1FbGVtZW50O1xuXHRcdGxldCB1bDogSFRNTFVMaXN0RWxlbWVudCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBcInVsLnRvZG8tbGlzdFwiICkgYXMgSFRNTFVMaXN0RWxlbWVudDtcblxuXHRcdGxldCB0b2dnbGVyIDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQudG9nZ2xlLWFsbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBsZXQgdXBkYXRlSW5wdXRUb3V0RmFpdCA9ICgpID0+IHsgLy8gQnV0IGRlIGNldHRlIGZvbmN0aW9uID0+IGNvY2hlciBvdSBwYXMgbGEgY2FzZVxuICAgICAgICAgICAgdG9nZ2xlci5jaGVja2VkID0gdGhpcy5Ub3V0RXN0Q29jaGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdXBkYXRlSW5wdXRUb3V0RmFpdCgpO1xuXG5cdFx0Ly8gRXRhcGUgMTogT24gdHJhZHVpdCBsZXMgw6l2w6luZW1lbnRzIGlzc3VzIGR1IEhUTUwgZW4gY29tbWFuZGVzIGR1IG5veWF1IGZvbmN0aW9ubmVsXG5cdFx0Zm9ybS5vbnN1Ym1pdCA9IChldnQpID0+IHtcblx0XHRcdHRoaXMuTkYuQWpvdXRlciggbmV3VG9kby52YWx1ZSApO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJBam91dCBkJ3VuZSBjaG9zZSDDoCBmYWlyZSA9PiBORj1cIiwgdGhpcy5ORik7XG5cdFx0XHRuZXdUb2RvLnZhbHVlID0gXCJcIjtcblx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH07XG5cdFx0XG5cdFx0dG9nZ2xlci5vbmNoYW5nZSA9IChldnQpID0+IHtcbiAgICAgICAgICBsZXQgY29jaGVyID0gIXRoaXMuVG91dEVzdENvY2hlKCk7XG4gICAgICAgICAgICB0aGlzLk5GLmNob3Nlcy5mb3JFYWNoKCBjID0+IGMuRmFpdChjb2NoZXIpICk7XG4gICAgICAgIH07XG5cblxuXG5cblx0XHQvLyBFdGFwZSAyOiBUcmFkdWlyZSBsZXMgw6l2w6luZW1lbnRzIGR1IE5veWF1IGZvbmN0aW9ubmVsIGVuIGNvbW1hbmRlcyBJSE1cblx0XHRsZXQgY2hvc2VzSUhNIDogQ2hvc2VJSE1bXSA9IFtdO1xuXHRcdHRoaXMuTkYub24oXCJ1cGRhdGVcIiwgKG5mOiBMaXN0ZUNob3NlcywgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBFdmVudExpc3RlQ2hvc2VzKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkxlIG5veWF1IG0naW5mb3JtZSBxdWU6XCIsIG5mLCBldmVudE5hbWUsIHZhbHVlKTtcblx0XHRcdGlmKHZhbHVlLmFwcGVuZCkgeyAvLyBPbiBhIGFqb3V0w6kgdW5lIGNob3NlIMOgIGZhaXJlIGRhbnMgbGUgbm95YXVcblx0XHRcdFx0Ly9jcsOpYXRpb24gZGUgMyDDqWzDqW1lbnRzIHBvdXIgdGVzdGVyIE5GL0lITVxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSkge1xuXHRcdFx0XHRcdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwibGlcIiApO1xuXHRcdFx0XHQgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFx0XHQgICAgLy8gbGkudGV4dENvbnRlbnQgPSBgSWwgZmF1dCBham91dGVyIHVuIGNvbXBvc2FudCByZXByw6lzZW50YW50IHVuZSBjaG9zZSDDoCBmYWlyZSBwb3VyICR7dmFsdWUuYXBwZW5kLnRleHRlfWA7XG5cdCAgICAgICAgICAgICAgIFx0Y2hvc2VzSUhNLnB1c2goIG5ldyBDaG9zZUlITSh2YWx1ZS5hcHBlbmQsIGxpKSApO1xuICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHZhbHVlLnJlbW92ZSkgeyAvLyBvbiBhIHN1cHByaW3DqSB1bmUgY2hvc2Ugw6AgZmFpcmUgZGFucyBsZSBub3lhdVxuICAgICAgICAgICAgXHRsZXQgY2hvc2VORiA9IHZhbHVlLnJlbW92ZTtcbiAgICAgICAgICAgIFx0Ly8gRGlzcG9zZSBkZSB0b3V0ZXMgbGVzIGNob3Nlc0lITSBkYW5zIGxlIE5GXG4gICAgICAgICAgICBcdGNob3Nlc0lITS5maWx0ZXIoIGNpaG0gPT4gIGNpaG0uTkYgPT09IGNob3NlTkYpLmZvckVhY2goIGNpaG0gPT4gY2lobS5kaXNwb3NlKCkgKTtcbiAgICAgICAgICAgICAgICBjaG9zZXNJSE0gPSBjaG9zZXNJSE0uZmlsdGVyKCBjaWhtID0+IGNpaG0uTkYgIT09IGNob3NlTkYgKTtcblxuICAgICAgICAgICAgfVxuXHRcdH0pO1xuXHR9XG5cblx0VG91dEVzdENvY2hlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLk5GLmNob3Nlcy5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICYmIGMuZmFpdCwgdHJ1ZSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
