document.onload = () => console.log( "Le document est prêt" );
let PromesseDocumentPret = new Promise( (resolve) => {
    if(document.readyState === "complete") {
        resolve();
    } else {
        document.onreadystatechange = () => document.readyState==="complete"?resolve():null;
    }
});
/***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
function min(a: number, b: number) : number {
    return (a<b?a:b);
}
LogTests("Fonction qui renvoie le minimum de deux nombres", min, [
    {args: [17, 27], expectedResult: 17},
    {args: [17, 15], expectedResult: 15},
]);

/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre croissant
 */
function triCroissant(...L : number[]) : number[] {
    return L.sort(function(a, b) {return a-b;});
}
LogTests("Fonction qui trie des nombres par ordre croissant", triCroissant, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: [-38, -21, -6, 16, 44, 51, 59, 63, 64, 95]},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: [-98, -60, -52, -40, -23, -12, -4, 23, 29, 40]},
    {args: [], expectedResult: []}
]);

/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre décroissant
 */
function triDécroissant(...L : number[]) : number[] {
    return L.sort(function(a, b) {return b-a;});
}
LogTests("Fonction qui trie des nombres par ordre décroissant", triDécroissant, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: [95, 64, 63, 59, 51, 44, 16, -6, -21, -38]},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: [40, 29, 23, -4, -12, -23, -40, -52, -60, -98]},
    {args: [10], expectedResult: [10]},
    {args: [], expectedResult: []}
]);

/***********************************************************************************************************************
 * Fonction qui somme
 */
function Somme(...L : number[]) : number {
    try{
        return L.reduce(function(acc, v) {return acc + v;});
    } catch (e) {
        throw "Impossible de sommer un tableau vide";
    } 
}
LogTests("Fonction qui somme", Somme, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: 327},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: -197},
    {args: [10], expectedResult: 10},
    {args: [], expectedResult: "Impossible de sommer un tableau vide", errorExpected: true}
]);


/***********************************************************************************************************************
 * Fonction qui fait la moyenne
 */
function Moyenne(...L  : number[]) : number {
    try{
        return Somme(...L)/L.length;        
    } catch (e) {
        throw "Impossible de faire la moyenne d'un tableau vide";
    } 
}
LogTests("Fonction qui fait la moyenne", Moyenne, [
    {args: [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], expectedResult: 32.7},
    {args: [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], expectedResult: -19.7},
    {args: [10], expectedResult: 10},
    {args: [], expectedResult: "Impossible de faire la moyenne d'un tableau vide", errorExpected: true}
]);

/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
 * et triés par ordre croissant
 */
