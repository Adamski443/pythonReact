# REACT APP Front end with a Python Flask backend

This is just a boiler plate template for a flask backend with a react front end

It is set up to make a simple api call to the backend and display the json result

Nothing clever just helps with templating

### FLASK BACKEND
Navigate to the backend directory and create your python virtual environment: In powershell terminal issue

```powershell
python -m venv venv
```
Activate the virtual environment in powershell:

```powershell
.\venv\Scripts\Activate
```
terminal should now have the name of the virtual env in front of you command line

from the backend directory in your terminal set up the dependecies for the project by first updating pip and then using pip to install requirements.txt:

```powershell
python -m pip install --upgrade pip
```

```powershell
pip install -r requirements.txt
```

### REACT - front end
Make sure node.js is installed
In terminal navigate to frontend directory and then 

Initialise npm

```powershell
npm init -y
```

Install the required packaged
```poweshell
npm install
```
fix any vulnerabilities (good luck on this part if there are any, at time of writing there were none)

### Start the apps
Navigate to backend directory making sure you are in the venv

```powershell
flask run
```
should get a url for the backend server - test it

Navigate to REACT frontend

```powershell
npm start
```

Check you can hit your front end REACT app, it should return the api call from the flask app which shows they are up and running and talking to each other.