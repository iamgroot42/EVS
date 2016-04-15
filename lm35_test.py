import RPi.GPIO as GPIO
from pyfirmata import ArduinoMega
from pyfirmata.util import Iterator
import time

board = ArduinoMega('/dev/ttyACM0')
GPIO.setmode(GPIO.BCM)
GPIO.setup(26,GPIO.IN)
iterator=Iterator(board)
iterator.start()
pinTemp=board.get_pin('a:0:i')
while True:
	voltage=pinTemp.read()
	input_val = GPIO.input(26)
	print "Input Value :", input_val
	if voltage is not None:
		temp= 5.0*100*voltage
		print "{0} Celsius".format(temp)
	time.sleep(1)
board.exit()

