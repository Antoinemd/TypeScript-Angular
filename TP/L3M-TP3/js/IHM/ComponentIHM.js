System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM;
    return {
        setters: [],
        execute: function () {
            ComponentIHM = class ComponentIHM {
                constructor(NF, root) {
                    this.NF = NF;
                    this.root = this.getRoot(root);
                }
                dispose() {
                    this.root.parentNode.removeChild(this.root);
                    this.root.innerHTML = "";
                }
                getRoot(rootSelector) {
                    let root;
                    if (rootSelector instanceof HTMLElement) {
                        root = rootSelector;
                    }
                    else {
                        root = document.querySelector(rootSelector);
                    }
                    return root;
                }
            };
            exports_1("ComponentIHM", ComponentIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklITS9Db21wb25lbnRJSE0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUVBLGVBQUE7Z0JBR0ksWUFBWSxFQUFXLEVBQUUsSUFBMEI7b0JBQy9DLElBQUksQ0FBQyxFQUFFLEdBQUssRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCxPQUFPO29CQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFDTyxPQUFPLENBQUMsWUFBa0M7b0JBQzlDLElBQUksSUFBa0IsQ0FBQztvQkFDdkIsRUFBRSxDQUFBLENBQUMsWUFBWSxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksR0FBRyxZQUFZLENBQUM7b0JBQ3hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsWUFBWSxDQUFpQixDQUFDO29CQUNqRSxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSixDQUFBOztRQUNELENBQUMiLCJmaWxlIjoiSUhNL0NvbXBvbmVudElITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TkYgYXMgQ2xhc3NORn0gZnJvbSBcIkBORi9uZlwiO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50SUhNIHtcbiAgICByb290OiBIVE1MRWxlbWVudDtcbiAgICBORiAgOiBDbGFzc05GO1xuICAgIGNvbnN0cnVjdG9yKE5GOiBDbGFzc05GLCByb290OiBIVE1MRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICB0aGlzLk5GICAgPSBORjtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5nZXRSb290KHJvb3QpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLnJvb3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5yb290ICk7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFJvb3Qocm9vdFNlbGVjdG9yOiBIVE1MRWxlbWVudCB8IHN0cmluZykgOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGxldCByb290IDogSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmKHJvb3RTZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICByb290ID0gcm9vdFNlbGVjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHJvb3RTZWxlY3RvciApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
