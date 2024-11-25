sessionStorage.setItem("dlgNum", "0");

function creatureTalk() {
    let talkNum = sessionStorage.getItem("dlgNum");
    switch(talkNum) {
        case "0":
            modfiyContent("message", "sorry")
            break;
        case "1":
            modfiyContent("message", "My apologies if I frightend you")
            break;
        case "2":
            modfiyContent("message", "I don't get many visitors down here and those I do get tend to not last long")
            break;
        case "3":
            modfiyContent("message", "As you can see you have entered the <p id=\"m2\">\"The Deep End\"<\p> ")
            break;
        case "4":
            modfiyContent("message", "And it is in your best interest that you leave as soon as you can")
            break;
        case "5":
            modfiyContent("message", "Why?")
            break;
        case "6":
            modfiyContent("message", "Perhaps I should elaborate on the nature of this place")
            break;
    }
    talkNum++;
    sessionStorage.setItem("dlgNum", talkNum);
}