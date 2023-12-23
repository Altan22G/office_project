import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

from flask import render_template,request
from . import create_app

from .email import send_email


app = create_app(os.getenv("FLASK_CONFIG") or 'default')






@app.route('/contact',methods = ['GET','POST'])

def contact():
    if request.method == 'POST':
        _name = request.form.get('name')
        _email = request.form.get('email')  
        _msg = request.form.get('message')  
        send_email(title=f'Name: {_name}, Email: {_email}',msg_body=_msg)
    return render_template('contact.html')


@app.route('/')
def home():
    if request.method == 'POST':
        _name = request.form.get('name')
        _email = request.form.get('email')  
        _msg = request.form.get('message')  
        send_email(title=f'Name: {_name}, Email: {_email}',msg_body=_msg)
    return render_template('index.html')

@app.route('/car',methods = ['GET','POST'])
def car():
    return render_template('car.html')


