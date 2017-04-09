System.register(["@angular/core", "./nf"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, NF, nf, cbSaveData, choses, ListeChosesService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NF_1) {
                NF = NF_1;
            }
        ],
        execute: function () {
            nf = new NF.ListeChoses();
            cbSaveData = () => {
                let serialization = [];
                nf.choses.forEach(c => serialization.push({ texte: c.texte, fait: c.fait, date: c.date.toString() }));
                localStorage.setItem("todoListMiage", JSON.stringify(serialization));
            };
            nf.on("update", (nf, eventName, eventValue) => {
                if (eventValue.append) {
                    let chose = eventValue.append;
                    chose.on("update", cbSaveData);
                }
                if (eventValue.remove) {
                    let chose = eventValue.remove;
                    chose.off("update", cbSaveData);
                }
                cbSaveData();
            });
            // Ajouter les choses déjà présentes dans le localStorage
            choses = JSON.parse(localStorage.getItem("todoListMiage") || "[]");
            choses.forEach(c => {
                nf.Ajouter(c.texte, c.fait, new Date(c.date));
            });
            ListeChosesService = class ListeChosesService {
                static getData() {
                    return Promise.resolve(nf);
                }
            };
            ListeChosesService = __decorate([
                core_1.Injectable()
            ], ListeChosesService);
            exports_1("ListeChosesService", ListeChosesService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsVUFBVSxHQUFHO2dCQUNiLElBQUksYUFBYSxHQUF5QixFQUFFLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBRSxDQUFDLENBQUM7Z0JBQ3ZHLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUUsQ0FBQztZQUMxRSxDQUFDLENBQUM7WUFFRixFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQWtCLEVBQUUsU0FBa0IsRUFBRSxVQUFnQztnQkFDckYsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUNELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO29CQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRCxVQUFVLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUUsQ0FBQztZQUVKLHlEQUF5RDtZQUNyRCxNQUFNLEdBQThDLElBQUksQ0FBQyxLQUFLLENBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUUsQ0FBQztZQUNwSCxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7WUFLVSxrQkFBa0IsR0FBL0I7Z0JBQ0ksTUFBTSxDQUFDLE9BQU87b0JBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFFLENBQUM7Z0JBQ2pDLENBQUM7YUFDSixDQUFBO1lBSlksa0JBQWtCO2dCQUQ5QixpQkFBVSxFQUFFO2VBQ0Esa0JBQWtCLENBSTlCOztRQUNELENBQUMiLCJmaWxlIjoibmYvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgTkYgZnJvbSBcIi4vbmZcIjtcblxuLy8gTG9hZCBmcm9tIGxvY2FsU3RvcmFnZVxudHlwZSBTZXJpYWxpc2F0aW9uQ2hvc2VzID0gQXJyYXk8e3RleHRlOiBzdHJpbmcsIGZhaXQ6IGJvb2xlYW4sIGRhdGU6IHN0cmluZ30+O1xubGV0IG5mID0gbmV3IE5GLkxpc3RlQ2hvc2VzKCk7XG5sZXQgY2JTYXZlRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgc2VyaWFsaXphdGlvbiA6IFNlcmlhbGlzYXRpb25DaG9zZXMgPSBbXTtcbiAgICBuZi5jaG9zZXMuZm9yRWFjaCggYyA9PiBzZXJpYWxpemF0aW9uLnB1c2goIHt0ZXh0ZTogYy50ZXh0ZSwgZmFpdDogYy5mYWl0LCBkYXRlOiBjLmRhdGUudG9TdHJpbmcoKX0gKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdE1pYWdlXCIsIEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6YXRpb24pICk7XG59O1xuXG5uZi5vbihcInVwZGF0ZVwiLCAobmY6IE5GLkxpc3RlQ2hvc2VzLCBldmVudE5hbWUgOiBzdHJpbmcsIGV2ZW50VmFsdWUgOiBORi5FdmVudExpc3RlQ2hvc2VzKSA9PiB7XG4gICAgaWYoZXZlbnRWYWx1ZS5hcHBlbmQpIHtcbiAgICAgICAgbGV0IGNob3NlID0gZXZlbnRWYWx1ZS5hcHBlbmQ7XG4gICAgICAgIGNob3NlLm9uKFwidXBkYXRlXCIsIGNiU2F2ZURhdGEpO1xuICAgIH1cbiAgICBpZihldmVudFZhbHVlLnJlbW92ZSkge1xuICAgICAgICBsZXQgY2hvc2UgPSBldmVudFZhbHVlLnJlbW92ZTtcbiAgICAgICAgY2hvc2Uub2ZmKFwidXBkYXRlXCIsIGNiU2F2ZURhdGEpO1xuICAgIH1cbiAgICBjYlNhdmVEYXRhKCk7XG59ICk7XG5cbi8vIEFqb3V0ZXIgbGVzIGNob3NlcyBkw6lqw6AgcHLDqXNlbnRlcyBkYW5zIGxlIGxvY2FsU3RvcmFnZVxubGV0IGNob3NlcyA6IFNlcmlhbGlzYXRpb25DaG9zZXMgPSA8U2VyaWFsaXNhdGlvbkNob3Nlcz5KU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0TWlhZ2VcIikgfHwgXCJbXVwiICk7XG5jaG9zZXMuZm9yRWFjaCggYyA9PiB7XG4gICAgbmYuQWpvdXRlciggYy50ZXh0ZSwgYy5mYWl0LCBuZXcgRGF0ZShjLmRhdGUpICk7XG59KTtcblxuXG4vLyBEZWZpbmUgc2VydmljZVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzU2VydmljZSB7XG4gICAgc3RhdGljIGdldERhdGFcdCgpIDogUHJvbWlzZTxORi5MaXN0ZUNob3Nlcz4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBuZiApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
