from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/add-a-value')
def add_a_value():
    return render_template('add-value.html')

@app.route('/get-a-value')
def get_a_value():
    return render_template('get-value.html')
