System.register(["@NF/service", "./IHM/listeChoses_IHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var service_1, listeChoses_IHM_1, PromesseDocumentPret, P_all;
    return {
        setters: [
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (listeChoses_IHM_1_1) {
                listeChoses_IHM_1 = listeChoses_IHM_1_1;
            }
        ],
        execute: function () {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = resolve;
                }
            });
            P_all = Promise.all([service_1.dataPromise, PromesseDocumentPret]);
            P_all.then(([liste]) => {
                console.log("Initialisation...");
                new listeChoses_IHM_1.ListeChosesIHM(liste, "#sansFramework");
            });
        }
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7WUFNSSxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU87Z0JBQy9DLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7Z0JBQ2hDLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMscUJBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFFLENBQUM7WUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsS0FBSyxDQUFvQjtnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLGdDQUFjLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOb3lhdSBmb25jdGlvbm5lbCAqL1xuaW1wb3J0IHtMaXN0ZUNob3Nlc30gZnJvbSBcIkBORi9uZlwiO1xuaW1wb3J0IHtkYXRhUHJvbWlzZX0gZnJvbSBcIkBORi9zZXJ2aWNlXCI7XG5cbi8qIFZlcnNpb24gc2FucyBmcmFtZXdvcmsgKi9cbmltcG9ydCB7TGlzdGVDaG9zZXNJSE19IGZyb20gXCIuL0lITS9saXN0ZUNob3Nlc19JSE1cIjtcbmxldCBQcm9tZXNzZURvY3VtZW50UHJldCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuXHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0XHRyZXNvbHZlKCk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5vbmxvYWQgPSByZXNvbHZlO1xuXHR9XG59KTtcblxubGV0IFBfYWxsID0gUHJvbWlzZS5hbGwoIFtkYXRhUHJvbWlzZSwgUHJvbWVzc2VEb2N1bWVudFByZXRdICk7XG5QX2FsbC50aGVuKCAoW2xpc3RlXTogW0xpc3RlQ2hvc2VzLCB7fV0pID0+IHtcblx0Y29uc29sZS5sb2coXCJJbml0aWFsaXNhdGlvbi4uLlwiKTtcblx0bmV3IExpc3RlQ2hvc2VzSUhNKGxpc3RlLCBcIiNzYW5zRnJhbWV3b3JrXCIpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
