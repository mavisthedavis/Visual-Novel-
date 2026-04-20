

function imageChange() {  
    transCheck(); 
    if (imgList[textIndex].effect != false) { 
      console.log("test"); 
    } 
    $($("img")[0]).attr("src", imgList[textIndex].src); 
}  

function transCheck() {   
    if (textIndex == 7) {  
        //music comes in here
        $("#text-container").css("background-color", "blue");
        $("#text-box").css("background-color", "blue");   
        $(".ext").css("background-color", "blue");  
        $("#view").css("background-color", "white");  
        $("#text").css("color", "white"); 
    } 
    if (textIndex == 39) { 
        $("#text-container").css("background-color", "grey");
        $("#text-box").css("background-color", "black");   
        $(".ext").css("background-color", "grey");  
        $("#view").css("background-color", "light-prey");  
        $("#text").css("color", "white"); 
    } 
    if (textIndex == 58) { 
        $("#text-container").css("background-color", "green");
        $("#text-box").css("background-color", "green");   
        $(".ext").css("background-color", "green");  
        $("#view").css("background-color", "white");  
        $("#text").css("color", "white"); 
    } 
    if (textIndex == 108) { 
        $("#text-container").css("background-color", "black");
        $("#text-box").css("background-color", "black");   
        $(".ext").css("background-color", "black");  
        $("#view").css("background-color", "black");  
        $("#text").css("color", "white"); 
    }

}
