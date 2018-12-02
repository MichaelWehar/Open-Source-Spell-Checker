// Created by Michael Wehar
var max_num_of_items = 5;
var lower_thresh = 0.7;
var buffered_word = "";
var rLock = -1;
var rList = [];

function wordTyped(){
    var new_word = document.getElementById("lookupText").value.toLowerCase();
    if(new_word.length >= 2 && new_word != buffered_word){
        buffered_word = new_word;
        if(rLock < 1){
            rLock = 1;
            setTimeout(function(){ makeRecommendation(new_word); }, 180);
        }
    }
}

function makeRecommendation(new_word){
    if(rLock == 1){
        rLock = 0;
        if(buffered_word == new_word){
            rLock = -1;
            rList = find_similar(new_word, lower_thresh)[0];
            displayRecommendation(new_word);
        }
        else{
            buffered_word = "";
            wordTyped();
        }
    }
}

function displayRecommendation(new_word){
    if(rList.length > 0){
        var num = Math.random();
        var dots;
        if(num <= 0.25) dots = ".";
        else if(num <= 0.5) dots = "..";
        else if(num <= 0.75) dots = "...";
        else dots = "....";
        
        var code_out = "<p class='lead' style='color: #777777;'>" + dots + "Recommended Words" + dots + "</p><span class='list-group' style='max-width: 250px; display: block; box-shadow: 2px 2px 5px #EEE;'>";
        
        for(var i = 0; i < rList.length && i < max_num_of_items; i++){
            if(i == 0 && rList[0].toLowerCase() == new_word){
                code_out += "<a href='#' class='list-group-item list-group-item-success'>"
                         + rList[i] + "</a>";
            }
            else code_out += "<a href='#' class='list-group-item'>" + rList[i] + "</a>";
        }
        code_out += "</span>";
        
        document.getElementById("results").innerHTML = code_out;
    }
}
