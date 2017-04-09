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
	<section>
		<form action="#/">
			<input placeholder="Que faire?">
		</form>
		<ul></ul>
	</section>
`;
            // Classe à compléter...
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    this.mapNfIhm = new Map();
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.ul = this.root.querySelector(`ul`);
                    this.form = this.root.querySelector(`form`);
                    this.input = this.root.querySelector(`input`);
                    this.initalizeFromNF();
                    // HTML -> NF
                    this.form.addEventListener("submit", evt => {
                        evt.preventDefault();
                        this.NF.Ajouter(this.input.value);
                        this.input.value = "";
                    });
                    // NF -> HTML
                    this.NF.on("update", (nf, eN, eV) => this.updateFromNF(eV));
                }
                initalizeFromNF() {
                    this.NF.choses.forEach(c => this.updateFromNF({ append: c }));
                }
                updateFromNF(evt) {
                    if (evt.append) {
                        let chose = evt.append;
                        let li = document.createElement("li");
                        this.ul.appendChild(li);
                        this.mapNfIhm.set(chose, new Chose_IHM_1.ChoseIHM(chose, li));
                    }
                    if (evt.remove) {
                        let chose = evt.remove;
                        let choseIHM = this.mapNfIhm.get(chose);
                        if (choseIHM) {
                            choseIHM.dispose();
                        }
                        this.mapNfIhm.delete(chose);
                    }
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvbGlzdGVDaG9zZXNfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBSU0sWUFBWSxHQUFHOzs7Ozs7O0NBT3BCLENBQUM7WUFFRix3QkFBd0I7WUFDeEIsaUJBQUEsb0JBQTRCLFNBQVEsMkJBQVk7Z0JBSy9DLFlBQW1CLEVBQWUsRUFBRSxZQUFZO29CQUMvQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBQztvQkFEaEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtvQkFEL0IsYUFBUSxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUd2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7b0JBRW5DLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBRSxDQUFDO29CQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV2QixhQUFhO29CQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUc7d0JBQ3BDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUUsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztvQkFFSCxhQUFhO29CQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztnQkFDbEUsQ0FBQztnQkFDRCxlQUFlO29CQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBRSxDQUFFLENBQUM7Z0JBQ3BFLENBQUM7Z0JBQ0QsWUFBWSxDQUFDLEdBQXFCO29CQUM5QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLEtBQUssR0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUN6QixJQUFJLEVBQUUsR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO3dCQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksb0JBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLEtBQUssR0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUM3QixJQUFJLFFBQVEsR0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0MsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFBQSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQUEsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hDLENBQUM7Z0JBQ0wsQ0FBQzthQUNKLENBQUE7O1FBRUQsQ0FBQyIsImZpbGUiOiJzYW5zRnJhbWV3b3JrL2xpc3RlQ2hvc2VzX0lITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzLCBFdmVudExpc3RlQ2hvc2VzfSBcdFx0XHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcbmltcG9ydCB7Q29tcG9uZW50SUhNfSBcdGZyb20gXCIuL0NvbXBvbmVudElITVwiO1xuaW1wb3J0IHtDaG9zZUlITX1cdFx0ZnJvbSBcIi4vQ2hvc2VfSUhNXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PHNlY3Rpb24+XG5cdFx0PGZvcm0gYWN0aW9uPVwiIy9cIj5cblx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIj5cblx0XHQ8L2Zvcm0+XG5cdFx0PHVsPjwvdWw+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXNJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXHR1bFx0ICAgIDogSFRNTFVMaXN0RWxlbWVudDtcblx0Zm9ybSAgICA6IEhUTUxGb3JtRWxlbWVudDtcblx0aW5wdXQgICA6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgbWFwTmZJaG06IE1hcDxDaG9zZSwgQ2hvc2VJSE0+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IExpc3RlQ2hvc2VzLCByb290U2VsZWN0b3IpIHtcblx0XHRzdXBlcihORiwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggcm9vdFNlbGVjdG9yICkpO1xuICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xuXG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzIGFuZCBpbml0aWFsaXplIGZyb20gTkZcbiAgICAgICAgdGhpcy51bFx0ICAgID0gPEhUTUxVTGlzdEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGB1bGAgKTtcbiAgICAgICAgdGhpcy5mb3JtICAgPSA8SFRNTEZvcm1FbGVtZW50ID50aGlzLnJvb3QucXVlcnlTZWxlY3RvciggYGZvcm1gICk7XG4gICAgICAgIHRoaXMuaW5wdXQgID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dGAgKTtcbiAgICAgICAgdGhpcy5pbml0YWxpemVGcm9tTkYoKTtcblxuICAgICAgICAvLyBIVE1MIC0+IE5GXG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2dCA9PiB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuTkYuQWpvdXRlciggdGhpcy5pbnB1dC52YWx1ZSApO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5GIC0+IEhUTUxcbiAgICAgICAgdGhpcy5ORi5vbiggXCJ1cGRhdGVcIiwgKG5mLCBlTiwgZVYpID0+IHRoaXMudXBkYXRlRnJvbU5GKGVWKSApO1xuICAgIH1cbiAgICBpbml0YWxpemVGcm9tTkYoKSB7XG4gICAgICAgIHRoaXMuTkYuY2hvc2VzLmZvckVhY2goIGMgPT4gdGhpcy51cGRhdGVGcm9tTkYoIHthcHBlbmQ6IGN9ICkgKTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5GKGV2dDogRXZlbnRMaXN0ZUNob3Nlcykge1xuICAgICAgICBpZihldnQuYXBwZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hvc2UgICA9IGV2dC5hcHBlbmQ7XG4gICAgICAgICAgICBsZXQgbGkgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwibGlcIiApO1xuICAgICAgICAgICAgdGhpcy51bC5hcHBlbmRDaGlsZCggbGkgKTtcbiAgICAgICAgICAgIHRoaXMubWFwTmZJaG0uc2V0KGNob3NlLCBuZXcgQ2hvc2VJSE0oY2hvc2UsIGxpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZ0LnJlbW92ZSkge1xuICAgICAgICAgICAgbGV0IGNob3NlICAgICAgID0gZXZ0LnJlbW92ZTtcbiAgICAgICAgICAgIGxldCBjaG9zZUlITSAgICA9IHRoaXMubWFwTmZJaG0uZ2V0KGNob3NlKTtcbiAgICAgICAgICAgIGlmKGNob3NlSUhNKSB7Y2hvc2VJSE0uZGlzcG9zZSgpO31cbiAgICAgICAgICAgIHRoaXMubWFwTmZJaG0uZGVsZXRlKGNob3NlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
