System.register(["./nf"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var nf_1, dataPromise;
    return {
        setters: [
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            exports_1("dataPromise", dataPromise = new Promise((resolve) => {
                setTimeout(() => resolve(new nf_1.ListeChoses()), 100);
            }));
        }
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFQSx5QkFBVyxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQWUsQ0FBQyxPQUFPO2dCQUN2RCxVQUFVLENBQUMsTUFBTSxPQUFPLENBQUUsSUFBSSxnQkFBVyxFQUFFLENBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUUsRUFBQztRQUNKLENBQUMiLCJmaWxlIjoibmYvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdGVDaG9zZXN9IGZyb20gXCIuL25mXCI7XG5cbmV4cG9ydCBsZXQgZGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZTxMaXN0ZUNob3Nlcz4oIChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCBuZXcgTGlzdGVDaG9zZXMoKSApLCAxMDApO1xufSApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
