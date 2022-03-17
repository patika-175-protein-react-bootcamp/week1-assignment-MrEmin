function nameEnter(){
    let name = prompt("İsminizi giriniz: ");
    document.getElementById("myName").innerHTML = name;
}

function dateFind(){
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let dayW = date.getDay();
    let day;

    switch(dayW){
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
        default:
            day = "Geçersiz Bilgi Girdiniz."
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    let time = `${hours}:${minute}:${second} ${day}`;
    document.getElementById("myClock").innerHTML = time;
    setTimeout(dateFind,1000);
}

nameEnter();
dateFind();
