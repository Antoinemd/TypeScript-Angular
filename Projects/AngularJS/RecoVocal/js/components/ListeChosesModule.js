System.register(["@angular/core", "@angular/forms", "@angular/common", "@NoyauFonctionnel/service", "./Chose", "./ListeChoses"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, common_1, service_1, Chose_1, ListeChoses_1, ListeChosesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (Chose_1_1) {
                Chose_1 = Chose_1_1;
            },
            function (ListeChoses_1_1) {
                ListeChoses_1 = ListeChoses_1_1;
            }
        ],
        execute: function () {
            ListeChosesModule = class ListeChosesModule {
            };
            ListeChosesModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    exports: [ListeChoses_1.ListeChoses],
                    declarations: [ListeChoses_1.ListeChoses, Chose_1.ItemChose],
                    providers: [service_1.ListeChosesService],
                })
            ], ListeChosesModule);
            exports_1("ListeChosesModule", ListeChosesModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXNNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlYSxpQkFBaUIsR0FBOUI7YUFBa0MsQ0FBQTtZQUFyQixpQkFBaUI7Z0JBUDdCLGVBQVEsQ0FBQztvQkFDTixPQUFPLEVBQU8sQ0FBRSxxQkFBWSxFQUFFLG1CQUFXLENBQUU7b0JBQzNDLE9BQU8sRUFBTyxDQUFFLHlCQUFXLENBQUU7b0JBQzdCLFlBQVksRUFBRSxDQUFFLHlCQUFXLEVBQUUsaUJBQVMsQ0FBRTtvQkFDeEMsU0FBUyxFQUFLLENBQUUsNEJBQWtCLENBQUU7aUJBRXZDLENBQUM7ZUFDVyxpQkFBaUIsQ0FBSTs7UUFDbEMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RlQ2hvc2VzTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgICAgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICAgZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtMaXN0ZUNob3Nlc1NlcnZpY2V9IGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9zZXJ2aWNlXCI7XG5pbXBvcnQge0l0ZW1DaG9zZX0gICAgICAgICAgZnJvbSBcIi4vQ2hvc2VcIjtcbmltcG9ydCB7TGlzdGVDaG9zZXN9ICAgICAgICBmcm9tIFwiLi9MaXN0ZUNob3Nlc1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUgXSxcbiAgICBleHBvcnRzICAgICA6IFsgTGlzdGVDaG9zZXMgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsgTGlzdGVDaG9zZXMsIEl0ZW1DaG9zZSBdLFxuICAgIHByb3ZpZGVycyAgIDogWyBMaXN0ZUNob3Nlc1NlcnZpY2UgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBMaXN0ZUNob3Nlc01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=
