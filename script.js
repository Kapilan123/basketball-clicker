
var e = 0;
var upg = 0;
var upg2 = 0;
var upg3 = 0;
var upg4 = 0;
var upg5 = 0;
var upg6 = 0;
var upg7 = 0;
var upg8 = 0;
var upg9 = 0;
var upg10 = 0;
var upg11 = 0;
var upg12 = 0;
var clickval = 0;
var clickval1 = 0;
var clickval3 = 0;
var clickval4 = 0;
var clickval6 = 0;
var clickval7 = 0;
var clickval8 = 0;
var clickval9 = 0;
var clickval10 = 0;
var clickval11 = 0;
var clickval12 = 0;
var speed = 1010;
var cost = 5;
var cost2 = 20;
var cost3 = 50;
var cost4 = 10;
var cost5 = 100;
var cost6 = 250;
var cost7 = 500;
var cost8 = 1000;
var cost9 = 2000;
var cost10 = 5000;
var cost11 = 10000;
var cost12 = 50000;
var proupg1 = 0;



var buttonvalue = 100000;
var hide = document.getElementById("hiddentest");
var cst2 = document.getElementById("cost2");
var proupg2 = document.getElementById("proupg2");
var proupg1 = document.getElementById("proupg1");
var up = document.getElementById("ultra");
var hide2 = document.getElementById("hide2");
var cst3 = document.getElementById("cost3");
var omgc = document.getElementById("omega");
var cst4 = document.getElementById("cost4");
var up4 = document.getElementById("buttonupgrade");
var hide3 = document.getElementById("hide3");
var hype = document.getElementById("hype");
var cst5 = document.getElementById("cost5");
/*------------------------------------------------*/
var hide4 = document.getElementById("hide4");
var nukee = document.getElementById("nukee");
var cst6 = document.getElementById("cost6");

var cst7 = document.getElementById("cost7");
var hide7 = document.getElementById("hide7");
var house = document.getElementById("house");

var cst8 = document.getElementById("cost8");
var hide8 = document.getElementById("hide8");
var aau = document.getElementById("aau");

var cst9 = document.getElementById("cost9");
var hide9 = document.getElementById("hide9");
var trainer = document.getElementById("trainer");

var cst10 = document.getElementById("cost10");
var hide10 = document.getElementById("hide10");
var d1 = document.getElementById("d1");

var cst11 = document.getElementById("cost11");
var hide11 = document.getElementById("hide11");
var manager = document.getElementById("manager");

var cst12 = document.getElementById("cost12");
var hide12 = document.getElementById("hide12");
var nba = document.getElementById("nba");

var nukc = document.getElementById("prog1");



var upgbuy2 = false;
var check = false;
var check1 = false;
var check3 = false;
var check4 = false;
var check6 = false;
var check7 = false;
var check8 = false;
var check9 = false;
var check10 = false;
var check11 = false;
var check12 = false;
var upgbuy3 = false;
var upgbuy4 = false;
var upgbuy6 = false;
var upgbuy7 = false;
var upgbuy8 = false;
var upgbuy9 = false;
var upgbuy10 = false;
var upgbuy11 = false;
var upgbuy12 = false;
var upgbuy = false;
var hiddenoof = false;
var mtl = "CLICK MORE, You Do Not Have Enough BASKETBALLS To Buy: ";
//if (e >= 10) {
    //if (hide.style.visibility === 'visible') {
     //   hide.style.visibility = 'hidden';
  //  } 
//}

/*setInterval(checks, 1);

function checks() {
    //checks for e >= than hidden reqiurnments
}*/

function codeinput() {
    avariable = prompt("Password?");
    if (avariable === "Dart") {
        inpt2 = prompt("how many clicks?");
        e += parseInt(inpt2);
        updac();
    }
}

hide2.style.visibility = 'hidden';
hide3.style.visibility = 'hidden';
hide4.style.visibility = 'hidden';
hide7.style.visibility = 'hidden';
hide8.style.visibility = 'hidden';
hide9.style.visibility = 'hidden';
hide10.style.visibility = 'hidden';
hide11.style.visibility = 'hidden';
hide12.style.visibility = 'hidden';

