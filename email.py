from threading import Thread
from flask import current_app
from flask_mail import Message
from . import mail


def send_email(title,msg_body):
    app = current_app._get_current_object()
    msg=Message(title,
                sender="n",
                recipients=['nikolasmeny@gmail.com']#βαλε το εμαιλ του πατερα σου
                )

    msg.body = msg_body

    mail.send(msg)