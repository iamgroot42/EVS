import requests
import nmap


backend = "http://192.168.1.4:5000"
nm = nmap.PortScanner()

devices = {}
temp = 42.0
lumi = 42.0
people = 0


def update():
	global devices
	global temp
	global lumi
	global people
	# Scan network to get connected routers
	nm.scan('192.168.1.0/24', arguments = '-snP') 
	people = len(nm.all_hosts()) - 2 # Don't include yourself,router
	print nm.all_hosts()
	# Update device status
	for i in devices:
	# <check device status, run below loop only if change detected>
		par = {'deviceId':i,'state':devices[i]}
		r = requests.get(backend+"/setDeviceStatus", params = par)
	# Update temperature reading
	par = {'val':temp}
	r = requests.get(backend+"/setTemperature", params = par)
	# Update luminosity reading
	par = {'val':lumi}
	r = requests.get(backend+"/setLuminosity", params = par)
	# Update population count
	par = {'val':people}
	r = requests.get(backend+"/setPopulation", params = par)


def loop():
	global devices
	while True:
		try:
			# Fetch device status 
			r = requests.get(backend+"/getDeviceStatuses")
			try:
				devs = eval(r.text)
				for i in devs:
					devices[i] = devs[i]
			except:
				print "Error updating states"
			update()
		except:
			print "Server not up"


if __name__ == "__main__":
	update()
	loop()
