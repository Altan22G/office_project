from datetime import datetime
from flask import render_template,session,redirect,url_for,request

from . import main 









@main.route('/contact',methods = ['GET'])

def contact():
    return render_template('contact.html')


@main.route('/')
def home():
    return render_template('index.html')

@main.route('/car',methods = ['GET','POST'])
def car():
    return render_template('car.html')
