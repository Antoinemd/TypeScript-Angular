System.register(["@angular/core", "@NoyauFonctionnel/nf"], function (exports_1, context_1) {
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
    var core_1, nf_1, htmlTemplate, ItemChose;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				name			= "fait"
				[ngModel]="nf.fait"
				(ngModelChange)="nf.Fait($event)"/>
		<label 	class="texte" (dblclick)="modeEdition()">{{nf.texte}}</label>
		<button class="destroy" (click)="nf.dispose()"></button>
	</div>
	<form *ngIf="editing" (ngSubmit)="setText(newText.value)">
		<input 	class="edit" [ngModel]="nf.texte" name="newText" #newText (blur)="setText(newText.value)"/>
	</form>
`;
            ItemChose = class ItemChose {
                constructor() {
                    this.editing = false;
                }
                //constructor() {}
                modeEdition() {
                    this.editing = true;
                    requestAnimationFrame(() => {
                        this.newTextInput.nativeElement.focus();
                    });
                }
                setText(txt) {
                    this.editing = false;
                    //console.log("On tue tout");
                    if (txt === "") {
                        this.nf.dispose();
                    }
                    else {
                        this.nf.Texte(txt);
                    }
                }
            };
            __decorate([
                core_1.Input("nf"),
                __metadata("design:type", nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("newText"),
                __metadata("design:type", core_1.ElementRef)
            ], ItemChose.prototype, "newTextInput", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                })
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhcEIsQ0FBQztZQU1XLFNBQVMsR0FBdEI7Z0JBSkE7b0JBT0MsWUFBTyxHQUFtQixLQUFLLENBQUM7Z0JBaUJqQyxDQUFDO2dCQWZBLGtCQUFrQjtnQkFDZixXQUFXO29CQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixxQkFBcUIsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsT0FBTyxDQUFDLEdBQVc7b0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUM7b0JBQ25CLDZCQUE2QjtvQkFDN0IsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFBQSxDQUFDO2dCQUNoQyxDQUFDO2FBQ0osQ0FBQTtZQW5Ca0I7Z0JBQWQsWUFBSyxDQUFFLElBQUksQ0FBRTswQ0FBUSxVQUFLO2lEQUFDO1lBQ1Q7Z0JBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzBDQUFnQixpQkFBVTsyREFBQztZQUZwQyxTQUFTO2dCQUpyQixnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBSSxZQUFZO29CQUN4QixRQUFRLEVBQUksWUFBWTtpQkFDekIsQ0FBQztlQUNXLFNBQVMsQ0FvQnJCOztRQUNELENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9DaG9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2hvc2V9IGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9uZlwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG5cdFx0PGlucHV0IFx0Y2xhc3NcdFx0XHQ9IFwidG9nZ2xlXCIgXG5cdFx0XHRcdHR5cGVcdFx0XHQ9IFwiY2hlY2tib3hcIiBcblx0XHRcdFx0bmFtZVx0XHRcdD0gXCJmYWl0XCJcblx0XHRcdFx0W25nTW9kZWxdPVwibmYuZmFpdFwiXG5cdFx0XHRcdChuZ01vZGVsQ2hhbmdlKT1cIm5mLkZhaXQoJGV2ZW50KVwiLz5cblx0XHQ8bGFiZWwgXHRjbGFzcz1cInRleHRlXCIgKGRibGNsaWNrKT1cIm1vZGVFZGl0aW9uKClcIj57e25mLnRleHRlfX08L2xhYmVsPlxuXHRcdDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgKGNsaWNrKT1cIm5mLmRpc3Bvc2UoKVwiPjwvYnV0dG9uPlxuXHQ8L2Rpdj5cblx0PGZvcm0gKm5nSWY9XCJlZGl0aW5nXCIgKG5nU3VibWl0KT1cInNldFRleHQobmV3VGV4dC52YWx1ZSlcIj5cblx0XHQ8aW5wdXQgXHRjbGFzcz1cImVkaXRcIiBbbmdNb2RlbF09XCJuZi50ZXh0ZVwiIG5hbWU9XCJuZXdUZXh0XCIgI25ld1RleHQgKGJsdXIpPVwic2V0VGV4dChuZXdUZXh0LnZhbHVlKVwiLz5cblx0PC9mb3JtPlxuYDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yXHRcdDogXCJpdGVtLWNob3NlXCIsXG4gIHRlbXBsYXRlXHRcdDogaHRtbFRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1DaG9zZSB7XG4gICAgQElucHV0IChcIm5mXCIgKSBuZiAgIDogQ2hvc2U7XG5cdEBWaWV3Q2hpbGQoXCJuZXdUZXh0XCIpIG5ld1RleHRJbnB1dCA6IEVsZW1lbnRSZWY7XG5cdGVkaXRpbmdcdFx0XHQgICAgOiBib29sZWFuID0gZmFsc2U7XG5cblx0Ly9jb25zdHJ1Y3RvcigpIHt9XG4gICAgbW9kZUVkaXRpb24oKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5ld1RleHRJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRleHQodHh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nPWZhbHNlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiT24gdHVlIHRvdXRcIik7XG4gICAgICAgIGlmKHR4dD09PVwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMubmYuZGlzcG9zZSgpO1xuICAgICAgICB9IGVsc2Uge3RoaXMubmYuVGV4dGUodHh0KTt9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
