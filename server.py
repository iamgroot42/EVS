from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
    return 'Index Page'


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
    app.run()