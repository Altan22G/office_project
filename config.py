import os
from dotenv import load_dotenv
basedir = os.path.abspath(os.path.dirname(__file__))

load_dotenv(dotenv_path=".env")
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY') or 'hard to guess string'
    MAIL_SERVER = os.getenv('MAIL_SERVER','smtp.googlemail.com')
    MAIL_PORT = int(os.getenv('MAIL_PORT', '587'))
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = ''#Βαλε το εμαιλ 
    MAIL_PASSWORD = ""#Βαλε το app_password απο το 2FA απο το email
    FLASKY_MAIL_SUBJECT_PREFIX = '[office]'
    FLASKY_MAIL_SENDER = 'Flasky Admin <nickolasmeny@gmail.com>'
    FLASKY_ADMIN = os.getenv('FLASKY_ADMIN')
    SSL_REDIRECT = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_RECORD_QUERIES = True
    FLASKY_POSTS_PER_PAGE = 20
    FLASKY_FOLLOWERS_PER_PAGE = 50
    FLASKY_COMMENTS_PER_PAGE = 30
    FLASKY_SLOW_DB_QUERY_TIME = 0.5

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True



class TestingConfig(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False


class ProductionConfig(Config):
    DEBUG = False


config = {
    'development':DevelopmentConfig(),
    'testing':TestingConfig(),
    'production':ProductionConfig(),

    'default':DevelopmentConfig()
}