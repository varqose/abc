// przyciski
var facebook = document.getElementsByName("facebook")[0];
var messenger = document.getElementsByName("messenger")[0];

// muzyczka
var fsound = new Audio('./js/fsound.mp3');
var msound = new Audio('./js/msound.mp3');

// czas
function czasTeraz(){
    var czas = new Date();
    var czasString = ((czas.getHours() < 10)?"0":"") + czas.getHours() +":"+ ((czas.getMinutes() < 10)?"0":"") + czas.getMinutes() +":"+ ((czas.getSeconds() < 10)?"0":"") + czas.getSeconds();
    return czasString;
}

function losowyCzas() {
    var czas = parseInt((Math.random() * 60) + 1) * 1000;
    return czas;
}

function playingFacebook(){
    //console.log("facebook = "+facebook.checked+" messenger = "+messenger.checked);
    if(facebook.checked){
        fsound.play();
        console.log("--facebook *ding*--"+"    "+czasTeraz());
        setTimeout(playingFacebook, losowyCzas());
    } else {
        console.log("koniec grania facebook");
    }
}

function playingMessenger(){
    if(messenger.checked){
        //msound.play();
        console.log("--messenger *ding*--"+"    "+czasTeraz());
        setTimeout(playingMessenger, losowyCzas());
    } else {
        console.log("koniec grania messenger");
    }
}

facebook.addEventListener('change', playingFacebook, false);
messenger.addEventListener('change', playingMessenger, false);
