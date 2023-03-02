from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submissions', methods=['POST'])
def submissions():
    return 'submission received', 201