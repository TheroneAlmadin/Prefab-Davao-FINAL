import collections
from distutils.log import error
from pydoc import doc
from this import d
from turtle import back, update
from dotenv import load_dotenv, find_dotenv
import os
import pprint
from pymongo import MongoClient
from flask import Flask, jsonify 
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource
from http import client
import json
from datetime import date
from datetime import datetime
import random
import string


load_dotenv(find_dotenv())

username = os.environ.get("dbUser_Dev") # load database connect details from local .env
password = os.environ.get("dbPass_Dev")

printer = pprint.PrettyPrinter()

print("connecting to database...") # connect to database

try:
    
    connectionString = f"mongodb+srv://{username}:{password}@prefabcluster.fmgvmiy.mongodb.net/?retryWrites=true&w=majority" 
    client = MongoClient(connectionString)
    print("connecting to database... success ")
    
except:
    print("Error Code: e0301")


backendAPI = Flask(__name__)
api = Api(backendAPI)
CORS(backendAPI, supports_credentials=True)

mainDB = client.main

accounts_collection = mainDB.accounts 
admins_collection = mainDB.admins 
employees_collection = mainDB.employees
log_records_collection = mainDB.log_records
projects_collection = mainDB.projects
tasks_collection = mainDB.tasks

class jsonableDict (dict):
    def __str__(self):
        return json.dumps(self)
        
class AuthSys():
    # Checker
    global date, time
    #Time
    now = datetime.now()
    #Date
    today = date.today()
    # Textual month, day and year	
    date = today.strftime("%Y-%m-%d")
    # Current Time
    time = now.strftime("%H:%M:%S")

    @backendAPI.route("/auth_login/<username>/<password>", methods = ['POST'])
    @cross_origin(supports_credentials=True)
    def login (username, password):
        dict_true = {"response": "True"}
        dict_false = {"response": "False"}
        dict_NF = {"response": "NOT FOUND"}
        global userdetails
        global account_id
        #Find The Data inside the Collection Check's if the username is available
        userdetails = db.get_Account_LogIn_Details(username=username)
        
        databasepwr = userdetails[2] #password Database
        account_id = userdetails[0] #Account Id
        pwr = password


        #Returns True or False Verification Process
        try:
            if userdetails != "e0101db":
                    if pwr == databasepwr:
                        db.update_Time_In(account_id= account_id, date=date, time=time )
                        return jsonify(dict_true)
                    else:
                        return jsonify(dict_false)
            else:
                return jsonify(dict_NF)
        except:
            return jsonify(dict_false)


    #def logout(account_id):
     #       database.update_Time_Out(account_id= account_id, date=date, time=time )
 

class db():
    @backendAPI.route('/project_Details', methods = ["POST", "GET"])
    @cross_origin(supports_credentials=True)
    def project_Details(): #gets project details from project ID   
        with backendAPI.app_context(): 
            projects = {}
            count = 0
            found_projects = projects_collection.find({}, {'_id': False})
            for x in found_projects:
                    projects[count] = x
                    count+=1

            return jsonify(projects)

    def get_Account_LogIn_Details(username): #gets account details
        account_details = []
        found_details = accounts_collection.find_one({"account_username": username})
        #printer.pprint(found_details)

        if found_details == None:
            print("Error Code: e0101db; Username Not Found")
            return "e0101db"
        else:
            found_id = accounts_collection.find_one({"account_username": username}, {"account_id": 1, "_id" : 0})
            account_id = found_id['account_id']
            account_details.append(account_id)

            found_username = accounts_collection.find_one({"account_username": username}, {"account_username": 1, "_id" : 0})
            account_username = found_username['account_username']
            account_details.append(account_username)

            found_password = accounts_collection.find_one({"account_username": username}, {"account_password": 1, "_id" : 0})
            account_password = found_password['account_password']
            account_details.append(account_password)
    
            return account_details
        
    def update_Time_In(account_id, date, time): #pushes new time in details in database
        
        id = string.digits
        generatedID =  ''.join(random.choice(id) for i in range(5)) 
        doc_login = {
            "log_id": generatedID,
            "account_id": account_id,
            "login_date": date,
            "login_time": time,
            "action" : "log-in"
        }
        log_records_collection.insert_one(doc_login)

    @backendAPI.route('/allEmployeesDetails', methods = ["POST", "GET"])
    @cross_origin(supports_credentials=True)
    def allEmployeeDetails():
        with backendAPI.app_context(): 
            employees = {}
            count = 0
            found_employees = employees_collection.find({},{ '_id': False})
            for x in found_employees:
                employees[count] =x
                count += 1
            
            return jsonify(employees)
    
    @backendAPI.route('/employeeDetails/<employeeID>', methods = ["POST", "GET"])
    @cross_origin(supports_credentials= True)
    def employeeDetails(employeeID):
        with backendAPI.app_context():
            foundEmployee = employees_collection.find_one({"employee_id": employeeID}, {"_id": 0})
            
            return jsonify(foundEmployee)
    

if __name__ == "__main__":
    backendAPI.run(debug=True)