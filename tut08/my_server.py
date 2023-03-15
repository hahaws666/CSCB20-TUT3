from flask import Flask, request
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/form-example")
def form_example():
    return render_template('form-example.html')

@app.route("/user-input", methods=['POST'])
def user_input():
    user_input = request.form.get('user-input')
    print(user_input)
    return render_template('user-input.html', user_input=user_input)