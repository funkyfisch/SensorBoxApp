#include "DHT.h"

#define DHTPIN 2
#define MOISTUREPIN0 A0
#define MOISTUREPIN1 A1

#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

int moisture0,moisture1;
void setup() {
  
  Serial.begin(9600);
  Serial.println("DHTxx test!");

  dht.begin();
}

void loop() {
  // Wait a few seconds between measurements.
  delay(1000);
  moisture0 = analogRead(MOISTUREPIN0);
  moisture0 = map(moisture0,1025,0,0,100);
  moisture1 = analogRead(MOISTUREPIN1);
  moisture1 = map(moisture1,1025,0,0,100);
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("Error");
    return;
  }
  Serial.print("humidity:");
  Serial.print(h);
  Serial.print(",");
  Serial.print("temperature:");
  Serial.print(t);
  Serial.print(",");
  Serial.print("moisture0:");
  Serial.print(moisture0);
  Serial.print(",");
  Serial.print("moisture1:");
  Serial.print(moisture1);
  Serial.print(",");
  Serial.print("\n");
}
