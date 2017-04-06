System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NF, Chose, ListeChoses;
    return {
        setters: [],
        execute: function () {
            NF = class NF {
                constructor() {
                    this.cbList = new Map();
                }
                emit(eventName, value) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.forEach(cb => cb(this, eventName, value));
                    }
                    return this;
                }
                on(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.push(cb);
                    }
                    else {
                        this.cbList.set(eventName, [cb]);
                    }
                    return this;
                }
                off(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.splice(array.indexOf(cb), 1);
                    }
                    return this;
                }
            };
            Chose = class Chose extends NF {
                constructor(texte, liste, fait = false, date = null) {
                    super();
                    this.texte = texte;
                    this.date = date || new Date(Date.now());
                    this.fait = fait || false;
                    this.liste = liste;
                }
                dispose() {
                    this.liste.Retirer(this);
                }
                Texte(texte) {
                    this.texte = texte;
                    this.emit("update", { texte: texte });
                    return this;
                }
                Fait(fait) {
                    this.fait = fait;
                    this.emit("update", { fait: fait });
                    return this;
                }
                on(eventName, cb) {
                    return super.on(eventName, cb);
                }
                off(eventName, cb) {
                    return super.off(eventName, cb);
                }
            };
            exports_1("Chose", Chose);
            ListeChoses = class ListeChoses extends NF {
                constructor() {
                    super();
                    this.choses = [];
                }
                Ajouter(texte, fait = false, date = null) {
                    let chose = new Chose(texte, this, fait, date);
                    this.choses.push(chose);
                    this.emit("update", { append: chose });
                    return this;
                }
                Retirer(chose) {
                    this.choses.splice(this.choses.indexOf(chose), 1);
                    this.emit("update", { remove: chose });
                    return this;
                }
                on(eventName, cb) {
                    return super.on(eventName, cb);
                }
                off(eventName, cb) {
                    return super.off(eventName, cb);
                }
            };
            exports_1("ListeChoses", ListeChoses);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLENBQUM7Z0JBQ2IsQ0FBQztnQkFDRCxFQUFFLENBQUMsU0FBbUIsRUFBRSxFQUEwQjtvQkFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUNELEdBQUcsQ0FBQyxTQUFtQixFQUFFLEVBQTBCO29CQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7YUFDRCxDQUFBOztRQUNELENBQUMiLCJmaWxlIjoibmYvbmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIE5GX0NhbGxCYWNrID0gKG5mOiBORiwgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQ7XG5jbGFzcyBORiB7XG5cdHByaXZhdGUgY2JMaXN0IDogTWFwPHN0cmluZywgTkZfQ2FsbEJhY2tbXT47XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY2JMaXN0ID0gbmV3IE1hcDxzdHJpbmcsIE5GX0NhbGxCYWNrW10+KCk7XG5cblx0fVxuXHRlbWl0KGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA6IHRoaXMge1xuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcblx0XHRcdGxldCBhcnJheSA9IHRoaXMuY2JMaXN0LmdldChldmVudE5hbWUpO1xuXHRcdFx0YXJyYXkuZm9yRWFjaCggY2IgPT4gY2IodGhpcywgZXZlbnROYW1lLCB2YWx1ZSkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0b24oZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBORl9DYWxsQmFjaykgOiB0aGlzIHtcblx0XHRpZiggdGhpcy5jYkxpc3QuaGFzKGV2ZW50TmFtZSkgKSB7XG5cdFx0XHRsZXQgYXJyYXkgOiBORl9DYWxsQmFja1tdID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XG5cdFx0XHRhcnJheS5wdXNoKGNiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jYkxpc3Quc2V0KGV2ZW50TmFtZSwgW2NiXSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdG9mZihldmVudE5hbWU6IHN0cmluZywgY2I6IE5GX0NhbGxCYWNrKSA6IHRoaXMge1xuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcblx0XHRcdGxldCBhcnJheSA9IHRoaXMuY2JMaXN0LmdldChldmVudE5hbWUpO1xuXHRcdFx0YXJyYXkuc3BsaWNlKCBhcnJheS5pbmRleE9mKGNiKSwgMSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50Q2hvc2UgPSB7XG5cdGZhaXQ/XHQ6IGJvb2xlYW4sXG5cdHRleHRlP1x0OiBzdHJpbmdcbn07XG5leHBvcnQgdHlwZSBORl9DaG9zZV9DYWxsQmFjayA9IChuZjogQ2hvc2UsIGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogRXZlbnRDaG9zZSkgPT4gdm9pZDtcbmV4cG9ydCBjbGFzcyBDaG9zZSBleHRlbmRzIE5GIHtcblx0cmVhZG9ubHkgbGlzdGVcdFx0OiBMaXN0ZUNob3Nlcztcblx0cmVhZG9ubHkgZGF0ZSBcdFx0OiBEYXRlO1xuXHR0ZXh0ZVx0XHRcdFx0OiBzdHJpbmc7XG5cdGZhaXQgXHRcdFx0XHQ6IGJvb2xlYW47XG5cdGNvbnN0cnVjdG9yXHQodGV4dGU6IHN0cmluZywgbGlzdGU6IExpc3RlQ2hvc2VzLCBmYWl0OiBib29sZWFuID0gZmFsc2UsIGRhdGU6IERhdGUgPSBudWxsKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRleHRlICA9IHRleHRlO1xuXHRcdHRoaXMuZGF0ZVx0PSBkYXRlIHx8IG5ldyBEYXRlKCBEYXRlLm5vdygpICk7XG5cdFx0dGhpcy5mYWl0XHQ9IGZhaXQgfHwgZmFsc2U7XG5cdFx0dGhpcy5saXN0ZVx0PSBsaXN0ZTtcblx0fVxuXHRkaXNwb3NlXHRcdCgpIHtcblx0XHR0aGlzLmxpc3RlLlJldGlyZXIodGhpcyk7XG5cdH1cblx0VGV4dGUodGV4dGU6IHN0cmluZykge1xuXHRcdHRoaXMudGV4dGUgPSB0ZXh0ZTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3RleHRlOiB0ZXh0ZX0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdEZhaXQoZmFpdDogYm9vbGVhbikge1xuXHRcdHRoaXMuZmFpdCA9IGZhaXQ7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHtmYWl0OiBmYWl0fSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0b24oZXZlbnROYW1lOiBcInVwZGF0ZVwiLCBjYjogTkZfQ2hvc2VfQ2FsbEJhY2spIDogdGhpcyB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgY2IpO1xuXHR9XG5cdG9mZihldmVudE5hbWU6IFwidXBkYXRlXCIsIGNiOiBORl9DaG9zZV9DYWxsQmFjaykgOiB0aGlzIHtcblx0XHRyZXR1cm4gc3VwZXIub2ZmKGV2ZW50TmFtZSwgY2IpO1xuXHR9XG59XG5cbmV4cG9ydCB0eXBlIEV2ZW50TGlzdGVDaG9zZXMgPSB7YXBwZW5kPzogQ2hvc2UsIHJlbW92ZT86Q2hvc2V9O1xuZXhwb3J0IHR5cGUgTkZfTGlzdGVDaG9zZV9DYWxsQmFjayA9IChuZjogTGlzdGVDaG9zZXMsIGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogRXZlbnRMaXN0ZUNob3NlcykgPT4gdm9pZDtcbmV4cG9ydCBjbGFzcyBMaXN0ZUNob3NlcyBleHRlbmRzIE5GIHtcblx0Y2hvc2VzIFx0OiBDaG9zZVtdO1xuXHRjb25zdHJ1Y3Rvclx0KCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jaG9zZXMgPSBbXTtcblx0fVxuXHRBam91dGVyXHRcdCh0ZXh0ZTogc3RyaW5nLCBmYWl0OiBib29sZWFuID0gZmFsc2UsIGRhdGU6IERhdGUgPSBudWxsKSA6IHRoaXMge1xuXHRcdGxldCBjaG9zZSA9IG5ldyBDaG9zZSh0ZXh0ZSwgdGhpcywgZmFpdCwgZGF0ZSk7XG5cdFx0dGhpcy5jaG9zZXMucHVzaCggY2hvc2UgKTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge2FwcGVuZDogY2hvc2V9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRSZXRpcmVyXHRcdChjaG9zZTogQ2hvc2UpIDogdGhpcyB7XG5cdFx0dGhpcy5jaG9zZXMuc3BsaWNlKCB0aGlzLmNob3Nlcy5pbmRleE9mKGNob3NlKSwgMSApO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7cmVtb3ZlOiBjaG9zZX0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdG9uKGV2ZW50TmFtZTogXCJ1cGRhdGVcIiwgY2I6IE5GX0xpc3RlQ2hvc2VfQ2FsbEJhY2spIDogdGhpcyB7XG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgY2IpO1xuXHR9XG5cdG9mZihldmVudE5hbWU6IFwidXBkYXRlXCIsIGNiOiBORl9MaXN0ZUNob3NlX0NhbGxCYWNrKSA6IHRoaXMge1xuXHRcdHJldHVybiBzdXBlci5vZmYoZXZlbnROYW1lLCBjYik7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
