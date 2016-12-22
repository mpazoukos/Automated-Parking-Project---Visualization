var parking = new Array();
var randomizer;
var j;
var k;
var repeat = "yes";
var img;
var xpos;
var ypos;
var finalcol;
var finalrow;
//******************************************************************************************************************************************************
//******************************************************************************************************************************************************
function preload() { //******************************************************************************************************************************************************
//******************************************************************************************************************************************************
//******************************************************************************************************************************************************
  img = loadImage("parkingplan.png");
}
function mouseClicked() {
  print("--------");
  print(mouseX);
  print(mouseY);
  print("--------");
  
}

//******************************************************************************************************************************************************
//******************************************************************************************************************************************************
function setup() { //******************************************************************************************************************************************************
//****************************************************************************************************************************************************** 
//****************************************************************************************************************************************************** 
  alert("Welcome to the Automatic Parking System");
  ypos = 480;
  createCanvas(displayWidth, displayHeight);
  image(img,0,0);
  for (i = 0 ; i < 18; i++ ) {
      parking[i] = new Array();
    for (j = 0 ; j < 45; j++ ) {
      parking[i][j] = new Array();
      for (k = 0 ; k < 12; k++ ) {
        parking[i][j][k] = 0;
      }
    }
  }
  // PARKING CREATION 
  for (i = 0 ; i < 45; i++ ) {
        
        if (i === 0) { // Comment: parking[i][j][0] determines whether spot is a blank or not (Cars cannot be parked due to
                      // parking design.
            
            parking[0][i][0] = 0;
            parking[1][i][0] = 0;
            parking[2][i][0] = 0;
            parking[3][i][0] = 0;
            parking[4][i][0] = 0;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 0;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 0;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 0;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 0;
            parking[17][i][0] = 1;

            
        } else if (i == 2) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[6][i][0] = 0;
            parking[15][i][0] = 0;
            parking[16][i][0] = 0;
            parking[17][i][0] = 0;
        
        } else if (i == 3) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[6][i][0] = 0;
            parking[7][i][0] = 0;
            parking[15][i][0] = 0;
            parking[16][i][0] = 0;
            parking[17][i][0] = 0;
            
        } else if (i == 4 || i == 5) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[15][i][0] = 0;
            parking[16][i][0] = 0;
            parking[17][i][0] = 0;
        
        } else if (i == 6) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            
            for (j = 6 ; j < 18; j++ ) {
                
                parking[j][i][0] = 0;
            }
            
        } else if (i == 7) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            
        } else if (i == 8) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[6][i][0] = 0;
            parking[7][i][0] = 0;
            
        } else if (i == 9) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[6][i][0] = 0;
            
        } else if (i == 10 || i == 11) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[2][i][0] = 0;
            parking[3][i][0] = 0;
            parking[4][i][0] = 0;
            parking[5][i][0] = 0;
            
        } else if (i == 12) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            for (j = 0 ; j < 6; j++ ) {
                
                parking[j][i][0] = 0;
            }
            
        } else if (i == 13) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            for (j = 0 ; j < 5; j++ ) {
                
                parking[j][i][0] = 0;
            }
            
        } else if (i == 14) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
        } else if (i == 15) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[11][i][0] = 0;
            parking[12][i][0] = 0;
            
        } else if (i == 16) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[10][i][0] = 0;
            parking[11][i][0] = 0;
        } else if (i == 17 || i == 18 || i == 19) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
    
            
        } else if (i == 20) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[17][i][0] = 0;
            
        } else if (i == 21 || i == 22) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
    
            
        } else if (i == 23) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            
        } else if (i == 24 || i == 25 || i == 26) {
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
        
            
        } else if (i == 27) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            parking[1][i][0] = 0;
            parking[6][i][0] = 0;
            parking[7][i][0] = 0;
            
        } else if (i == 28) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            parking[5][i][0] = 0;
            
        } else if (i == 29 || i == 30 || i ==31) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;

            
        } else if (i == 32) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[2][i][0] = 0;
            
        } else if (i == 33) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[3][i][0] = 0;
            
        } else if (i == 34 || i == 35 || i == 36) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
        
            
        } else if (i == 37) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            for (j = 6 ; j < 18; j++ ) {
                
                parking[j][i][0] = 0;
            }
            
        } else if (i == 38 || i == 39) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[5][i][0] = 0;
            parking[15][i][0] = 0;
            parking[16][i][0] = 0;
            parking[17][i][0] = 0;
            
            
        } else if (i == 40) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            parking[15][i][0] = 0;
            parking[16][i][0] = 0;
            parking[17][i][0] = 0;

        } else if (i == 41) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            parking[1][i][0] = 0;
            parking[15][i][0] = 0;
            parking[16][i][0] = 0;
            parking[17][i][0] = 0;
            
        } else if (i == 42) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[9][i][0] = 0;
            parking[10][i][0] = 0;
            
        } else if (i == 43) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[0][i][0] = 0;
            
            for (j = 6 ; j < 18; j++ ) {
                
                parking[j][i][0] = 0;
            }
            
        } else if (i == 44) {
            
            parking[0][i][0] = 1;
            parking[1][i][0] = 1;
            parking[2][i][0] = 1;
            parking[3][i][0] = 1;
            parking[4][i][0] = 1;
            parking[5][i][0] = 1;
            parking[6][i][0] = 1;
            parking[7][i][0] = 1;
            parking[8][i][0] = 1;
            parking[9][i][0] = 1;
            parking[10][i][0] = 1;
            parking[11][i][0] = 1;
            parking[12][i][0] = 1;
            parking[13][i][0] = 1;
            parking[14][i][0] = 1;
            parking[15][i][0] = 1;
            parking[16][i][0] = 1;
            parking[17][i][0] = 1;
            
            parking[9][i][0] = 0;
            
        }
            
    }
  
  for (i = 0 ; i < 18; i++ ) {
        for (j = 0 ; j < 45; j++ ) {
            if (parking[i][j][0] !== 0) {
                parking[i][j][0] = 1;
            }
        }
    }
  for (i = 0 ; i < 18; i++ ) {
    parking[i][1][0] = 1;
  }
  // PARKING RANDOMIZER 
  for (i = 0 ; i < 18; i++ ) {
        for (j = 0 ; j < 45; j++ ) {
            randomizer = floor(random(5));
            if (randomizer == 1 && parking[i][j][0] == 1){
                parking[i][j][1] = 1;
            } else {
                parking[i][j][1] = 0;
            }
        }
    }
}

