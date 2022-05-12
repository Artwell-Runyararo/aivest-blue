import json
import pickle
import numpy as np


# Declaring global variables
__categories = None
__data_columns = None
__model = None


# Get the values for prediction and predict.
def get_prediction_business(category_list,funding_total_usd,founded_year):
    try:
        loc_index = __data_columns.index(category_list.lower())
    except:
        loc_index = -1    

    x = np.zeros(len(__data_columns))
    x[0] = funding_total_usd
    x[1] = founded_year
    if(loc_index >= 0):
        x[loc_index] = 1
    
    return round(__model.predict([x])[0],2)
# Get the categoriesname
def get_categories_names():
    return __categories
# Load the model from the Jypter notebook files.
def load_models():
    print("Loading saved models Starting...")
    global __data_columns
    global __categories
    
    with open("C:/aivest/Server/models/columns.json",'r') as f:
        __data_columns = json.load(f)['data_columns']
        __categories = __data_columns[3:]
    global __model
    with open("C:/aivest/Server/models/aivest_startupSuccess_prediction_system.pickle" ,'rb') as f:
        __model = pickle.load(f)
    print('Loading saved models ...Done')     
    
if __name__ == '__main__':
    load_models()
    print(get_categories_names())
    print(get_prediction_business('category_list_Software',500000,2022))
    print(get_prediction_business('category_list_Curated Web',2000,2015))
    print(get_prediction_business('category_list_Manufacturing',23500,2011))
           