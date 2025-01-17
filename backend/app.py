from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #enable CORS For all routes

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/api/data')
def get_data():
    data = {'message': 'This is data from the Flask backend!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
