#include <OneWire.h>
#include <DallasTemperature.h>

float calibrationEC = 2; // known EC of calibration solution

int R1 = 1000;
int Ra = 25; // internal analogue pin resistance
int ECPin = A0;
int ECGround = A1;
int ECPower = A4;

float temperatureCoef = 0.019;

#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

float temperatureFinish = 0;
float temperatureStart = 0;
float EC = 0;
int ppm = 0;

float raw = 0;
float Vin = 5;
float Vdrop = 0;
float RC = 0;
float K = 0;

int i = 0;
float buffer = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ECPin, INPUT);
  pinMode(ECPower, OUTPUT);
  pinMode(ECGround, OUTPUT);
  pinMode(ECGround, LOW);
  delay(100);
  sensors.begin();
  delay(100);
   
}

void loop() {
  // put your main code here, to run repeatedly:
  i = 1;
  buffer = 0;
  sensors.requestTemperatures();
  temperatureStart = sensors.getTempCByIndex(0);
  while(i <= 10) {
    digitalWrite(ECPower, HIGH);
    raw = analogRead(ECPin);
    raw = analogRead(ECPin);
    digitalWrite(ECPower, LOW);
    buffer = buffer + raw;
    i++;
    delay(5000);
  }
  raw = (buffer / 10);

  sensors.requestTemperatures();
  temperatureFinish = sensors.getTempCByIndex(0);
  EC = calibrationEC*(1+(temperatureCoef*(temperatureFinish - 25.0)));
  Vdrop = (((Vin)*raw)/1024.0);
  RC = (Vdrop*R1)/(Vin-Vdrop);
  RC = RC - Ra;
  K = 1000/(RC*EC);

  Serial.println(EC);
  Serial.println(Vdrop);
  Serial.println(RC);
  Serial.print("Calibration Fluid EC:");
  Serial.print(calibrationEC);
  Serial.println("S : ");
  Serial.print("Cell constant K : ");
  Serial.println(K);

  if (temperatureStart == temperatureFinish) {
    Serial.println(" Results are trustworthy");
  }
  else {
    Serial.println(" Relatively big temperature fluctuations. Wait until temperature settles");
  }
}
