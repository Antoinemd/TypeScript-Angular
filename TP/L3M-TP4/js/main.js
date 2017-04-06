System.register(["@angular/core", "@angular/platform-browser", "./components/ListeChosesModule", "@angular/platform-browser-dynamic", "./sansFramework/listeChoses_IHM", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, ListeChosesModule_1, platform_browser_dynamic_1, listeChoses_IHM_1, service_1, PromesseDocumentPret, CompDemoM2M, AppModule, platform;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ListeChosesModule_1_1) {
                ListeChosesModule_1 = ListeChosesModule_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (listeChoses_IHM_1_1) {
                listeChoses_IHM_1 = listeChoses_IHM_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = () => resolve();
                }
            });
            CompDemoM2M = class CompDemoM2M {
            };
            CompDemoM2M = __decorate([
                core_1.Component({
                    selector: "demo-m2m",
                    template: `<liste-choses titre="LA Liste"></liste-choses>`
                })
            ], CompDemoM2M);
            AppModule = class AppModule {
                constructor() {
                    // Juste pour bien lier la version sans framework
                    let Pall = Promise.all([service_1.ListeChosesService.getData(), PromesseDocumentPret]);
                    Pall.then(([nf]) => {
                        new listeChoses_IHM_1.ListeChosesIHM(nf, "#sansFramework");
                    });
                }
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, ListeChosesModule_1.ListeChosesModule],
                    declarations: [CompDemoM2M],
                    bootstrap: [CompDemoM2M]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(AppModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRSSxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU87Z0JBQzVDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFPRyxXQUFXLEdBQWpCO2FBQW9CLENBQUE7WUFBZCxXQUFXO2dCQUpoQixnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxVQUFVO29CQUN0QixRQUFRLEVBQUksZ0RBQWdEO2lCQUMvRCxDQUFDO2VBQ0ksV0FBVyxDQUFHO1lBT1AsU0FBUyxHQUF0QjtnQkFDSTtvQkFDSSxpREFBaUQ7b0JBQ2pELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyw0QkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDWixJQUFJLGdDQUFjLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7YUFDSixDQUFBO1lBUlksU0FBUztnQkFMckIsZUFBUSxDQUFDO29CQUNOLE9BQU8sRUFBTyxDQUFFLGdDQUFhLEVBQUUscUNBQWlCLENBQUU7b0JBQ2xELFlBQVksRUFBRSxDQUFFLFdBQVcsQ0FBRTtvQkFDN0IsU0FBUyxFQUFLLENBQUUsV0FBVyxDQUFFO2lCQUNoQyxDQUFDOztlQUNXLFNBQVMsQ0FRckI7O1lBRUssUUFBUSxHQUFHLGlEQUFzQixFQUFFLENBQUM7WUFDMUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IExpc3RlQ2hvc2VzTW9kdWxlIH0gICAgICAgIGZyb20gXCIuL2NvbXBvbmVudHMvTGlzdGVDaG9zZXNNb2R1bGVcIjtcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSAgIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcbmltcG9ydCB7IExpc3RlQ2hvc2VzSUhNICAgICB9IGZyb20gXCIuL3NhbnNGcmFtZXdvcmsvbGlzdGVDaG9zZXNfSUhNXCI7XG5pbXBvcnQgeyBMaXN0ZUNob3Nlc1NlcnZpY2UgfSBmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvc2VydmljZVwiO1xuXG5cbmxldCBQcm9tZXNzZURvY3VtZW50UHJldCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgfVxufSk7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3JcdFx0OiBcImRlbW8tbTJtXCIsXG4gICAgdGVtcGxhdGVcdFx0OiBgPGxpc3RlLWNob3NlcyB0aXRyZT1cIkxBIExpc3RlXCI+PC9saXN0ZS1jaG9zZXM+YFxufSlcbmNsYXNzIENvbXBEZW1vTTJNIHt9XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogICAgICBbIEJyb3dzZXJNb2R1bGUsIExpc3RlQ2hvc2VzTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbIENvbXBEZW1vTTJNIF0sXG4gICAgYm9vdHN0cmFwOiAgICBbIENvbXBEZW1vTTJNIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gSnVzdGUgcG91ciBiaWVuIGxpZXIgbGEgdmVyc2lvbiBzYW5zIGZyYW1ld29ya1xuICAgICAgICBsZXQgUGFsbCA9IFByb21pc2UuYWxsKFtMaXN0ZUNob3Nlc1NlcnZpY2UuZ2V0RGF0YSgpLCBQcm9tZXNzZURvY3VtZW50UHJldF0pO1xuICAgICAgICBQYWxsLnRoZW4oIChbbmZdKSA9PiB7XG4gICAgICAgICAgICBuZXcgTGlzdGVDaG9zZXNJSE0obmYsIFwiI3NhbnNGcmFtZXdvcmtcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCk7XG5wbGF0Zm9ybS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
