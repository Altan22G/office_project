from threading import Thread
from flask import current_app
from flask_mail import Message
from . import mail

def send_async_email(app,msg):
    with app.app_context():
        mail.send(msg)

def send_email(sender,msg_body):
    app = current_app._get_current_object()
    msg=Message('Hello',
                #app.config['FLASKY_MAIL_SUBJECT_PREFIX']+ subject
                sender=sender,recipients=['nickprogrammer2@gmail.com'])
    msg.body = msg_body #render_template(template + '.txt',**kwargs)
    #msg.html = render_template(template+'.html',**kwargs)
    thr = Thread(target=send_async_email, args=[app, msg])
    thr.start()
    return thr