////Code developed by Steve Hudak to be used//////
////with Sheridan IxD Thinger guide 2////////

#include <ThingerESP8266.h>
#include <ESP8266WiFi.h>

#define USERNAME "boyega"
#define DEVICE_ID "esp8266"
#define DEVICE_CREDENTIAL "I@Uz&2i+khxMtKaP"

#define SSID "BELL516"
#define SSID_PASSWORD "5A479762"

ThingerESP8266 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

// digital pin, pin that goes to your LED
#define BUTTON_PIN 16
#define LED2 12

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  
  Serial.begin(115200);

  thing.add_wifi(SSID, SSID_PASSWORD);

  // pin control example (i.e. turning on/off a light, a relay, etc)
  thing["led1"]<< digitalPin(LED1);
  thing["button_pin]<<digitalPin(BUTTON_PIN);
  
}

void loop() {
  thing.handle();
  //CODE BORROWED FROM PROJECT 1 IXD_FEATHER2WEB
  if(digitalRead(BUTTON_PIN) == HIGH){
    current = true;
    digitalWrite(LED_PIN, LOW);
    digitalWrite(LED_BUILTIN, HIGH);
  }else{
    current = false;
    digitalWrite(LED_PIN, HIGH);
    digitalWrite(LED_BUILTIN, LOW);
  }
  // return if the value hasn't changed
  if(current == last){
    return;
  }
  
}
