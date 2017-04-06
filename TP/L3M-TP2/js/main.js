System.register(["./miniJQ"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var miniJQ_1;
    return {
        setters: [
            function (miniJQ_1_1) {
                miniJQ_1 = miniJQ_1_1;
            }
        ],
        execute: function () {
            miniJQ_1.miniJQ("p");
            // $( "div");
            // $( "p").text ($("coucou").text() as string);
            miniJQ_1.miniJQ("div p").text("coucou");
            miniJQ_1.miniJQ("section").html("<h1> Yop !! </h1> <p> Paragraphe </p>");
            miniJQ_1.miniJQ(document.body);
            miniJQ_1.miniJQ([document.body]);
        }
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFHQSxlQUFDLENBQUUsR0FBRyxDQUFFLENBQUM7WUFDVCxhQUFhO1lBQ2IsK0NBQStDO1lBQy9DLGVBQUMsQ0FBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUIsZUFBQyxDQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBRSx1Q0FBdUMsQ0FBQyxDQUFDO1lBQzdELGVBQUMsQ0FBRSxRQUFRLENBQUMsSUFBSSxDQUFFLENBQUM7WUFDbkIsZUFBQyxDQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7UUFHckIsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWluaUpRIGFzICR9IGZyb20gXCIuL21pbmlKUVwiO1xuXG5cbiQoIFwicFwiICk7XG4vLyAkKCBcImRpdlwiKTtcbi8vICQoIFwicFwiKS50ZXh0ICgkKFwiY291Y291XCIpLnRleHQoKSBhcyBzdHJpbmcpO1xuJCggXCJkaXYgcFwiKS50ZXh0IChcImNvdWNvdVwiKTtcbiQoIFwic2VjdGlvblwiKS5odG1sIChcIjxoMT4gWW9wICEhIDwvaDE+IDxwPiBQYXJhZ3JhcGhlIDwvcD5cIik7XG4kKCBkb2N1bWVudC5ib2R5ICk7XG4kKCBbZG9jdW1lbnQuYm9keV0gKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9