//******************************************************************************************************************************************************
//******************************************************************************************************************************************************
function draw() { //******************************************************************************************************************************************************
//******************************************************************************************************************************************************
//******************************************************************************************************************************************************  
  while (repeat == "yes") {
    image(img, 0, 0)
    var xpix = 160;
    var ypix = 260;
    var ydis = 8.2;
    var xdis = 20;
    for (i = 0 ; i < 18; i++ ) {
      if ((parking[i][0][1] === 1) && (parking[i][0][0] === 1)) {
        fill('green');
        ellipse(120, (ypix+15), 5, 5);
        parking[i][0][11] = 120;
        parking[i][0][12] = ypix +15;
        ypix = ypix + ydis;
      } else if ((parking[i][0][1] === 0) && (parking[i][0][0] === 1)) {
        fill('red');
        ellipse(120, (ypix+15), 5, 5);
        ypix = ypix + (ydis);
        parking[i][0][11] = 120;
        parking[i][0][12] = ypix +15;
      } else {
        ypix = ypix + (ydis);
      }
    } 
    xpix = 160;
    ypix = 260;
    for (j = 1 ; j < 45; j++ ) {
        for (i = 0 ; i < 18; i++ ) {
            if ((parking[i][j][1] === 1) && (parking[i][j][0] === 1)) { 
              fill('green');
              ellipse(xpix, ypix, 5, 5);
              parking[i][j][11] = xpix;
              parking[i][j][12] = ypix;
              ypix = ypix + ydis;
          } else if ((parking[i][j][1] === 0) && (parking[i][j][0] === 1)) { 
              fill('red');
              ellipse(xpix, ypix, 5, 5);
              parking[i][j][11] = xpix;
              parking[i][j][12] = ypix;
              ypix = ypix + ydis;
          } else {
            ypix = ypix + ydis;
          }
    }
    if (j === 13) {
      xpix = xpix + (2*xdis);
    } else if (j == 14) {
      xpix = xpix + 24;
    } else if (j == 29) {
      xpix = xpix + 43;
    } else {
      xpix = xpix + xdis;
    }
    ypix = 260;
    }
        var full = "true";
        if (repeat == "yes") {
            repeat = "no";
            for (i = 0 ; i < 18; i++ ) {
                for (j = 0 ; j < 45; j++ ) {
                    if (parking[i][j][1] == 1) {
                        full = "false";
                        repeat = "yes";
                    }
                }
            }
        }
        if (full == "true") {
            alert("The parking full. Public Safety sends their regards.");
            break;
        }
///////// ELAVATOR TO D2 *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((j == 42) && (i > 6)) { // WALL DISTANCE D1
                    parking[i][j][2] = 1*(sqrt((42-j)*(42-j)+(7-(i))*(7-(i))) + sqrt((45-42)*(45-42)+(7-(5))*(7-(5))));
                } else if ((j == 36) && (i > 6)) {
                    parking[i][j][2] = 1*(sqrt((36-j)*(36-j)+(7-(i))*(7-(i))) + sqrt((45-36)*(45-36)+(7-(5))*(7-(5))));
                } else {
                    parking[i][j][2] = sqrt((45-j)*(45-j)+(5-i)*(5-i));
                }
            }
        }
        var minel1 = 99999;
        var minel1i;
        var minel1j;
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((parking[i][j][2] < minel1) && (parking[i][j][0] == '1') && (parking[i][j][1] == '1') ) {
                    minel1 = parking[i][j][2];
                    minel1i = i;
                    minel1j = j;
                }
            }
        }
