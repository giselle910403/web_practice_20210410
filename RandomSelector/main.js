window.onload = function() {
    $(function() {
        $("input").on("click", function() {
            //alert("Hi");
            //$("h1").text("Hello"); //改h1的值
            var numberOfListItem = $("li").length;
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            $("h1").text($("li").eq(randomChildNumber).text());
            var boxImg = document.getElementById("boxpic");
            //setImage(boxImg, randomChildNumber);
            boxImg.setAttribute("src", String(randomChildNumber) + ".jpg");
        });
    });

    /*function setImage(boxImg, num) {
        boxImg.setAttribute("src", num + ".jpg");
    }*/
};