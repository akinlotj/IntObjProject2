#include <ThingerESP8266.h>
#include <ESP8266WiFi.h>

#define USERNAME "boyega"
#define DEVICE_ID "esp8266"
#define DEVICE_CREDENTIAL "I@Uz&2i+khxMtKaP"

#define SSID "BELL516"
#define SSID_PASSWORD "5A479762"

ThingerESP8266 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

// digital pin, pin that goes to your LED
#define LED1 13
#define LED2 12

void setup() {
  Serial.begin(115200);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);

  thing.add_wifi(SSID, SSID_PASSWORD);

  /// Resource for changing LED status from THINGER.IO
  thing["led1"] << [](pson & in) {
    
      digitalWrite(LED1, in ? HIGH : LOW);
   
  };

  thing["led2"] << [](pson & in) {
    
      digitalWrite(LED2, in ? HIGH : LOW);
   
  };

}

void loop() {
  thing.handle();

}
