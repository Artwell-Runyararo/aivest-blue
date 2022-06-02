from ctypes import util
from urllib import response
from flask import Flask, request, jsonify
import util
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)

CORS(app)
cors = CORS(app, resources={
    r"*":{
        "origins": "http://localhost:3000"
    }
})
app.config['CORS HEADERS'] = 'Content-Type'
@app.route('/')
@cross_origin()
def get_categories_names():
    response = jsonify({
        'category_list': util.get_categories_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
   
    return response
#Getting business prediction from the model and getting the values from our html(FrontEnd) and making the requests from the predict_business function
@cross_origin()
@app.route('/predict_business_success', methods=['POST', 'GET'])

def predict_business_success():
    
    data = json.loads(request.data) # Load the request from the user and store in the variable "data"
    total_funding = int(data['total_funding']) # Break down each input into seprate variables 
    founded_year = int(data['founded_year'])
    category_list = data['category_list']

    response = jsonify({
        'predicted_business': util.get_prediction_business(category_list, total_funding ,founded_year)
    })
    
    return response


if __name__ == "__main__":
    print("Starting Python Flask Server")
    util.load_models()
    app.run()