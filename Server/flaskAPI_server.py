from ctypes import util
from urllib import response
from flask import Flask, request, jsonify
import util
app = Flask(__name__)

@app.route('/')
def get_categories_names():
    response = jsonify({
        'category_list': util.get_categories_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
#Getting business prediction from the model and getting the values from our html(FrontEnd) and making the requests from the predict_business function
@app.route('/predict_business_success', methods=['POST'])
def predict_business_success():
    category_list = request.form['category_list']
    funding_total_usd = int(request.form['funding_total_usd'])
    founded_year = request.form['founded_year']
    
    response = jsonify({
        'predicted_business': util.get_prediction_business(category_list,funding_total_usd,founded_year)
    })
    
    return response


if __name__ == "__main__":
    print("Starting Python Flask Server")
    util.load_models()
    app.run()