//////// ELAVATOR TO D2 *END*
        
//////// ELAVATOR TO A5 *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                parking[i][j][3] = sqrt((25-j)*(25-j)+(0-(i))*(0-(i)));
            }
        }
        var minel2 = 99999;
        var minel2i;
        var minel2j;
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((parking[i][j][3] < minel2) && (parking[i][j][0] == '1') && (parking[i][j][1] == '1') ) {
                    minel2 = parking[i][j][3];
                    minel2i = i;
                    minel2j = j;
                }
            }
        }
//////// ELAVATOR TO A5 *END*
        
//////// ELAVATOR TO A5 *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                parking[i][j][4] = sqrt((16-j)*(16-j)+(0-(i))*(0-(i)));
            }
        }
        var minel3 = 99999;
        var minel3i;
        var minel3j;
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((parking[i][j][4] < minel3) && (parking[i][j][0] == 1) && (parking[i][j][1] == 1) ) {
                    minel3 = parking[i][j][4];
                    minel3i = i;
                    minel3j = j;
                }
            }
        }
////////// ELAVATOR TO A5 *END*
        
////////// ELAVATOR TO A2 *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                parking[i][j][5] = sqrt((10-j)*(10-j)+(4-(i))*(4-(i)));
            }
        }
        var minel4 = 99999;
        var minel4i;
        var minel4j;
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((parking[i][j][5] < minel4) && (parking[i][j][0] == 1) && (parking[i][j][1] == 1) ) {
                    minel4 = parking[i][j][5];
                    minel4i = i;
                    minel4j = j;
                }
            }
        }
////////// ELAVATOR TO A2 *END*
        
////////// ELAVATOR TO ERB *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                parking[i][j][6] = sqrt((2-j)*(2-j)+(0-(i))*(0-(i)));
            }
        }
        var minel5 = 99999;
        var minel5i;
        var minel5j;
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((parking[i][j][6] < minel5) && (parking[i][j][0] === 1) && (parking[i][j][1] === 1) ) {
                    minel5 = parking[i][j][6];
                    minel5i = i;
                    minel5j = j;
                }
            }
        }
////////// ELAVATOR TO ERB *END*
        
////////// ELAVATOR TO D1 *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((j == 1) && (i > 6)) { // WALL DISTANCE D1
                   parking[i][j][7] = sqrt((1-j)*(1-j)+(7-(i))*(7-(i))) + sqrt((0-1)*(0-1)+(7-(4))*(7-(4)));
                } else if ((j == 1) && (i > 6)) {
                    parking[i][j][7] = sqrt((7-j)*(7-j)+(7-(i))*(7-(i))) + sqrt((0-7)*(0-7)+(7-(4))*(7-(4)));
                } else {
                    parking[i][j][7] = sqrt((0-j)*(0-j)+(4-(i))*(4-(i)));
                }
            }
        }
        var minel6 = 99999;
        var minel6i;
        var minel6j;
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                if ((parking[i][j][7] < minel6) && (parking[i][j][0] == 1) && (parking[i][j][1] == 1) ) {
                    minel6 = parking[i][j][7];
                    minel6i = i;
                    minel6j = j;
                }
            }
        }
