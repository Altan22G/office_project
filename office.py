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
        send_email('Eπικοινωνια με πελατη','user',msg =_msg,name=_name,email=_email)
    return render_template('contact.html')


@app.route('/',methods = ['GET','POST'])
def index():
    if request.method == 'POST':
        _name = request.form.get('name')
        _email = request.form.get('email')  
        _msg = request.form.get('message')  
        send_email('Eπικοινωνια με πελατη','user',msg =_msg,name=_name,email=_email)
    return render_template('index.html')

@app.route('/car',methods = ['GET','POST'])
def car():
    if request.method == 'POST':
        _name = request.form.get('name')
        _bname = request.form.get('bname')
        _bdate = request.form.get('birth_date')
        _ddate = request.form.get('diploma_date')
        _tel = request.form.get('tel')
        _country = request.form.get('country')
        _email = request.form.get('email') 
        _idiotis = request.form.get('idiotis_etairia') 
        _carMarka =  request.form.get('carMarka') 
        _carModel =  request.form.get('carModel') 
        _carYear =  request.form.get('carYear') 
        _carNumber =  request.form.get('carNumber') 
        _coverageType = request.form.get('coverageType')
        send_email('Ασφαλεια Αυτοκινητου','car',name = _name, bname=_bname, email = _email,bdate=_bdate,ddate=_ddate,
                   tel=_tel,country= _country,idiotis=_idiotis,carMarka=_carMarka,carModel=_carModel,carYear=_carYear,
                   carNumber=_carNumber,coverageType=_coverageType
                   )
    return render_template('car.html')

@app.route('/health')
def health():
    return render_template('health.html')


@app.route('/life',methods = ['GET','POST'])
def life():
    return render_template('life.html')

@app.route('/home',methods = ['GET','POST'])
def home():
    return render_template('home.html')