function click() {
    e = e + clickval1;
    updac();
}
function click1() {
    e = e + clickval;
    updac();
}
function click3() {
    e = e + clickval3;
    updac();
}
function click4() {
    e += clickval4;
    updac();
}
function click6() {
    e += clickval6;
    updac();
}
function click7() {
    e += clickval7;
    updac();
}
function click8() {
    e += clickval8;
    updac();
}
function click9() {
    e += clickval9;
    updac();
}
function click10() {
    e += clickval10;
    updac();
}
function click11() {
    e += clickval11;
    updac();
}
function click12() {
    e += clickval12;
    updac();
}
hide.style.visibility = 'hidden';


function myfunction() {
    e = e + buttonvalue;
    document.getElementById("var").innerHTML = "clicks: " + e;
    if (e >= 20) {
       hide.style.visibility = 'visible';
    }
    if (e >= 50) {
        hide2.style.visibility = 'visible';
    }
    
    if (e >= 100) {
        hide3.style.visibility = 'visible';
    }

    if (e >= 250) {
        hide4.style.visibility = 'visible';
    }
    if (e >= 500) {
        hide7.style.visibility = 'visible';
    }
    if (e >= 1000) {
        hide8.style.visibility = 'visible';
    }
      if (e >= 2000) {
        hide9.style.visibility = 'visible';
    }
      if (e >= 5000) {
        hide10.style.visibility = 'visible';
    }
        if (e >= 10000) {
        hide11.style.visibility = 'visible';
    }
        if (e >= 50000) {
        hide12.style.visibility = 'visible';
    }
       
    
}

function updac() {
    document.getElementById("var").innerHTML = "clicks: " + e;
}

function buyupgrade() {
    if (e >= cost) {
        upg = upg + 1;
        e = e - cost;
        cost = cost + 1;
        upgbuy = true;
        clickval = clickval + 1;
        document.getElementById("upgrade").innerHTML = " BASKETBALLS: " + upg;
        document.getElementById("cost").innerHTML = "COST: " + cost;
        document.getElementById("proupg1").innerHTML = "9%" 
        proupg1.style.cssText = "font-size: 90px;";
        
    
       

       

        updac();
        
        if (check1 === false) {
            if (upgbuy === true) {
                setInterval(click1, 9500000);
                check1 = true;
                
            }
        }
            
        
    } else {
        alert(mtl+"\"BASKETBALLS\"!");
    }
}


function buyupgrade1() {
    if (e >= cost2) {
        upg2 = upg2 + 1
        proupg2 = 5
        e = e - cost2;
        cost2 = cost2 + 5;
        clickval1 = clickval1 + 5;
        upgbuy2 = true;
        cst2.innerHTML = "COST: " + cost2;
        up.innerHTML = "BASKETBALL NET: " + upg2;
              document.getElementById("proupg1").innerHTML = "27%" 
        
        updac();
        if (check === false) {
            if (upgbuy2 === true) {
                
                setInterval(click, 9500000);
                check = true;
            }
        }
    } else {
        alert(mtl+"\"BASKETBALL NET\"!");
    }
}

function buyupgrade3() {
    if (e >= cost3) {
        upg3 = upg3 + 1;
        e = e - cost3;
        cost3 = cost3 + 10;
        clickval3 = clickval3 + 10;
        upgbuy3 = true;
        cst3.innerHTML = "COST: " + cost3;
        omgc.innerHTML = "WATER BOTTLE: " + upg3;
        document.getElementById("proupg1").innerHTML = "36%" 
        updac();
        if (check3 === false) {
            if (upgbuy3 === true) {
                setInterval(click3, 95000000);
                check3 = true;
            }
        }
    } else {
        alert(mtl + "\"WATER BOTTLE\"!")
    }
}

function upgradeclick() {
    if (e >= cost4) {
        e = e - cost4;
        upg4 = upg4 + 1;
        buttonvalue = buttonvalue + 2;
        cost4 = cost4 + 2;
        updac();
        up4.innerHTML = "BASKETBALL SHOES: " + upg4;
        cst4.innerHTML = "COST: " + cost4;
        document.getElementById("proupg1").innerHTML = "18%" 
    } else {
        alert(mtl + "\"BASKETBALL SHOES\"!");
    }
}

function buyupgrade4() {
    if (e >= cost5) {
        e -= cost5;
        upg5 += 1;
        cost5 += 20;
        upgbuy4 = true;
        clickval4 += 20;
        hype.innerText = "PEE WEE LEAGUE CONTRACT: "+ upg5;
        cst5.innerText = "COST: " + cost5;
       document.getElementById("proupg1").innerHTML = "45%" 
        updac();
        if (check4 === false) {
            if (upgbuy4 === true) {
                setInterval(click4, 95000000);
                check4 = true;
            }
        }
        
        
    } else {
        alert(mtl + "\"PEE WEE LEAGUE CONTRACT\"!");
    }
}

