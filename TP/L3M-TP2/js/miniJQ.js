System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MiniJQData, miniJQ;
    return {
        setters: [],
        execute: function () {
            /***********************************************************************************************************************
             * Q1) Ecrivez la classe MiniJQData de sorte à mimer le comportement de JQuery
             * voir http://api.jquery.com/
             * * Au minimum, les méthodes :
             *   - each
             *   - text
             *   - html
             *   - click
             *   - append
             *   - bind
             *   - children
             *   - detach
             */
            MiniJQData = class MiniJQData {
                constructor(elements) {
                    this.elements = elements;
                }
                each(fct) {
                    this.elements.forEach((e, i) => fct(i, e));
                    return this;
                }
                text(str) {
                    if (str === undefined) {
                        return this.elements.reduce((acc, domElement) => acc + domElement.textContent, "");
                    }
                    else {
                        return this.each((i, e) => e.textContent = str);
                    }
                }
                html(str) {
                    if (str === undefined) {
                        return this.elements.reduce((acc, domElement) => acc + domElement.innerHTML, "");
                    }
                    else {
                        return this.each((i, e) => e.innerHTML = str);
                    }
                }
                click(handler) {
                    if (handler === undefined) {
                        return this.trigger("click");
                    }
                    else {
                        return this.each((i, e) => e.addEventListener("click", handler, false)); // rappel true pour acquisition (Microsoft), false pour bubbling ( à utiliser )
                    }
                }
                // .. implémenter trigger, avec un return this;
                trigger(eventName) {
                    //TODO
                    return this;
                }
            };
            /***********************************************************************************************************************
             * Q2) Ecrivez la fonction miniJQ :
             *   - argument : un sélecteur CSS ou un Element du DOM
             *   - renvoi une instance de la classe MiniJQData
             */
            exports_1("miniJQ", miniJQ = (selecteur) => {
                let elements = [];
                if (selecteur.constructor === String) {
                    elements = Array.from(document.querySelectorAll(selecteur));
                    console.log(selecteur, "is a string");
                    console.log(selecteur, " => ", elements);
                }
                if (selecteur instanceof HTMLElement) {
                    console.log(selecteur, "is a HTMLElement");
                }
                if (selecteur instanceof Array) {
                    console.log(selecteur, "is an array of HTMLElements");
                }
                return new MiniJQData(elements); // A modifier bien sur...
            });
            /***********************************************************************************************************************
             * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
             *  Par exemple des méthodes issues de JQueryUI
             */
        }
    };
});

