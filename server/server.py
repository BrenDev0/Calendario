from flask import Flask, make_response, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/test', methods=['GET', 'POST'])
def testapi():
    if (request.method == 'GET'):
        response = app.make_response({"message": "this is a test response"}, 200)
        return response

app.run(host='0.0.0.0', port=81)