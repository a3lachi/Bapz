import requests
import json



# Set up the URL and data to be posted
url = 'http://localhost:8000/api/customer/commands'
data = {'cmds': 'BRRRRRR345678'}



response = requests.post(url, data=json.dumps(data))


print(response.content)








