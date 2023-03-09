from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# IGNORE THIS FOR NOW
@app.route("/index")
def index():
    return render_template('index.html')