////////// ELAVATOR TO D1 *END*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                parking[i][j][8] = 9999999;
            }
        }
        // Closest parking for each spot *START*
        for (i = 0 ; i < 18; i++ ) {
            for (j = 0 ; j < 45; j++ ) {
                for (k = 2; k < 8; k++ ) {
                    if ((parking[i][j][8] > parking[i][j][k]) && (parking[i][j][0] == 1) && (parking[i][j][1] == 1)) {
                        parking[i][j][8] = parking[i][j][k];
                        parking[i][j][9] = i;
                        parking[i][j][10] = j;
                    }
                }
            }
        }
        // Closest parking for each spot *END*

        var location;
        location = prompt("Please enter your prefered building of entrance:             (A2, A5, C2, D1, D2, ERB)");
        if (location == "D2") {
            alert("The closest spot to D2 elevator is:  Column: " + (minel1j + 1) + " Row: " + (minel1i + 1));
            parking[minel1i][minel1j][1] = 0;
            xpos = parking[minel1i][minel1j][11];
            ypos = parking[minel1i][minel1j][12];
            finalrow = minel1i;
            finalcol = minel1j;
        } else if (location == "A5" || location == "a5") {
            alert("The closest spot to A5 elevator is:  Column: " + (minel2j + 1) + " Row: " + (minel2i + 1));
            parking[minel2i][minel2j][1] = 0;
            xpos = parking[minel2i][minel2j][11];
            ypos = parking[minel2i][minel2j][12];
            finalrow = minel2i;
            finalcol = minel2j;
        } else if (location == "C2" || location == "c2"){
            alert("The closest spot to C2 elevator is:  Column: " + (minel3j + 1) + " Row: " + (minel3i + 1));
            parking[minel3i][minel3j][1] = 0;
            xpos = parking[minel3i][minel3j][11];
            ypos = parking[minel3i][minel3j][12];
            finalrow = minel3i;
            finalcol = minel3j;
        } else if (location == "A2" || location == "a2"){
            alert("The closest spot to A2 elevator is:  Column: " + (minel4j + 1) + " Row: " + (minel4i + 1));
            parking[minel4i][minel4j][1] = 0;
            xpos = parking[minel4i][minel4j][11];
            ypos = parking[minel4i][minel4j][12];
            finalrow = minel4i;
            finalcol = minel4j;
        } else if (location == "ERB" || location == "erb"){
            alert("The closest spot to ERB elevator is:  Column: " + (minel5j + 1) + " Row: " + (minel5i + 1));
            parking[minel5i][minel5j][1] = 0;
            xpos = parking[minel5i][minel5j][11];
            ypos = parking[minel5i][minel5j][12];
            finalrow = minel5i;
            finalcol = minel5j;
        } else if (location == "D1" || location == "d1"){
            alert("The closest spot to D1 elevator is:  Column: " + (minel6j + 1) + " Row: " + (minel6i + 1));
            parking[minel6i][minel6j][1] = 0;
            xpos = parking[minel6i][minel6j][11];
            ypos = parking[minel6i][minel6j][12];
            finalrow = minel6i;
            finalcol = minel6j;
        }
        //**************************************************
        //*************** SIMULATOR GPS ********************
        //**************************************************
        // First movement
        for (i = 415 ; i < 481 ; i++ ) {
          fill('black');
          ellipse(980, i, 5 ,5);
        }
        // Second movement
        for (i = 980 ; i < 1096 ; i++ ) {
          fill('black');
          ellipse(i, 415, 5 ,5);
        }
        // Third movement
        for (i = 415 ; i > 247 ; i-- ) {
          fill('black');
          ellipse(1096, i, 5 ,5);
        }
        //COLS 44 TO 43
        if (finalcol === 44 || finalcol === 43) {
          for (i = 1096 ; i > 1057 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(1057, i, 5 ,5);
          }
        }
        // COLS 40 AND 39
        if (finalcol === 40 || finalcol === 39) {
          for (i = 1096 ; i > 977 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(977, i, 5 ,5);
          }
        }
        // COLS 42 TO 37 
        if (finalcol === 42 || finalcol === 41 || finalcol === 38 || finalcol === 37 ) {
          for (i = 1096 ; i > 977 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 389 ; i++ ) {
          fill('black');
          ellipse(977, i, 5 ,5);
          }
          if (finalcol === 42 || finalcol === 41) {
            for (i = 977 ; i < 1017 ; i++ ) {
              fill('black');
              ellipse(i, 388, 5 ,5);
            }
            for (i = 388 ; i > ypos ; i-- ) {
              fill('black');
              ellipse(1017, i, 5 ,5);
            }
          }
          if (finalcol === 38 || finalcol === 37) {
            for (i = 977 ; i > 940 ; i-- ) {
              fill('black');
              ellipse(i, 388, 5 ,5);
            }
            for (i = 388 ; i > ypos ; i-- ) {
              fill('black');
              ellipse(940, i, 5 ,5);
            }
          }
          
        }
        // COLS 36, 35, 32, 31
        if (finalcol === 36 || finalcol === 35) {
          for (i = 1096 ; i > 899 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(899, i, 5 ,5);
          }
        }
        if (finalcol === 32 || finalcol === 31) {
          for (i = 1096 ; i > 817 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(817, i, 5 ,5);
          }
        }
        // COLS 34 33
        if (finalcol === 34 || finalcol === 33) {
          for (i = 1096 ; i > 817 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(817, i, 5 ,5);
          }
          for (i = 815 ; i < 855 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(856, i, 5 ,5);
          }
        }
        // COLS 30 
        if (finalcol === 30) {
          for (i = 1096 ; i > 817 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(817, i, 5 ,5);
          }
          for (i = 817 ; i > 774 ; i-- ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
           for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(775, i, 5 ,5);
          }
        }
        // COLS 29 28
        if (finalcol === 29 || finalcol === 28) {
          for (i = 1096 ; i > 735 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(735, i, 5 ,5);
          }
        }  
        // COLS 27 26
        if (finalcol === 27 || finalcol === 26) {
          for (i = 1096 ; i > 655 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(655, i, 5 ,5);
          }
          for (i = 655 ; i < 693 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(693, i, 5 ,5);
          }
        }
        // COLS 25 24
        if (finalcol === 25 || finalcol === 24) {
          for (i = 1096 ; i > 655 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(655, i, 5 ,5);
          }
        } 
        // COLS 23 22
        if (finalcol === 23 || finalcol === 22) {
          for (i = 1096 ; i > 575 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(575, i, 5 ,5);
          }
          for (i = 575 ; i < 615 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(615, i, 5 ,5);
          }
        }
        // COLS 21 20
        if (finalcol === 21 || finalcol === 20) {
          for (i = 1096 ; i > 575 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(575, i, 5 ,5);
          }
        }
        // COLS 19 18
        if (finalcol === 19 || finalcol === 18) {
          for (i = 1096 ; i > 494 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(494, i, 5 ,5);
          }
          for (i = 494 ; i < 534 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(534, i, 5 ,5);
          }
        }
        // COLS 17 16
        if (finalcol === 17 || finalcol === 16) {
          for (i = 1096 ; i > 496 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(496, i, 5 ,5);
          }
        }
        // COLS 15 14
        if (finalcol === 15 || finalcol === 14) {
          for (i = 1096 ; i > 414 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(414, i, 5 ,5);
          }
          for (i = 414 ; i < 455 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(455, i, 5 ,5);
          }
        }
        // COL 13
        if (finalcol === 13) {
          for (i = 1096 ; i > 414 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(414, i, 5 ,5);
          }
        }
        // COL 12 11
        if (finalcol === 12 || finalcol === 11) {
          for (i = 1096 ; i > 332 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(332, i, 5 ,5);
          }
          for (i = 332; i < 369 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(369, i, 5 ,5);
          }
        }
        // COL 10 9
        if (finalcol === 10 || finalcol === 9) {
          for (i = 1096 ; i > 332 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(332, i, 5 ,5);
          }
        }  
        // COL 8 7
        if (finalcol === 8 || finalcol === 7) {
          for (i = 1096 ; i > 128 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 414 ; i++ ) {
            fill('black');
            ellipse(128, i, 5 ,5);
          }
          for (i = 128; i < 292 ; i++ ) {
            fill('black');
            ellipse(i, 414, 5 ,5);
          }
          for (i = 414 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(292, i, 5 ,5);
          }
        } 
        // COL 6 5
        if (finalcol === 6 || finalcol === 5) {
          for (i = 1096 ; i > 249 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(249, i, 5 ,5);
          }
        }
        // COL 4 3
        if (finalcol === 4 || finalcol === 3) {
          for (i = 1096 ; i > 171 ; i-- ) {
            fill('black');
            ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < 391 ; i++ ) {
            fill('black');
            ellipse(171, i, 5 ,5);
          }
          for (i = 171; i < 207 ; i++ ) {
            fill('black');
            ellipse(i, 391, 5 ,5);
          }
          for (i = 391 ; i > ypos ; i-- ) {
            fill('black');
            ellipse(207, i, 5 ,5);
          }
        }
        // COL 2 1
        if (finalcol === 2 || finalcol === 1) {
          for (i = 1096 ; i > 171 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(171, i, 5 ,5);
          }
        }
        // COL0
        if (finalcol === 0) {
          for (i = 1096 ; i > 132 ; i-- ) {
          fill('black');
          ellipse(i, 247, 5 ,5);
          }
          for (i = 247 ; i < ypos ; i++ ) {
          fill('black');
          ellipse(132, i, 5 ,5);
          }
        }
        //**************************************************
        //*************** SIMULATOR GPS END ****************
        //**************************************************
        repeat = prompt("Is another visitor coming?");
    }
}