function NombresSupérieursA(min: number, notes : number[]) : number[] {
    return triCroissant(...notes.filter(function (n){return n>min}));
}
LogTests("Les nombres strictement supérieurs à un certain seuil", NombresSupérieursA, [
    {args: [10, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [16,44,51,59,63,64,95]},
    {args: [20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [44,51,59,63,64,95]},
    {args: [50, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [51,59,63,64,95]},
    {args: [50, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], expectedResult: []},
    {args: [10, []], expectedResult: []}
]);

/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement compris entre une valeur minimale et une valeur maximale
 * et triés par ordre croissant
 */
function NombresComprisEntre(min: number, max: number, notes : number[]) : number[] {
    return triCroissant(...notes.filter(function(n){return n> min && n< max}))
}
LogTests("Les nombres strictement compris entre une valeur minimale et maximale", NombresComprisEntre, [
    {args: [10, 20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [16]},
    {args: [0, 100, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], expectedResult: [16,44,51,59,63,64,95]},
    {args: [10, 20, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], expectedResult: []},
    {args: [10, 20, []], expectedResult: []}
]);


/***********************************************************************************************************************
 * Produit scalaire entre deux vecteurs
 */
function ProduitScalaire(V1: number[], V2: number[]) : number {
    if(V1.length === 0 || V2.length === 0) {
        throw "Les vecteurs doivent être non vides";
    }
    if(V1.length !== V2.length) {
        throw "Les vecteurs doivent être de même taille";
    }

    return V1.reduce((acc, v, i) => acc + v * V2[i], 0 );
    
    // let scalRes: number = 0;
    // for (var i = 0; i < V1.length; i++){
    //     scalRes += V1[i] * V2[i];
    // }
    // 
return scalRes;
    // return v1.reduce(function(acc, V2) {return /*trouver l'équivalent*/ ;});
}
LogTests("Produit scalaire entre deux vecteurs", ProduitScalaire, [
    {args: [[1, 1], [1, 1]], expectedResult: 2},
    {args: [[4, 1], [1, 3]], expectedResult: 7},
    {args: [[59, 51, 63, 95, 64, -38, -21, -6, 16, 44], [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]],
        expectedResult: -49},
    {args: [[], [5]], expectedResult: "Les vecteurs doivent être non vides", errorExpected: true},
    {args: [[5], []], expectedResult: "Les vecteurs doivent être non vides", errorExpected: true},
    {args: [[2, 3], [4]], expectedResult: "Les vecteurs doivent être de même taille", errorExpected: true}
]);


/***********************************************************************************************************************
 * Addition de matrices
 */
function AjoutMatrices(V1: number[][], V2: number[][]) : number[][] {
    if(V1.length === 0 || V2.length === 0 || V1[0].length === 0 || V2[0].length === 0) {
        throw "Les matrices doivent être non vides";
    }
    if(V1.length !== V2.length || V1[0].length !== V2[0].length){
        throw "Les matrices doivent être de même taille";
    }
   
    return V1.map((V, i) => V.map((nombre, j) => nombre + V2[i][j]));

    /*
    Soit m1 et m2
    (              (
    (1,4,3)        (3,1,6)
    (7,6,1)        (4,8,5)
    )              )

    //Execution de map(le 1er)
    Falpha([1,4,3],0)            //pour la premiere ligne
        //Execution du 2em map
        Fbeta(1,0) -> 1+3        // m2[0][0]
        Fbeta(4,1) -> 4+1        // m2[0][1]
        Fbeta(3,2) -> 3+6        // m2[0][2]
        // Cela  donne un nouveau vecteur [4,5,9]
    Fampha([7,6,1],1)            // pour la deuxième ligne
        Fbeta(7,0) -> 7+4        // m2[1][0]
        Fbeta(6,1) -> 6+8        // m2[1][1]
        Fbeta(1,2) -> 1+5        // m2[1][2]
        // Cela  donne un nouveau vecteur [11,14,6]
    */
        
}
LogTests("Addition de matrices", AjoutMatrices, [
    {args: [ [[1, 1], [1, 1]], [[1, 0], [0, 1]] ], expectedResult: [[2, 1], [1, 2]]},
    {args: [ [[1, 1], [1, 1]], [[1, 4], [0, 1]] ], expectedResult: [[2, 5], [1, 2]]},
    {args: [ [[1, 1], [1, 1], [1, 3]], [[1, -4], [0, 1], [65, -54]] ], expectedResult: [[2,-3],[1,2],[66,-51]]},
    {args: [ [[1, 1], [1, 1]], [] ], expectedResult: "Les matrices doivent être non vides", errorExpected: true},
    {args: [ [[1, 1], [1, 1]], [5] ], expectedResult: "Les matrices doivent être de même taille", errorExpected: true},
    {args: [ [5], [[1, 1], [1, 1]] ], expectedResult: "Les matrices doivent être de même taille", errorExpected: true},
    {args: [ [[1, 1], [1, 1]], [[], []] ], expectedResult: "Les matrices doivent être non vides", errorExpected: true},
    {args: [ [[], []], [[1, 1], [1, 1]] ], expectedResult: "Les matrices doivent être non vides", errorExpected: true},
    {args: [[], [[5]]], expectedResult: "Les matrices doivent être non vides", errorExpected: true}
]);


/***********************************************************************************************************************
 * Codez une classe Matrice implémentant l'ajout et la multiplication de matrices.
 */






















/***********************************************************************************************************************
 * Utilitaires
 */
function assertEqual<T>(a:T, b:T) : boolean {
    switch(typeof a) {
        case "object":
            return JSON.stringify(a) === JSON.stringify(b);
        default:
            return a === b;
    }
}

const template = `
<hr/>
<h2></h2>
<table>
    <caption></caption>
    <thead>
        <th>Inputs</th>
        <th>Output</th>
        <th>Expected output</th>
    </thead>
    <tbody></tbody>
</table>
`;

type Assertion = {args: any[], expectedResult: any, errorExpected? : boolean};
function LogTests(title: string, fct: (...A) => any, assertions : Assertion[]) : void {
    PromesseDocumentPret.then( () => LogTestsOK(title, fct, assertions) );
}
function LogTestsOK(title: string, fct: (...A) => any, assertions : Assertion[]) : void {
    let section = document.createElement( "section" ),
        nbCorrects = 0,
        exceptionTriggered : boolean;
    section.innerHTML = template;
    section.querySelector( "h2" ).textContent = title;
    let tbody = section.querySelector( "tbody" );
    for( let {args, expectedResult, errorExpected} of assertions ) {
        let tr  = document.createElement( "tr" );
        let res;
        try {
            res = fct.apply(null, args);
            exceptionTriggered = false;
        } catch(err) {
            res = err;
            exceptionTriggered = true;
        }
        let tdI = document.createElement( "td" ); tr.appendChild( tdI ); tdI.textContent = JSON.stringify( args );
        let tdO = document.createElement( "td" ); tr.appendChild( tdO ); tdO.textContent = JSON.stringify( res );
        let tdE = document.createElement( "td" ); tr.appendChild( tdE ); tdE.textContent = JSON.stringify( expectedResult );
        if( assertEqual(res, expectedResult) && (typeof errorExpected === "undefined" || exceptionTriggered === errorExpected) ) {
            tr.classList.add( "correct" );
            nbCorrects++;
        } else {
            tr.classList.add( "incorrect" );
        }
        tbody.appendChild( tr );
    }
    section.querySelector( "caption" ).textContent = `Recap: ${nbCorrects} / ${assertions.length}`;
    document.body.appendChild( section );
}
