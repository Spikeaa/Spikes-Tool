
from flask import Flask, request, render_template
import subprocess

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        username = request.form['username']
        result = subprocess.run(['python3', 'sherlock/sherlock', '--timeout', '1', username], capture_output=True, text=True)
        return result.stdout  # Directly return the output
    return render_template('index.html')



@app.route('/crypto')
def crypto():
    return app.send_static_file('crypto.html')


if __name__ == '__main__':
    app.run(debug=True)

