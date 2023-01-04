
var e = 0;
var upg = 0;
var upg2 = 0;
var upg3 = 0;
var upg4 = 0;
var upg5 = 0;
var upg6 = 0;
var clickval = 0;
var clickval1 = 0;
var clickval3 = 0;
var clickval4 = 0;
var clickval6 = 0;
var speed = 1010;
var cost = 100;
var cost2 = 1000;
var cost3 = 10000;
var cost4 = 500;
var cost5 = 50000;
var cost6 = 100000;

var buttonvalue = 1;
var hide = document.getElementById("hiddentest");
var cst2 = document.getElementById("cost2");
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
var nukc = document.getElementById("nukee");
var cst6 = document.getElementById("cost6");
var upgbuy2 = false;
var check = false;
var check1 = false;
var check3 = false;
var check4 = false;
var check6 = false;
var upgbuy3 = false;
var upgbuy4 = false;
var upgbuy6 = false;
var upgbuy = false;
var hiddenoof = false;
var mtl = "Kapilan Here, You Do Not Have Enough Clicks To Buy: ";
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
hide.style.visibility = 'hidden';


function myfunction() {
    e = e + buttonvalue;
    document.getElementById("var").innerHTML = "clicks: " + e;
    if (e >= 1000) {
       hide.style.visibility = 'visible';
    }
    if (e >= 10000) {
        hide2.style.visibility = 'visible';
    }
    
    if (e >= 50000) {
        hide3.style.visibility = 'visible';
    }

    if (e >= 100000) {
        hide4.style.visibility = 'visible';
    }
       
       
    
}

function updac() {
    document.getElementById("var").innerHTML = "clicks: " + e;
}

function buyupgrade() {
    if (e >= cost) {
        upg = upg + 1;
        e = e - cost;
        cost = cost + 25;
        upgbuy = true;
        clickval = clickval + 10;
        document.getElementById("upgrade").innerHTML = " AUTO CLICKERS: " + upg;
        document.getElementById("cost").innerHTML = "COST: " + cost;
        updac();
        
        if (check1 === false) {
            if (upgbuy === true) {
                setInterval(click1, 20000);
                check1 = true;
                
            }
        }
            
        
    } else {
        alert(mtl+"\"AUTO CLICKER\"!");
    }
}

function buyupgrade1() {
    if (e >= cost2) {
        upg2 = upg2 + 1;
        e = e - cost2;
        cost2 = cost2 + 250;
        clickval1 = clickval1 + 1;
        upgbuy2 = true;
        cst2.innerHTML = "COST: " + cost2;
        up.innerHTML = "ULTRA CLICKERS: " + upg2;
        updac();
        if (check === false) {
            if (upgbuy2 === true) {
                
                setInterval(click, 10000);
                check = true;
            }
        }
    } else {
        alert(mtl+"\"ultra clicker\"!");
    }
}

function buyupgrade3() {
    if (e >= cost3) {
        upg3 = upg3 + 1;
        e = e - cost3;
        cost3 = cost3 + 1000;
        clickval3 = clickval3 + 10;
        upgbuy3 = true;
        cst3.innerHTML = "COST: " + cost3;
        omgc.innerHTML = "OMEGA CLICKERS: " + upg3;
        updac();
        if (check3 === false) {
            if (upgbuy3 === true) {
                setInterval(click3, 1000);
                check3 = true;
            }
        }
    } else {
        alert(mtl + "\"omega clicker\"!")
    }
}

function upgradeclick() {
    if (e >= cost4) {
        e = e - cost4;
        upg4 = upg4 + 1;
        buttonvalue = buttonvalue + 10;
        cost4 = cost4 + 100;
        updac();
        up4.innerHTML = "BUTTON UPGRADES: " + upg4;
        cst4.innerHTML = "COST: " + cost4;
    } else {
        alert(mtl + "\"BUTTON UPGRADE\"!");
    }
}

function buyupgrade4() {
    if (e >= cost5) {
        e -= cost5;
        upg5 += 1;
        cost5 += 5000;
        upgbuy4 = true;
        clickval4 += 10;
        hype.innerText = "HYPER CLICKERS: "+ upg5;
        cst5.innerText = "COST: " + cost5;
        updac();
        if (check4 === false) {
            if (upgbuy4 === true) {
                setInterval(click4, 100);
                check4 = true;
            }
        }
        
        
    } else {
        alert(mtl + "\"hyper clicker\"!");
    }
}

function buynuk() {
    if (e >= cost6) {
        e -= cost6;
        upg6 += 1;
        cost6 += 50000;
        upgbuy6 = true;
        clickval6 += 20;
        nukc.innerText = "NUCLEAR CLICKERS: " + upg6;
        cst6.innerText = "COST: " + cost6;
        updac();
        if (check6 === false) {
            if (upgbuy6 === true) {
                setInterval(click6, 0.3);
                check6 = true;
            }
        }
    } else {
        alert(mtl + "\"nuclear clicker\"!")
    }
}