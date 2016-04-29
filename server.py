from flask import Flask,request
import json
#import pymongo,datetime
app = Flask(__name__)

lightStates = {}
nLights = 15
temp = 0.0
opt_temp = 0.0
nPeople = 0
luminosity = 0.0

# client = pymongo.MongoClient()
# db = client.test

# def #update():
#     loc = [28.547291, 77.273201]
#     post = {"luminosity" : luminosity,
#     "numberoflights" : nLights,
#     "temperature" : temp,
#     "optimaltemperature" : opt_temp,
#     "numberofpeople" : nPeople,
#     "lightStates" : str(lightStates),
#     "loc" : loc
#     }
#     db.test.insert(post)
    
for i in range(nLights):
    lightStates[i] = False
    

@app.route('/getOptimalTemperature')
def getOptimalTemperature():
    global opt_temp
    return str(opt_temp)

  
@app.route('/setOptimalTemperature')
def setOptimalTemperature():
    global opt_temp
    try:
        opt_temp = float(request.args.get('val'))
        ##update()
        return "True"
    except:
        return "False"


@app.route('/getDeviceStatuses')
def getDeviceStatuses():
    global lightStates
    print json.dumps(lightStates)
    return json.dumps(lightStates)


@app.route('/getDeviceStatus')
def getDeviceStatus():
    global lightStates
    try:
        return str(lightStates[int(request.args.get('deviceId'))])
    except:
        return "Potato"


@app.route('/setDeviceStatus')
def setDeviceStatus():
    global lightStates
    try:
        lightStates[int(request.args.get('deviceId'))] = ( request.args.get('state') == '1')
        ##update()
        return "True"
    except:
        return "False"
    
    
@app.route('/setTemperature')
def setTemperature():
    global temp
    try:
        temp = float(request.args.get('val'))
        #update()
        return "True"
    except:
        return "False"


@app.route('/getTemperature')
def getTemperature():
    global temp
    return str(temp)


@app.route('/setLuminosity')
def setLuminosity():
    global luminosity
    try:
        luminosity = float(request.args.get('val'))
        #update()
        return "True"
    except:
        return "False"
    

@app.route('/getLuminosity')
def getLuminosity():
    global luminosity
    return str(luminosity)


@app.route('/setPopulation')
def setPopulation():
    global nPeople
    try:
        nPeople = int(request.args.get('val'))
        #update()
        return "True"
    except:
        return "False"


@app.route('/getPopulation')
def getPopulation():
    global nPeople
    return str(nPeople)


@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


# @app.route('/user/<username>')
# def show_user_profile(username):
#     # show the user profile for that user
#     return 'ohho hi  %s' % username


# @app.route('/post/<int:post_id>')
# def show_post(post_id):
#     # show the post with the given id, the id is an integer
#     return 'ohho post %d' % post_id


# @app.route('/both', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         print "ohho POST"
#     else:
#         print "ohho GET"

if __name__ == '__main__':
    app.debug = True
    app.run(host= '0.0.0.0')
