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
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root.innerHTML = htmlTemplate;
                    // Etape 0: J'identifie les éléments intéressant pour le HTML
                    let label = this.root.querySelector("label");
                    let inputFait = this.root.querySelector("input.toggle"); // désignation de la checkBox
                    let btnDestroy = this.root.querySelector("button.destroy"); // désignation du bouton supprimer
                    let formLabel = this.root.querySelector("label.texte"); // désignation de l'élement label 
                    let inputEdit = this.root.querySelector("input.edit"); // désignation de l'élément input à éditer
                    let submitForm = this.root.querySelector("form"); // désignation de l'élément  pour le preventDefault
                    label.textContent = NF.texte;
                    // Bloc 1 : S'abonner aux interaction sur la vue et les traduire en commandes NF
                    inputFait.addEventListener("change", (evt) => {
                        console.log("La vue dit que", evt);
                        NF.Fait(inputFait.checked);
                    }, false);
                    btnDestroy.addEventListener("click", (evt) => {
                        console.log("La vu pour destroy dit que ", evt);
                        NF.dispose();
                    }, false);
                    formLabel.addEventListener("dblclick", (evt) => {
                        console.log("La vu pour le label dit que ", evt);
                        this.root.classList.add("editing"); //.laBalise<li>
                        inputEdit.value = NF.texte;
                        inputEdit.focus;
                    }, false);
                    // EventListenner sur la perte de focus pour l'edition
                    inputEdit.addEventListener("blur", (evt) => {
                        console.log("La vu pour le blur dit que ", evt);
                        NF.Texte(inputEdit.value);
                        this.root.classList.remove("editing");
                    }, false);
                    // EventListener pour faire le preventDefault de la touche entrée
                    submitForm.addEventListener("submit", (evt) => {
                        console.log("La vue pour le preventDefault dit que ", evt);
                        evt.preventDefault();
                        inputEdit.blur();
                    }, false);
                    // Bloc 2 : S'abonner aux NF et mettre à jour la vue en conséquence
                    NF.on("update", (nf, eventName, event) => {
                        console.log("Le NF a dit que", event);
                        if (NF.fait) {
                            this.root.classList.add("completed");
                        }
                        else {
                            this.root.classList.remove("completed");
                        }
                        inputFait.checked = NF.fait;
                        label.textContent = NF.texte;
                    });
                }
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;base64,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QUc7d0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQzFELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckIsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNsQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRVYsbUVBQW1FO29CQUNuRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSzt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFFdEMsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDekMsQ0FBQzt3QkFDRCxTQUFTLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQzVCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQzthQUNELENBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJJSE0vQ2hvc2VfSUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaG9zZX0gXHRcdFx0ZnJvbSBcIkBORi9uZlwiO1xuaW1wb3J0IHtDb21wb25lbnRJSE19IFx0ZnJvbSBcIi4vQ29tcG9uZW50SUhNXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PGRpdiBjbGFzcz1cInZpZXdcIj5cblx0XHQ8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIiB0eXBlPVwiY2hlY2tib3hcIj5cblx0XHQ8bGFiZWwgY2xhc3M9XCJ0ZXh0ZVwiPjwvbGFiZWw+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIj48L2J1dHRvbj4gXG5cdDwvZGl2PlxuXHQ8Zm9ybT5cblx0XHQ8aW5wdXQgY2xhc3M9XCJlZGl0XCIvPlxuXHQ8L2Zvcm0+XG5gO1xuXG4vLyBDbGFzc2Ugw6AgY29tcGzDqXRlci4uLlxuZXhwb3J0IGNsYXNzIENob3NlSUhNIGV4dGVuZHMgQ29tcG9uZW50SUhNIHtcblx0Y29uc3RydWN0b3IocHVibGljIE5GOiBDaG9zZSwgcm9vdDogSFRNTEVsZW1lbnQgfCBzdHJpbmcpIHtcblx0XHRzdXBlcihORiwgcm9vdCk7XG5cdFx0dGhpcy5yb290LmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZTtcblxuXHRcdC8vIEV0YXBlIDA6IEonaWRlbnRpZmllIGxlcyDDqWzDqW1lbnRzIGludMOpcmVzc2FudCBwb3VyIGxlIEhUTUxcblx0XHRsZXQgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvciggXCJsYWJlbFwiICkgYXMgSFRNTExhYmVsRWxlbWVudDtcblx0XHRsZXQgaW5wdXRGYWl0IDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBcImlucHV0LnRvZ2dsZVwiICkgYXMgSFRNTElucHV0RWxlbWVudDtcdCBcdC8vIGTDqXNpZ25hdGlvbiBkZSBsYSBjaGVja0JveFxuXHRcdGxldCBidG5EZXN0cm95IDogSFRNTEJ1dHRvbkVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvciggXCJidXR0b24uZGVzdHJveVwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcdC8vIGTDqXNpZ25hdGlvbiBkdSBib3V0b24gc3VwcHJpbWVyXG5cdFx0bGV0IGZvcm1MYWJlbCA6IEhUTUxMYWJlbEVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvciggXCJsYWJlbC50ZXh0ZVwiICkgYXMgSFRNTExhYmVsRWxlbWVudDtcdFx0Ly8gZMOpc2lnbmF0aW9uIGRlIGwnw6lsZW1lbnQgbGFiZWwgXG5cdFx0bGV0IGlucHV0RWRpdCA6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvciggXCJpbnB1dC5lZGl0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHRcdFx0Ly8gZMOpc2lnbmF0aW9uIGRlIGwnw6lsw6ltZW50IGlucHV0IMOgIMOpZGl0ZXJcblx0XHRsZXQgc3VibWl0Rm9ybSA6IEhUTUxGb3JtRWxlbWVudCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBcImZvcm1cIikgYXMgSFRNTEZvcm1FbGVtZW50O1x0XHRcdFx0XHQvLyBkw6lzaWduYXRpb24gZGUgbCfDqWzDqW1lbnQgIHBvdXIgbGUgcHJldmVudERlZmF1bHRcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IE5GLnRleHRlO1xuXG5cdFx0Ly8gQmxvYyAxIDogUydhYm9ubmVyIGF1eCBpbnRlcmFjdGlvbiBzdXIgbGEgdnVlIGV0IGxlcyB0cmFkdWlyZSBlbiBjb21tYW5kZXMgTkZcblx0XHRpbnB1dEZhaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZ0KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkxhIHZ1ZSBkaXQgcXVlXCIsIGV2dCk7XG5cdFx0XHRORi5GYWl0KCBpbnB1dEZhaXQuY2hlY2tlZCApO1xuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGJ0bkRlc3Ryb3kuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTGEgdnUgcG91ciBkZXN0cm95IGRpdCBxdWUgXCIsIGV2dClcblx0XHRcdE5GLmRpc3Bvc2UoKTtcblxuXHRcdH0sIGZhbHNlKTtcblxuXHRcdGZvcm1MYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2dCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJMYSB2dSBwb3VyIGxlIGxhYmVsIGRpdCBxdWUgXCIsIGV2dClcblx0XHRcdHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKFwiZWRpdGluZ1wiKTsvLy5sYUJhbGlzZTxsaT5cblx0XHRcdGlucHV0RWRpdC52YWx1ZSA9IE5GLnRleHRlO1xuXHRcdFx0aW5wdXRFZGl0LmZvY3VzO1xuXHRcdH0sIGZhbHNlKTtcblxuXHRcdC8vIEV2ZW50TGlzdGVubmVyIHN1ciBsYSBwZXJ0ZSBkZSBmb2N1cyBwb3VyIGwnZWRpdGlvblxuXHRcdGlucHV0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZXZ0KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkxhIHZ1IHBvdXIgbGUgYmx1ciBkaXQgcXVlIFwiLCBldnQpXG5cdFx0XHRORi5UZXh0ZSggaW5wdXRFZGl0LnZhbHVlICk7XG5cdFx0XHR0aGlzLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShcImVkaXRpbmdcIik7XG5cblx0XHR9LCBmYWxzZSk7XG5cblx0XHQvLyBFdmVudExpc3RlbmVyIHBvdXIgZmFpcmUgbGUgcHJldmVudERlZmF1bHQgZGUgbGEgdG91Y2hlIGVudHLDqWVcblx0XHRzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJMYSB2dWUgcG91ciBsZSBwcmV2ZW50RGVmYXVsdCBkaXQgcXVlIFwiLCBldnQpXG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlucHV0RWRpdC5ibHVyKCk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0Ly8gQmxvYyAyIDogUydhYm9ubmVyIGF1eCBORiBldCBtZXR0cmUgw6Agam91ciBsYSB2dWUgZW4gY29uc8OpcXVlbmNlXG5cdFx0TkYub24oXCJ1cGRhdGVcIiwgKG5mLCBldmVudE5hbWUsIGV2ZW50KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkxlIE5GIGEgZGl0IHF1ZVwiLCBldmVudCk7XG4gXG5cdFx0XHRpZihORi5mYWl0KSB7XG5cdFx0XHRcdHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXRGYWl0LmNoZWNrZWQgPSBORi5mYWl0O1xuXHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBORi50ZXh0ZTtcblx0XHR9KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
