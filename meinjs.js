var move = 1;
var play = true;

$('table tr td').click(function(){
    if ($(this).text()=="" && play){
        if ((move%2)==1){
            $(this).append("X");
            $(this).css('color', '#61892f');
        }
        else{
            $(this).append("O");
            $(this).css('color', '#85a4f');
        }
        move++;
        if (spielen() != -1 && spielen() != ""){
            if(spielen()=="X"){
                $('#winner').html("der Spieler 1 gewinnt");
            }else if(spielen()=="O"){
                $('#winner').html("der Spieler 2 gewinnt");
            }
            else{
                $('#winner').html ("keiner gewinnt");
            }
        }
    }
});

function spielen(){
    spielfeld1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    spielfeld2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    spielfeld3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    spielfeld4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    spielfeld5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    spielfeld6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    spielfeld7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    spielfeld8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    spielfeld9 = $('table tr:nth-child(3) td:nth-child(3)').text();


    if (spielfeld1 == spielfeld2 &&  spielfeld2 == spielfeld3){
        return spielfeld3;
    }
    else if (spielfeld4 == spielfeld5 &&  spielfeld5 == spielfeld6){
        return spielfeld6;
    }
    else if (spielfeld7 == spielfeld8 &&  spielfeld8 == spielfeld9){
        return spielfeld9;
    }
    else if (spielfeld1 == spielfeld4 &&  spielfeld4 == spielfeld7){
        return spielfeld7;
    }
    else if (spielfeld2 == spielfeld5 &&  spielfeld5 == spielfeld8){
        return spielfeld8;
    }
    else if (spielfeld3 == spielfeld6 &&  spielfeld6 == spielfeld9){
        return spielfeld9;
    }
    else if (spielfeld1 == spielfeld5 &&  spielfeld5 == spielfeld9){
        return spielfeld9;
    }
    else if (spielfeld3 == spielfeld5 &&  spielfeld5 == spielfeld7){
        return spielfeld7;
    }
    else{
        return -1;
    }
  

    
}