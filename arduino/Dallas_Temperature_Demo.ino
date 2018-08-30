#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);

DallasTemperature sensors(&oneWire);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("Dallas temperature IC Control Library Demo");
  sensors.begin();

}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("Requesting temperature sensors");
  sensors.requestTemperatures();
  Serial.println("DONE");
  Serial.print("Temperature is: ");
  Serial.print(sensors.getTempCByIndex(0));
  delay(2000);
}
