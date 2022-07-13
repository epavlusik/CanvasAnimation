var cic = document.getElementById("myCanvas");
var ctx = cic.getContext("2d");
var counter = 0;  // zmenou countera mozem preskakovat levely
var levelhry = 0;

var scena1 = 1000; // noviny
var scena2 = 2000; // Neil
var scena3 = 3000  // Katakomba
var scena4 = 6000; // nahrobny kamen
var scena5 = 7000; // Grafit

var pohybnovin = 300;
var pohybneila = 500;
var pohybneilovhoplanu = -100;
var pohybkatakomby = 0;
var pohybnahrobneho = 600;
var endtitles = 800;
var morzi1 = 0;
var morzi2 = 0;
var morzi3 = 0;
var morzi4 = 0;
var rychlostnovin = 0.5;
var counterprexicht = 0;
var pridaneobrazky = 12;

var xicht1 = new Image();  // Noviny
xicht1.src = "Images/xicht1.png";

var xicht2 = new Image();  // Neilove nakresy
xicht2.src = "Images/xicht2.png";

var xicht3 = new Image();  // Neilova hlava zozadu
xicht3.src = "Images/xicht3.png";

var xicht4 = new Image();  // Katakomba
xicht4.src = "Images/xicht4.png";


var xicht50 = new Image();  // Nahrobny kamen uvod
xicht50.src = "Images/xicht50.png";
var xicht51 = new Image();
xicht51.src = "Images/xicht51.png";

var xicht100 = new Image();   // Vsetko tykajuce sa grafitu
xicht100.src = "Images/xicht100.png";
var xicht101 = new Image();
xicht101.src = "Images/xicht101.png";
var xicht102 = new Image();
xicht102.src = "Images/xicht102.png";
var xicht103 = new Image();
xicht103.src = "Images/xicht103.png";
var xicht104 = new Image();
xicht104.src = "Images/xicht104.png";
var xicht105 = new Image();
xicht105.src = "Images/xicht105.png";
var xicht106 = new Image();
xicht106.src = "Images/xicht106.png";
var xicht107 = new Image();
xicht107.src = "Images/xicht107.png";
var xicht108 = new Image();
xicht108.src = "Images/xicht108.png";
var xicht109 = new Image();
xicht109.src = "Images/xicht109.png";
var xicht110 = new Image();
xicht110.src = "Images/xicht110.png";
var xicht111 = new Image();
xicht111.src = "Images/xicht111.png";
var xicht112 = new Image();
xicht112.src = "Images/xicht112.png";
var xicht113 = new Image();
xicht113.src = "Images/xicht113.png";
var xicht114 = new Image();
xicht114.src = "Images/xicht114.png";
var xicht115 = new Image();
xicht115.src = "Images/xicht115.png";
var xicht116 = new Image();
xicht116.src = "Images/xicht116.png";
var xicht117 = new Image();
xicht117.src = "Images/xicht117.png";
var xicht118 = new Image();
xicht118.src = "Images/xicht118.png";
var xicht119 = new Image();
xicht119.src = "Images/xicht119.png";
var xicht120 = new Image();
xicht120.src = "Images/xicht120.png";

var xicht201 = new Image();     // Male casti ku grafitu
xicht201.src = "Images/xicht201.png";
var xicht202 = new Image();
xicht202.src = "Images/xicht202.png";
var xicht203 = new Image();
xicht203.src = "Images/xicht203.png";
var xicht204 = new Image();
xicht204.src = "Images/xicht204.png";
var xicht205 = new Image();
xicht205.src = "Images/xicht205.png";
var xicht206 = new Image();
xicht206.src = "Images/xicht206.png";
var xicht207 = new Image();
xicht207.src = "Images/xicht207.png";
var xicht208 = new Image();
xicht208.src = "Images/xicht208.png";
var xicht209 = new Image();
xicht209.src = "Images/xicht209.png";
var xicht210 = new Image();
xicht210.src = "Images/xicht210.png";
var xicht211 = new Image();
xicht211.src = "Images/xicht211.png";
var xicht212 = new Image();
xicht212.src = "Images/xicht212.png";

