#include "DHT.h"

#define DHTPIN 2

#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

int moisturePin = A0;
int moisture;
void setup() {
  
  Serial.begin(9600);
  Serial.println("DHTxx test!");

  dht.begin();
}

void loop() {
  // Wait a few seconds between measurements.
  delay(1000);
  moisture = analogRead(moisturePin);
  moisture = map(moisture,1025,0,0,100);
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
  Serial.print(h);
  Serial.print(",");
  Serial.print(t);
  Serial.print(",");
  Serial.print(moisture);
  Serial.print("\n");
}
