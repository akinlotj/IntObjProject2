//////////////////////////////////////////////////
////Code developed by Steve Hudak to be used//////
////with Sheridan IxD Thinger guide 2/////////////
//////////////////////////////////////////////////

///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led1' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url1 = 'https://api.thinger.io/v3/users/boyega/devices/esp8266/resources/buttonpin1?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8yTGVkcyIsInVzciI6ImJveWVnYSJ9.blFY4O2wyLskZz8hXwo04hPLxAoel9PMerl0kITWyhM';
///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led2' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url2 = 'https://api.thinger.io/v3/users/boyega/devices/esp8266/resources/buttonpin2?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8yTGVkcyIsInVzciI6ImJveWVnYSJ9.blFY4O2wyLskZz8hXwo04hPLxAoel9PMerl0kITWyhM';
////////// everything from 'Bearer to the end of the parenthes is your unique individual authorization code and is available in your thinger settings
var Auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfb25lTGVkIiwidXNyIjoiYm95ZWdhIn0.yXBZ_ZOeRCHPISIGQrYPOtOqJMCjVV76arJ7guRwbCA";

////// variables for the 2 seperate data sets and the 2 seperate buttons
var data1;
var data2;
var buttonPin1;
var buttonPin2;

function setup() {
    //// make the canvas whatever size you require
    createCanvas(1000, 600);
}

function draw() {
    ////// the colour of the background
    background("#4a4a4a");
    ////// the colour of the buttons
    var col = color("#17c600");

    ///// the specifics of the led1 button
    buttonPin1 = createButton("Generate Playlist")
        .style('font-size', '20px')
        .style('background-color', col)
        .style('color','white')
        .style('border-radius','10px')
        .position(width / 4, height / 2)
        .mousePressed(() => sendData1(true))
        .mouseReleased(() => sendData1(false));
    ///////this is a nested function that switches the boolean state 
    ////////of the data1 state based on the mouse being clicked
    ///// the specifics of the led2 button
    buttonPin2 = createButton("Go to Playlist")
        .style('font-size', '20px')
        .style('background-color', col)
        .style('color','white')
        .style('border-radius','10px')
        .position(width - width / 2.5, height / 2)
        .mousePressed(() => sendData2(true))
        .mouseReleased(() => sendData2(false));
       
    ////////this is a nested function that switches the boolean state 
    ////////of the data1 state based on the mouse being clicked
    textSize(35);
    text('Playlist Generator',360, 100);
    fill(255, 255, 255);
    textSize(24);
    text('Generate a Playlist below, then click "Go to Playlist".',230, 160);
    fill(255, 255, 255);
    textSize(18);
    text('by: Jordan Akinlotan',800, 570);
    fill(255, 255, 255);
}
////// this function sends the data1 boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type  
function sendData1(data1) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data1
    };
    httpPost(url1, 'application/json', postData, function (result) {
        console.log(postData);
    }); 
    if(sendData1=>false){
         text("Playlist Generated.", 400, 500);
        } 
}

////// this function sends the data2 boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type 
function sendData2(data2) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data2
    };
    httpPost(url2, 'application/json', postData, function (result) {
        console.log(postData);
    });
     if(sendData2=>true){
            location.replace("https://www.chosic.com/playlist-generator/?plid=37i9dQZF1DWWQRwui0ExPn&title=Chill+Beats")
            console.log(data);
        }
}