timerId = setInterval("update()", 400/frames);

ctx.fillStyle = "black";
ctx.fillRect(0, 0,1000, 600);

function update() { 
    counter = counter + 1;

    if (counter < scena1) {             // Noviny
        levelhry = 0;
        }
    
    if (counter == scena1) {            // Neil
        ctx.clearRect(0, 0, 1000, 600);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1000, 600);
        levelhry = 1;
        }

    if (counter == scena2) {            // Katakomba
        ctx.clearRect(0, 0, 1000, 600);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1000, 600);
        levelhry = 2;
        morzi1 = -500;
        morzi2 = -350;
        morzi3 = 1500;
        morzi4 = 950;
        }
    if (counter == scena3) {            // Nahrobny kamen
        ctx.clearRect(0, 0, 1000, 600);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1000, 600);
        levelhry = 3;
        morzi1 = 0;
        morzi2 = 0;
        morzi3 = 1000;
        morzi4 = 600;
        }
    if (counter == scena4) {            // Grafit
        ctx.clearRect(0, 0, 1000, 600);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1000, 600);
        levelhry = 4;
        }
    if (counter == scena5) {           // Zaverecne titulky
        ctx.clearRect(0, 0, 1000, 600);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1000, 600);
        levelhry = 5;
        morzi1 = 0;
        morzi2 = 0;
        morzi3 = 1000;
        morzi4 = 600;
        }
    

    if (levelhry == 0) {      // tu budu noviny

        ctx.drawImage(xicht1, 0, pohybnovin, 1000, 1200);
        if (pohybnovin > -350) {
            pohybnovin = pohybnovin - 0.7;
        }
        
        }

    if (levelhry == 1) {      // Neil

        ctx.drawImage(xicht2, pohybneilovhoplanu, 0, 1010, 600);
        ctx.drawImage(xicht3, pohybneila, 0, 500, 600);
        pohybneila = pohybneila + 0.025;
        pohybneilovhoplanu = pohybneilovhoplanu + 0.06
            
        }
    if (levelhry == 2) {      // Katakomba

        ctx.drawImage(xicht4, morzi1, morzi2, morzi3, morzi4);
        morzi1 = morzi1 + 0.5;
        morzi2 = morzi2 + 0.3;
        morzi3 = morzi3 - 0.5;
        morzi4 = morzi4 - 0.3;
                
        }
    if (levelhry == 3) {      // Nahrobny Kamen

        ctx.drawImage(xicht50, morzi1, morzi2, morzi3, morzi4);
        ctx.drawImage(xicht51, 180, pohybnahrobneho, 600, 580);
        if (pohybnahrobneho > 50) {
        pohybnahrobneho = pohybnahrobneho - 1;
    }
        morzi1 = morzi1 - 0.05;
        morzi2 = morzi2 - 0.04;
        morzi3 = morzi3 + 0.1;
        morzi4 = morzi4 + 0.08;
                  
        }
    if (levelhry == 4) {      // Grafit

        counterprexicht = counterprexicht + 0.014;
        if (counterprexicht < 3) {
        ctx.drawImage(xicht100, 0, 0, 1000, 600);
    }
        if (counterprexicht < 6 && counterprexicht > 3) {
        ctx.drawImage(xicht101, 0, 0, 1000, 600);
    }
        if (counterprexicht < 9 && counterprexicht > 6) {
        ctx.drawImage(xicht102, 0, 0, 1000, 600);
    }
        if (counterprexicht < 12 && counterprexicht > 9) {
        ctx.drawImage(xicht103, 0, 0, 1000, 600);
    }
        if (counterprexicht < 15 && counterprexicht > 12) {
        ctx.drawImage(xicht104, 0, 0, 1000, 600);
    }
        if (counterprexicht < 18 && counterprexicht > 15) {
        ctx.drawImage(xicht105, 0, 0, 1000, 600);
    }
        if (counterprexicht < 21 && counterprexicht > 18) {
        ctx.drawImage(xicht106, 0, 0, 1000, 600);
    }
        if (counterprexicht < 24 && counterprexicht > 21) {
        ctx.drawImage(xicht107, 0, 0, 1000, 600);
    }
        if (counterprexicht < 27 && counterprexicht > 24) {
        ctx.drawImage(xicht108, 0, 0, 1000, 600);
    }
        if (counterprexicht < 30 && counterprexicht > 27) {
        ctx.drawImage(xicht109, 0, 0, 1000, 600);
    }
        if (counterprexicht < 33 && counterprexicht > 30) {
        ctx.drawImage(xicht110, 0, 0, 1000, 600);
    }
        if (counterprexicht < 36 && counterprexicht > 33) {
        ctx.drawImage(xicht111, 0, 0, 1000, 600);
    }
        if (counterprexicht < 39 && counterprexicht > 36) {
        ctx.drawImage(xicht112, 0, 0, 1000, 600);
    }
        if (counterprexicht < 42 && counterprexicht > 39) {
        ctx.drawImage(xicht113, 0, 0, 1000, 600);
    }
        if (counterprexicht < 45 && counterprexicht > 42) {
        ctx.drawImage(xicht114, 0, 0, 1000, 600);
    }
        if (counterprexicht < 48 && counterprexicht > 45) {
        ctx.drawImage(xicht115, 0, 0, 1000, 600);
    }
        if (counterprexicht < 51 && counterprexicht > 48) {
        ctx.drawImage(xicht116, 0, 0, 1000, 600);
    }
        if (counterprexicht < 54 && counterprexicht > 51) {
        ctx.drawImage(xicht117, 0, 0, 1000, 600);
    }
        if (counterprexicht < 57 && counterprexicht > 54) {
        ctx.drawImage(xicht118, 0, 0, 1000, 600);
    }
        if (counterprexicht < 60 && counterprexicht > 57) {
        ctx.drawImage(xicht119, 0, 0, 1000, 600);
    }
    if (counterprexicht < 63 && counterprexicht > 60) {
        ctx.drawImage(xicht120, 0, 0, 1000, 600);
    }
    if (counterprexicht < 66 && counterprexicht > 63) {
        ctx.drawImage(xicht119, 0, 0, 1000, 600);
    }
    if (counterprexicht < 69 && counterprexicht > 66) {
        ctx.drawImage(xicht118, 0, 0, 1000, 600);
    }
    if (counterprexicht < 72 && counterprexicht > 69) {
        ctx.drawImage(xicht117, 0, 0, 1000, 600);
    }
    if (counterprexicht < 75 && counterprexicht > 72) {
        ctx.drawImage(xicht116, 0, 0, 1000, 600);
    }
    if (counterprexicht < 78 && counterprexicht > 75) {
        ctx.drawImage(xicht115, 0, 0, 1000, 600);
    }
    if (counterprexicht < 81 && counterprexicht > 78) {
        ctx.drawImage(xicht114, 0, 0, 1000, 600);
    }
    if (counterprexicht < 84 && counterprexicht > 81) {
        ctx.drawImage(xicht113, 0, 0, 1000, 600);
    }
    if (counterprexicht < 87 && counterprexicht > 84) {
        ctx.drawImage(xicht112, 0, 0, 1000, 600);
    }
    if (counterprexicht < 90 && counterprexicht > 87) {
        ctx.drawImage(xicht111, 0, 0, 1000, 600);
    }
    if (counterprexicht < 93 && counterprexicht > 90) {
        ctx.drawImage(xicht110, 0, 0, 1000, 600);
    }
    if (counterprexicht < 96 && counterprexicht > 93) {
        ctx.drawImage(xicht109, 0, 0, 1000, 600);
    }
    if (counterprexicht < 99 && counterprexicht > 96) {
        ctx.drawImage(xicht108, 0, 0, 1000, 600);
    }
    if (counterprexicht < 102 && counterprexicht > 99) {
        ctx.drawImage(xicht107, 0, 0, 1000, 600);
    }
    if (counterprexicht < 105 && counterprexicht > 102) {
        ctx.drawImage(xicht106, 0, 0, 1000, 600);
    }
    if (counterprexicht < 108 && counterprexicht > 105) {
        ctx.drawImage(xicht105, 0, 0, 1000, 600);
    }
    if (counterprexicht < 111 && counterprexicht > 108) {
        ctx.drawImage(xicht104, 0, 0, 1000, 600);
    }
    if (counterprexicht < 114 && counterprexicht > 111) {
        ctx.drawImage(xicht103, 0, 0, 1000, 600);
    }
    if (counterprexicht < 117 && counterprexicht > 114) {
        ctx.drawImage(xicht102, 0, 0, 1000, 600);
    }
    if (counterprexicht < 120 && counterprexicht > 117) {
        ctx.drawImage(xicht101, 0, 0, 1000, 600);
    }
    if (counterprexicht >= 120) {
        counterprexicht = 0;
    }
    if (pridaneobrazky >= 1) {
        ctx.drawImage(xicht201, 10, 10, 250, 250);
    }
    if (pridaneobrazky >= 2) {
        ctx.drawImage(xicht202, 850, 450, 150, 100);
    }
    if (pridaneobrazky >= 3) {
        ctx.drawImage(xicht203, 800, 30, 150, 150);
    }
    if (pridaneobrazky >= 4) {
        ctx.drawImage(xicht204, 10, 500, 90, 90);
    }
    if (pridaneobrazky >= 5) {
        ctx.drawImage(xicht205, 10, 250, 250, 250);
    }
    if (pridaneobrazky >= 6) {
        ctx.drawImage(xicht206, 100, 500, 140, 140);
    }
    if (pridaneobrazky >= 7) {
        ctx.drawImage(xicht207, 220, 0, 220, 240);
    }
    if (pridaneobrazky >= 8) {
        ctx.drawImage(xicht208, 630, 250, 180, 350);
    }
    if (pridaneobrazky >= 9) {
        ctx.drawImage(xicht209, 230, 260, 100, 300);
    }
    if (pridaneobrazky >= 10) {
        ctx.drawImage(xicht210, 800, 200, 150, 150);
    }
    if (pridaneobrazky >= 11) {
        ctx.drawImage(xicht211, 325, 320, 80, 250);
    }
    if (pridaneobrazky >= 12) {
        ctx.drawImage(xicht212, 630, 35, 150, 150);
    }

        // Tu doplnit ify podla casu sa budu prikreslovat obrazky
                    
        }
    if (levelhry == 5) {      // Zaverecne Titulky

        ctx.drawImage(xicht50, morzi1, morzi2, morzi3, morzi4);
        morzi1 = morzi1 - 0.05;
        morzi2 = morzi2 - 0.04;
        morzi3 = morzi3 + 0.1;
        morzi4 = morzi4 + 0.08;
        endtitles = endtitles - 0.5;
        ctx.fillStyle = 'white';
        ctx.font = "30px Stencil";
        ctx.fillText("AUTOR TEXTU: ERIK PAVLUSIK", 300, endtitles);
        ctx.fillText("AUTOR KRESIEB A ANIMÁCIÍ: ERIK PAVLUSIK", 210, endtitles + 100);
        ctx.fillText("SPOLUAUTORKA: ANITKA PAVLUSIKOVÁ", 240, endtitles + 200);
        ctx.fillText("Copyright © 2022 Erik Pavlusik", 260, endtitles + 300);
                        
        }
    }
