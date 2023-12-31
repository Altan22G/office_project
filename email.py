from threading import Thread
from flask import current_app,render_template
from flask_mail import Message
from . import mail


def send_email(title,template,**kwargs):
    app = current_app._get_current_object()
    msg=Message(title,
                sender="n",
                recipients=['nikolasmeny@gmail.com']#βαλε το εμαιλ του πατερα σου
                )

    msg.body = render_template(template + '.txt',**kwargs)


    mail.send(msg)