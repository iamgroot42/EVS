import serial
import requests
import json
serialTemp = serial.Serial('/dev/ttyACM1',9600)
SERVER = "http://localhost:5000"
def sendData():
	resp = requests.get(SERVER+"/getDeviceStatuses")
	a = json.loads(resp.content)
	s = ['1','1','1','1','1']
	for i in a:
		if int(i) < 5:
			if a[i]:
				s[int(i)] = '1'
			else:
				s[int(i)] = '0' 
	print s
	serialTemp.write('0' + ''.join(s))

def getData():
	x = serialTemp.readline()
	if "degrees" in x:
		t = float(x.split(' ')[0])
		requests.get(SERVER+"/setOptimalTemperature?val="+str(t));
	elif len(x) == 6:
		requests.get(SERVER+"/setLuminosity?val="+str(int(x)));



def setLights():
	string = "000000"


while True:
	sendData();
 	getData()


sendData("111111");