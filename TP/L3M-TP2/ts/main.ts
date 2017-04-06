import { miniJQ as $} from "./miniJQ";


$( "p" );
$( "div");
$( "p").text ($("coucou").text() as string);
$( "div p").text ("coucou");
$( "section").html ("<h1> Yop !! </h1> <p> Paragraphe </p>");
$( document.body );
$( [document.body] );
$("ul > li").append((i, e) => `item n° ${i}`);


