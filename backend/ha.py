import requests
import json

import sys

# Set up the URL and data to be posted
url = 'http://localhost:8000/api/customer'
data = {'id':898}

data_user = { 'email':'mm7@hotmail'+sys.argv[1],
       'pwd':'pwd',
              'firstname': 'mli7',
              'lastname': 'boko',
              'username':'fara',
              'jwt':'DSFDGSDFHR78568756756' 
        
        }



data_bytes = json.dumps(data_user).encode('utf-8')
response = requests.post(url, data_bytes)

print(response.content)








