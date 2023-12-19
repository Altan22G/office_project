import os 
from dotenv import load_dotenv
from flask import Flask,render_template

from flask_mail import Mail

from config import config

load_dotenv('.env')

mail = Mail()
def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    mail.init_app(app)
    
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint,url_prefix = '/')

    return app


