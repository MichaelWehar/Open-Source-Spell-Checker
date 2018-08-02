// Created by Michael Wehar
var valid_word_list;

function set_valid_word_list(word_list){
    valid_word_list = word_list;
}

function find_similar(word, score_thresh){
    var max_size = 10;
    var top_words = [];
    var top_scores = [];

    for(var i = 0; i < valid_word_list.length; i++){
        // compute score
        var element = valid_word_list[i];
        var temp_score = score(word, element);
        
        if(score_thresh < temp_score){
            // check if it is a top score
            var index = getListIndex(top_scores, temp_score);
            if(index < max_size){
                top_words.splice(index, 0, element);
                top_scores.splice(index, 0, temp_score);
                
                if(top_words.length > max_size){
                    top_words.pop();
                    top_scores.pop();
                }
            }
        }
    }
    
    return [top_words, top_scores];
}

function getListIndex(scores, x){
    for(var i = 0; i < scores.length; i++){
        if(x > scores[i]) return i;
    }
    return scores.length;
}

function score(x, y){
    var length_weight = 0.3;
    var match_weight = 0.5;
    var shift_weight = 0.2;
    
    return length_weight * length_score(x,y) + match_weight * match_score(x,y)
                                             + shift_weight * shift_score(x,y);
}

function length_score(x, y){
    var diff = Math.abs(x.length - y.length);
    return Math.max(1.0 - diff / 4, 0);
}

function match_score(x, y){
    var length = Math.min(x.length, y.length);
    if(length <= 0) return 0.0; 
    
    var total = 0;
    for(var i = 0; i < length; i++){
        if(x.charAt(i) == y.charAt(i)) total++;
    }
    
    var diff = length - total;
    return Math.max(1.0 - diff / 5, 0);
}

function shift_score(x, y){
    var l2 = match_score(x.substring(2), y);
    var l1 = match_score(x.substring(1), y);
    var c = match_score(x, y);
    var r1 = match_score(x, y.substring(1));
    var r2 = match_score(x, y.substring(2));
    
    return Math.max(l2, l1, c, r1, r2);
}