function buynukee() {
    if (e >= cost6) {
        e -= cost6;
        upg6 += 1;
        cost6 += 50;
        upgbuy6 = true;
        clickval6 += 50;
        nukee.innerText = "TRAINING EQUIPMENT: "+ upg6;
        cst6.innerText = "COST: " + cost6;
       document.getElementById("proupg1").innerHTML = "52%" 
        updac();
        if (check6 === false) {
            if (upgbuy6 === true) {
                setInterval(click6, 9500000);
                check6 = true;
            }
        }
    } else {
        alert(mtl + "\"TRAINING EQUIPMENT\"!");
    }
}


function buyhou() {
    if (e >= cost7) {
        e -= cost7;
        upg7 += 1;
        cost7 += 100;
        upgbuy7 = true;
        clickval7 += 100;
        house.innerText = "HOUSE LEAGUE CONTRACT: " + upg7;
        cst7.innerText = "COST: " + cost7;
        document.getElementById("proupg1").innerHTML = "60%" 

      
        updac();
        if (check7 === false) {
            if (upgbuy7 === true) {
                setInterval(click7, 9500000);
                check7 = true;
            }
        }
    } else {
        alert(mtl + "\"HOUSE LEAGUE CONTRACT\"!")
    }
}

function buyaau() {
    if (e >= cost8) {
        e -= cost8;
        upg8 += 1;
        cost8 += 250;
        upgbuy8 = true;
        clickval8 += 250;
        aau.innerText = "AAU CONTRACT: " + upg8;
        cst8.innerText = "COST: " + cost8;
        document.getElementById("proupg1").innerHTML = "72%" 
        updac();
        if (check8 === false) {
            if (upgbuy8 === true) {
                setInterval(click8, 950000);
                check8 = true;
            }
        }
    } else {
        alert(mtl + "\"AAU CONTRACT\"!")
    }
}

function buytrainer() {
    if (e >= cost9) {
        e -= cost9;
        upg9 += 1;
        cost9 += 500;
        upgbuy9 = true;
        clickval9 += 500;
        trainer.innerText = "PERSONAL TRAINER: " + upg9;
        cst9.innerText = "COST: " + cost9;
        document.getElementById("proupg1").innerHTML = "81%" 
        updac();
        if (check9 === false) {
            if (upgbuy9 === true) {
                setInterval(click9, 950000);
                check9 = true;
            }
        }
    } else {
        alert(mtl + "\"PERSONAL TRAINER\"!")
    }
}

function buyd1() {
    if (e >= cost10) {
        e -= cost10;
        upg10 += 1;
        cost10 += 1000;
        upgbuy10 = true;
        clickval10 += 1000;
        d1.innerText = "D1 CONTRACT: " + upg10;
        cst10.innerText = "COST: " + cost10;
        document.getElementById("proupg1").innerHTML = "90%" 
        updac();
        if (check10 === false) {
            if (upgbuy10 === true) {
                setInterval(click10, 95000);
                check10 = true;
            }
        }
    } else {
        alert(mtl + "\"D1 CONTRACT \"!")
    }
}

function buymanager() {
    if (e >= cost11) {
        e -= cost11;
        upg11 += 1;
        cost11 += 2000;
        upgbuy11 = true;
        clickval11 += 2000;
        manager.innerText = "PRO MANAGER: " + upg11;
        cst11.innerText = "COST: " + cost11;
        document.getElementById("proupg1").innerHTML = "98%" 
        updac();
        if (check11 === false) {
            if (upgbuy11 === true) {
                setInterval(click11, 95000);
                check11 = true;
            }
        }
    } else {
        alert(mtl + "\"PRO MANAGER\"!")
    }
}

function buynba() {
    if (e >= cost12) {
        e -= cost12;
        upg12 += 1;
        cost12 += 5000;
        upgbuy12 = true;
        clickval12 += 5000;
        nba.innerText = "NBA DRAFT: " + upg12;
        cst12.innerText = "COST: " + cost12;
        updac();
        if (check12 === false) {
            if (upgbuy12 === true) {
                setInterval(click12, 950);
                check12 = true;
            }
        }
    } else {
        alert(mtl + "\"NBA DRAFT \"!")
    }
}



