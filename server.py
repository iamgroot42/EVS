from flask import Flask
app = Flask(__name__)

from flask import request


lightStates = {}
nLights = 5

for i in range(nLights):
    lightStates[i] = "OFF"
    
temp = 0.0
nPeople = 0
luminosity = 0.0



@app.route('/')
def index():
    return 'Index Page'


@app.route('/getStates')
def index():
    global lightStates
    return str(lightStates)

@app.route('/setState')
def index():
    global lightStates
    lightStates[int(request.args.get('deviceId'))] = request.args.get('state')
    return "OK"
    
    

@app.route('/setTemp')
def index():
    global temp
    temp = float(request.args.get('val'))
    return "OK"


@app.route('/setLuminosity')
def index():
    global luminosity
    luminosity = float(request.args.get('val'))
    return "OK"
    

@app.route('/setNPeople')
def index():
    global nPeople
    nPeople = int(request.args.get('val'))
    return "OK"
    

@app.route('/potato')
def potato():
    return 'ohho potato'


@app.route('/fg')
def hello():
    return 'ohho fg'


@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'ohho hi  %s' % username


@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'ohho post %d' % post_id


@app.route('/both', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        print "ohho POST"
    else:
        print "ohho GET"

if __name__ == '__main__':
    app.debug = True
    app.run()
