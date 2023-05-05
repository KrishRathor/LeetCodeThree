from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

from test import run_js_code

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))
    
    def __repr__(self):
        return f'<User {self.email}>'
    
    def check_password(self, password):
        return self.password == password
    
    def send_data(self):
        return {'id': self.id, 'name': self.name, 'email': self.email}
      
    
class SolvedProblem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    problem_name = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
        
       
@app.route('/api/signup', methods=['GET', 'POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    username = data.get('username')

    if not email or not password or not username:
        return jsonify({'error': 'Please provide all required fields'})

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({'message': 'username alreay exists'})

    user = User(name=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'})

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    
    if not user or not user.check_password(password):
        return jsonify({'message': 'Incorrect UserName or Password'})
    
    return jsonify({'user': user.send_data()})

@app.route('/api/code', methods=['GET','POST'])
def handle_request():
    # retrieving data from frontend
    data = request.json
    code = data['code']
    specificProb = data['specificProb']
    language = data['language']
    
    # getting arguements and output of sample testcase
    sample_args = specificProb['sample_args']
    sample_output = specificProb['sample_output']
    
    # running code and getting output
    code_output1 = str(run_js_code(code, sample_args[0]))
    code_output2 = str(run_js_code(code, sample_args[1]))
    
    result = {
        'message': 'Data received successfully',
        'testCaseOne': {
            'passed': code_output1 == str(sample_output[0]),
            'output': code_output1
        },
        'testCaseTwo': {
            'passed': code_output2 == str(sample_output[1]),
            'output': code_output2
        }
    }
    
    return jsonify(result)

@app.route('/api/solvedproblems', methods=['GET', 'POST'])
def handleSolvedProblems():
    data = request.json
    user_id = data['current_user']['id']
    problem_title = data['specificProb']['title']
    
    prob_in_db = SolvedProblem.query.filter_by(problem_name=problem_title).first()
    if prob_in_db:
        return jsonify({'message': 'problem already solved'})
    
    solvedproblem = SolvedProblem(problem_name = data['specificProb']['title'], user_id = user_id)
    db.session.add(solvedproblem)
    db.session.commit()
    
    return jsonify({'message':'problem added successfully'})

if __name__ == "__main__":
    app.run(debug=True)
