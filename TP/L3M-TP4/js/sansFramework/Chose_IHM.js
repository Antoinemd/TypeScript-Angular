System.register(["./ComponentIHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, htmlTemplate, ChoseIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section class="chose">
		<input type="checkbox"/>
		<input type="text"    />
		<input type="button" value="Delete"/>
	</section>
`;
            // Classe à compléter...
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root = root;
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.inputFait = this.root.querySelector(`input[type="checkbox"]`);
                    this.inputText = this.root.querySelector(`input[type="text"]`);
                    this.buttonDelete = this.root.querySelector(`input[type="button"]`);
                    this.updateFromNF();
                    // HTML -> NF
                    this.inputFait.addEventListener("change", () => this.NF.Fait(this.inputFait.checked));
                    this.inputText.addEventListener("keyup", () => this.NF.Texte(this.inputText.value));
                    this.buttonDelete.addEventListener("click", () => this.NF.dispose());
                    // NF -> HTML
                    this.NF.on("update", () => this.updateFromNF());
                }
                updateFromNF() {
                    this.inputFait.checked = this.NF.fait;
                    this.inputText.value = this.NF.texte;
                }
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvQ2hvc2VfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBR00sWUFBWSxHQUFHOzs7Ozs7Q0FNcEIsQ0FBQztZQUVGLHdCQUF3QjtZQUN4QixXQUFBLGNBQXNCLFNBQVEsMkJBQVk7Z0JBSXpDLFlBQW1CLEVBQVMsRUFBUyxJQUFhO29CQUNqRCxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQURFLE9BQUUsR0FBRixFQUFFLENBQU87b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO29CQUVuQyx3Q0FBd0M7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLHdCQUF3QixDQUFFLENBQUM7b0JBQzNGLElBQUksQ0FBQyxTQUFTLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLG9CQUFvQixDQUFFLENBQUM7b0JBQ3ZGLElBQUksQ0FBQyxZQUFZLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLHNCQUFzQixDQUFFLENBQUM7b0JBQzFGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFcEIsYUFBYTtvQkFDYixJQUFJLENBQUMsU0FBUyxDQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQztvQkFDM0YsSUFBSSxDQUFDLFNBQVMsQ0FBSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUcsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRyxDQUFFLENBQUM7b0JBQzNGLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO29CQUV2RSxhQUFhO29CQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBRSxDQUFDO2dCQUN6RCxDQUFDO2dCQUNELFlBQVk7b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxDQUFDO2FBQ0osQ0FBQTs7UUFDRCxDQUFDIiwiZmlsZSI6InNhbnNGcmFtZXdvcmsvQ2hvc2VfSUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaG9zZX0gXHRcdFx0ZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5pbXBvcnQge0NvbXBvbmVudElITX0gXHRmcm9tIFwiLi9Db21wb25lbnRJSE1cIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuXHQ8c2VjdGlvbiBjbGFzcz1cImNob3NlXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAgICAvPlxuXHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJEZWxldGVcIi8+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgQ2hvc2VJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXHRpbnB1dEZhaXRcdDogSFRNTElucHV0RWxlbWVudDtcblx0aW5wdXRUZXh0XHQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGJ1dHRvbkRlbGV0ZTogSFRNTElucHV0RWxlbWVudDtcblx0Y29uc3RydWN0b3IocHVibGljIE5GOiBDaG9zZSwgcHVibGljIHJvb3Q6IEVsZW1lbnQpIHtcblx0XHRzdXBlcihORiwgcm9vdCk7XG5cdFx0dGhpcy5yb290LmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZTtcblxuXHRcdC8vIEdldCByZWZlcmVuY2VzIGFuZCBpbml0aWFsaXplIGZyb20gTkZcbiAgICAgICAgdGhpcy5pbnB1dEZhaXRcdCAgICA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdYCApO1xuICAgICAgICB0aGlzLmlucHV0VGV4dFx0ICAgID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dFt0eXBlPVwidGV4dFwiXWAgKTtcbiAgICAgICAgdGhpcy5idXR0b25EZWxldGUgICA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBgaW5wdXRbdHlwZT1cImJ1dHRvblwiXWAgKTtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tTkYoKTtcblxuICAgICAgICAvLyBIVE1MIC0+IE5GXG4gICAgICAgIHRoaXMuaW5wdXRGYWl0ICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gdGhpcy5ORi5GYWl0ICh0aGlzLmlucHV0RmFpdC5jaGVja2VkKSApO1xuICAgICAgICB0aGlzLmlucHV0VGV4dCAgIC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiAsICgpID0+IHRoaXMuTkYuVGV4dGUodGhpcy5pbnB1dFRleHQudmFsdWUgICkgKTtcbiAgICAgICAgdGhpcy5idXR0b25EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCAoKSA9PiB0aGlzLk5GLmRpc3Bvc2UoKSApO1xuXG4gICAgICAgIC8vIE5GIC0+IEhUTUxcbiAgICAgICAgdGhpcy5ORi5vbiggXCJ1cGRhdGVcIiwgKCkgPT4gdGhpcy51cGRhdGVGcm9tTkYoKSApO1xuXHR9XG5cdHVwZGF0ZUZyb21ORigpIHtcbiAgICAgICAgdGhpcy5pbnB1dEZhaXQuY2hlY2tlZCAgPSB0aGlzLk5GLmZhaXQ7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0LnZhbHVlICAgID0gdGhpcy5ORi50ZXh0ZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