//# sourceMappingURL=data:application/json;base64,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V0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUUsQ0FBQztnQkFDakQsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxTQUFTLEVBQUUsNkJBQTZCLENBQUUsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUUsUUFBUSxDQUFFLENBQUMsQ0FBQyx5QkFBeUI7WUFDaEUsQ0FBQyxFQUFDO1lBR0Y7OztlQUdHO1FBQ0gsQ0FBQyIsImZpbGUiOiJtaW5pSlEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFExKSBFY3JpdmV6IGxhIGNsYXNzZSBNaW5pSlFEYXRhIGRlIHNvcnRlIMOgIG1pbWVyIGxlIGNvbXBvcnRlbWVudCBkZSBKUXVlcnlcbiAqIHZvaXIgaHR0cDovL2FwaS5qcXVlcnkuY29tL1xuICogKiBBdSBtaW5pbXVtLCBsZXMgbcOpdGhvZGVzIDpcbiAqICAgLSBlYWNoXG4gKiAgIC0gdGV4dFxuICogICAtIGh0bWxcbiAqICAgLSBjbGlja1xuICogICAtIGFwcGVuZFxuICogICAtIGJpbmRcbiAqICAgLSBjaGlsZHJlblxuICogICAtIGRldGFjaFxuICovXG5jbGFzcyBNaW5pSlFEYXRhIHtcbiAgICBwcml2YXRlIGVsZW1lbnRzIDogSFRNTEVsZW1lbnRbXTtcblxuICAgIGNvbnN0cnVjdG9yKCBlbGVtZW50czogSFRNTEVsZW1lbnRbXSApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIH1cblxuICAgIGVhY2goZmN0OihpbmRleDpudW1iZXIsIGVsZW1lbnQ6SFRNTEVsZW1lbnQpID0+IGFueSkgOiB0aGlzIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlLCBpKSA9PiBmY3QoaSwgZSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0ZXh0KHN0cj86IHN0cmluZykgOiBzdHJpbmcgfCB0aGlze1xuICAgICAgICBpZihzdHIgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5yZWR1Y2UoKGFjYywgZG9tRWxlbWVudCkgPT4gYWNjICsgZG9tRWxlbWVudC50ZXh0Q29udGVudCwgXCJcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKChpLCBlKSA9PiBlLnRleHRDb250ZW50ID0gc3RyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGh0bWwoc3RyPzogc3RyaW5nKSA6IHN0cmluZyB8IHRoaXN7XG4gICAgICAgIGlmKHN0ciA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLnJlZHVjZSgoYWNjLCBkb21FbGVtZW50KSA9PiBhY2MgKyBkb21FbGVtZW50LmlubmVySFRNTCwgXCJcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKChpLCBlKSA9PiBlLmlubmVySFRNTCA9IHN0cik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGljayhoYW5kbGVyPyA6IChldmVudCA6IE1vdXNlRXZlbnQpID0+IGFueSkgOiB0aGlze1xuICAgICAgICBpZihoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKChpLGUpID0+IGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIsIGZhbHNlKSkgIC8vIHJhcHBlbCB0cnVlIHBvdXIgYWNxdWlzaXRpb24gKE1pY3Jvc29mdCksIGZhbHNlIHBvdXIgYnViYmxpbmcgKCDDoCB1dGlsaXNlciApXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gLi4gaW1wbMOpbWVudGVyIHRyaWdnZXIsIGF2ZWMgdW4gcmV0dXJuIHRoaXM7XG4gICAgdHJpZ2dlcihldmVudE5hbWUgOiBzdHJpbmcpIDogdGhpc3tcbiAgICAgICAgLy9UT0RPXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG5cblxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFEyKSBFY3JpdmV6IGxhIGZvbmN0aW9uIG1pbmlKUSA6XG4gKiAgIC0gYXJndW1lbnQgOiB1biBzw6lsZWN0ZXVyIENTUyBvdSB1biBFbGVtZW50IGR1IERPTVxuICogICAtIHJlbnZvaSB1bmUgaW5zdGFuY2UgZGUgbGEgY2xhc3NlIE1pbmlKUURhdGFcbiAqL1xuZXhwb3J0IGxldCBtaW5pSlEgPSAoIHNlbGVjdGV1cjogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdICkgOiBNaW5pSlFEYXRhID0+IHtcbiAgICBsZXQgZWxlbWVudHMgOiBIVE1MRWxlbWVudFtdID0gW107XG5cblxuICAgIGlmIChzZWxlY3RldXIuY29uc3RydWN0b3IgPT09IFN0cmluZykge1xuICAgICAgICBlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RldXIgYXMgc3RyaW5nKSkgYXMgSFRNTEVsZW1lbnRbXTtcbiAgICAgICAgY29uc29sZS5sb2coIHNlbGVjdGV1ciwgXCJpcyBhIHN0cmluZ1wiICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCBzZWxlY3RldXIsIFwiID0+IFwiLCBlbGVtZW50cyk7XG5cbiAgICB9XG4gICAgaWYgKHNlbGVjdGV1ciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBzZWxlY3RldXIsIFwiaXMgYSBIVE1MRWxlbWVudFwiICk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RldXIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBjb25zb2xlLmxvZyggc2VsZWN0ZXVyLCBcImlzIGFuIGFycmF5IG9mIEhUTUxFbGVtZW50c1wiICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTWluaUpRRGF0YSggZWxlbWVudHMgKTsgLy8gQSBtb2RpZmllciBiaWVuIHN1ci4uLlxufTtcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFEzKSBFdGVuZGV6IGxhIGNsYXNzZSBNaW5pSlFEYXRhIGF2ZWMgZCdhdXRyZXMgbcOpdGhvZGVzIGRlIHZvdHJlIGNob2l4XG4gKiAgUGFyIGV4ZW1wbGUgZGVzIG3DqXRob2RlcyBpc3N1ZXMgZGUgSlF1ZXJ5VUlcbiAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
