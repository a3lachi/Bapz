import requests
import json



# Set up the URL and data to be posted
<<<<<<< HEAD
url = 'http://localhost:8000/api/bapz/apparel'
data = {'dfg':'pants'}
=======
url = 'http://localhost:8000/api/customer/token'
data = {'jwt':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhQCIsImJyciI6IjIwMjMtMDMtMjMgMjA6Mjk6NTMuOTczMDUxIn0.z343d0jrrDJb1F_DR5h1stO1qa9F7pJvu1l2XSgdmzU' }
>>>>>>> cfad037e06fa48db7a161dae2e555dd2bf174c43



response = requests.post(url, data=json.dumps(data))


print(response.content)








