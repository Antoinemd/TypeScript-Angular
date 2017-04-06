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

export let miniJQ = ( selecteur: string | HTMLElement | HTMLElement[] ) : MiniJQData => {
    let elements : HTMLElement[] = [];
    if (selecteur.constructor === String) {
        elements = Array.from(document.querySelectorAll(selecteur as string)) as HTMLElement[];
        console.log( selecteur, "is a string =>", elements );
    }
    if (selecteur instanceof HTMLElement) {
        console.log( selecteur, "is a HTMLElement" );
        elements = [selecteur];
    }
    if (selecteur instanceof Array) {
        console.log( selecteur, "is an array of HTMLElements" );
        elements = selecteur;
    }
    return new MiniJQData( elements ); // A modifier bien sur...
};

type FCT_APPEND = (index:number, html:string) => string | HTMLElement;

class MiniJQData {
    private elements : HTMLElement[];

    constructor( elements: HTMLElement[] ) {
        this.elements = elements;
    }

    each(fct : (index : number, element : HTMLElement) => any) : this {
        this.elements.forEach((e, i) => fct(i, e));
        return this;
    }

    text(str?: string): string | this {
        if(str === undefined) {
            return this.elements.reduce((acc, domElements) => acc + domElements.textContent, "");
        } else {
            return this.each((i, e) => e.textContent = str);
        }
    }

     html(str?: string) : string | this {
        if(str === undefined) {
            return this.elements.reduce((acc, domElements) => acc + domElements.innerHTML, "");
        } else {
            return this.each((i, e) => e.innerHTML = str);
        }
    }

    click(handler? : (event : MouseEvent) => any) : this {
        if(handler === undefined) {
            return this.trigger("click");
        } else {
            return this.each((i, e) => e.addEventListener("click", handler, false));
        }
    }
    
    // .. implémenter trigger, avec un return this;
    trigger(eventName : string) : this{
        //TODO
        return this;
    }

    append(content : string | HTMLElement | FCT_APPEND) : this | HTMLElement[]  {

        if(content instanceof HTMLElement) {
            return this.each( (i,e) => e.appendChild(content.cloneNode(true) ));
        }

        if(typeof content === "string") {
            // Cette fonction peut marcher si le contenu à rajouter et dans une balise: div,span,etc..
            // Sinon, il faut créer une balise personnalisée => voir plus bas
            // return this.each((i,e) => e.innerHTML += content);
            
            return this.each((i,e) => {
                let divTmp = document.createElement("div");
                divTmp.innerHTML = content;
                Array.from(divTmp.childNodes).forEach(n => e.appendChild(n)); // transformer en tableau ou faire une boucle
            });
        }

        if(typeof content === "function") {
            let F = content;
            return this.each((i,e) => {
                miniJQ(e).append(F(i,e.innerHTML));
            });
        }
    }

    




}

/***********************************************************************************************************************
 * Q2) Ecrivez la fonction miniJQ :
 *   - argument : un sélecteur CSS ou un Element du DOM
 *   - renvoi une instance de la classe MiniJQData
 */


/***********************************************************************************************************************
 * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
 *  Par exemple des méthodes issues de JQueryUI
 */
