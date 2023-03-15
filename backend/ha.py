import requests

# Set up the URL and data to be posted
url = 'http://localhost:8000/api/customer'
data = {'email': 'a', 'pwd': 'a'}



response = requests.post(url, data=data)

# Check the response status code and content
if response.status_code == 200:
    print('Data posted successfully.')
    print(response.content)
else:
    print('Error posting data:', response.status_code)







