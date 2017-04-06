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
            exports_1("NF", NF);
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

//# sourceMappingURL=data:application/json;base64,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SUFBSSxDQUFDO2dCQUNiLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLFNBQW1CLEVBQUUsRUFBMEI7b0JBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxHQUFHLENBQUMsU0FBbUIsRUFBRSxFQUEwQjtvQkFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2FBQ0QsQ0FBQTs7UUFDRCxDQUFDIiwiZmlsZSI6Im5mL25mLmpzIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBORl9DYWxsQmFjayA9IChuZjogTkYsIGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB2b2lkO1xuZXhwb3J0IGNsYXNzIE5GIHtcblx0cHJpdmF0ZSBjYkxpc3QgOiBNYXA8c3RyaW5nLCBORl9DYWxsQmFja1tdPjtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jYkxpc3QgPSBuZXcgTWFwPHN0cmluZywgTkZfQ2FsbEJhY2tbXT4oKTtcblxuXHR9XG5cdGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIDogdGhpcyB7XG5cdFx0aWYoIHRoaXMuY2JMaXN0LmhhcyhldmVudE5hbWUpICkge1xuXHRcdFx0bGV0IGFycmF5ID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XG5cdFx0XHRhcnJheS5mb3JFYWNoKCBjYiA9PiBjYih0aGlzLCBldmVudE5hbWUsIHZhbHVlKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRvbihldmVudE5hbWU6IHN0cmluZywgY2I6IE5GX0NhbGxCYWNrKSA6IHRoaXMge1xuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcblx0XHRcdGxldCBhcnJheSA6IE5GX0NhbGxCYWNrW10gPSB0aGlzLmNiTGlzdC5nZXQoZXZlbnROYW1lKTtcblx0XHRcdGFycmF5LnB1c2goY2IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNiTGlzdC5zZXQoZXZlbnROYW1lLCBbY2JdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0b2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogTkZfQ2FsbEJhY2spIDogdGhpcyB7XG5cdFx0aWYoIHRoaXMuY2JMaXN0LmhhcyhldmVudE5hbWUpICkge1xuXHRcdFx0bGV0IGFycmF5ID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XG5cdFx0XHRhcnJheS5zcGxpY2UoIGFycmF5LmluZGV4T2YoY2IpLCAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRDaG9zZSA9IHtcblx0ZmFpdD9cdDogYm9vbGVhbixcblx0dGV4dGU/XHQ6IHN0cmluZ1xufTtcbmV4cG9ydCB0eXBlIE5GX0Nob3NlX0NhbGxCYWNrID0gKG5mOiBDaG9zZSwgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBFdmVudENob3NlKSA9PiB2b2lkO1xuZXhwb3J0IGNsYXNzIENob3NlIGV4dGVuZHMgTkYge1xuXHRyZWFkb25seSBsaXN0ZVx0XHQ6IExpc3RlQ2hvc2VzO1xuXHRyZWFkb25seSBkYXRlIFx0XHQ6IERhdGU7XG5cdHRleHRlXHRcdFx0XHQ6IHN0cmluZztcblx0ZmFpdCBcdFx0XHRcdDogYm9vbGVhbjtcblx0Y29uc3RydWN0b3JcdCh0ZXh0ZTogc3RyaW5nLCBsaXN0ZTogTGlzdGVDaG9zZXMsIGZhaXQ6IGJvb2xlYW4gPSBmYWxzZSwgZGF0ZTogRGF0ZSA9IG51bGwpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGV4dGUgID0gdGV4dGU7XG5cdFx0dGhpcy5kYXRlXHQ9IGRhdGUgfHwgbmV3IERhdGUoIERhdGUubm93KCkgKTtcblx0XHR0aGlzLmZhaXRcdD0gZmFpdCB8fCBmYWxzZTtcblx0XHR0aGlzLmxpc3RlXHQ9IGxpc3RlO1xuXHR9XG5cdGRpc3Bvc2VcdFx0KCkge1xuXHRcdHRoaXMubGlzdGUuUmV0aXJlcih0aGlzKTtcblx0fVxuXHRUZXh0ZSh0ZXh0ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy50ZXh0ZSA9IHRleHRlO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7dGV4dGU6IHRleHRlfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0RmFpdChmYWl0OiBib29sZWFuKSB7XG5cdFx0dGhpcy5mYWl0ID0gZmFpdDtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge2ZhaXQ6IGZhaXR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRvbihldmVudE5hbWU6IFwidXBkYXRlXCIsIGNiOiBORl9DaG9zZV9DYWxsQmFjaykgOiB0aGlzIHtcblx0XHRyZXR1cm4gc3VwZXIub24oZXZlbnROYW1lLCBjYik7XG5cdH1cblx0b2ZmKGV2ZW50TmFtZTogXCJ1cGRhdGVcIiwgY2I6IE5GX0Nob3NlX0NhbGxCYWNrKSA6IHRoaXMge1xuXHRcdHJldHVybiBzdXBlci5vZmYoZXZlbnROYW1lLCBjYik7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZUNob3NlcyA9IHthcHBlbmQ/OiBDaG9zZSwgcmVtb3ZlPzpDaG9zZX07XG5leHBvcnQgdHlwZSBORl9MaXN0ZUNob3NlX0NhbGxCYWNrID0gKG5mOiBMaXN0ZUNob3NlcywgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBFdmVudExpc3RlQ2hvc2VzKSA9PiB2b2lkO1xuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzIGV4dGVuZHMgTkYge1xuXHRjaG9zZXMgXHQ6IENob3NlW107XG5cdGNvbnN0cnVjdG9yXHQoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNob3NlcyA9IFtdO1xuXHR9XG5cdEFqb3V0ZXJcdFx0KHRleHRlOiBzdHJpbmcsIGZhaXQ6IGJvb2xlYW4gPSBmYWxzZSwgZGF0ZTogRGF0ZSA9IG51bGwpIDogdGhpcyB7XG5cdFx0bGV0IGNob3NlID0gbmV3IENob3NlKHRleHRlLCB0aGlzLCBmYWl0LCBkYXRlKTtcblx0XHR0aGlzLmNob3Nlcy5wdXNoKCBjaG9zZSApO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7YXBwZW5kOiBjaG9zZX0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFJldGlyZXJcdFx0KGNob3NlOiBDaG9zZSkgOiB0aGlzIHtcblx0XHR0aGlzLmNob3Nlcy5zcGxpY2UoIHRoaXMuY2hvc2VzLmluZGV4T2YoY2hvc2UpLCAxICk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHtyZW1vdmU6IGNob3NlfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0b24oZXZlbnROYW1lOiBcInVwZGF0ZVwiLCBjYjogTkZfTGlzdGVDaG9zZV9DYWxsQmFjaykgOiB0aGlzIHtcblx0XHRyZXR1cm4gc3VwZXIub24oZXZlbnROYW1lLCBjYik7XG5cdH1cblx0b2ZmKGV2ZW50TmFtZTogXCJ1cGRhdGVcIiwgY2I6IE5GX0xpc3RlQ2hvc2VfQ2FsbEJhY2spIDogdGhpcyB7XG5cdFx0cmV0dXJuIHN1cGVyLm9mZihldmVudE5hbWUsIGNiKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
