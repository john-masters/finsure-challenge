from time import sleep
from flask import Flask, send_file

app = Flask(__name__)


@app.get("/")
def index():
    return send_file("static/index.html")


@app.get("/lenders")
def lenders():
    sleep(1)
    return send_file("lenders.json")
