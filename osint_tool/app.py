from flask import Flask, request, render_template, redirect, url_for
import subprocess
import os
from PIL import Image
from io import BytesIO
from PIL import Image, UnidentifiedImageError

app = Flask(__name__)

@app.route('/username', methods=['GET', 'POST'])
def username():
    if request.method == 'POST':
        username = request.form['username']
        result = subprocess.run(['python3', 'sherlock/sherlock', '--timeout', '1', username], capture_output=True, text=True)
        return result.stdout  # Directly return the output
    return render_template('username.html')

@app.route('/crypto')
def crypto():
    return render_template('crypto.html')


@app.route('/face')
def face():
    return render_template('face.html')
    


@app.route('/breach')
def breach():
    return render_template('breach.html')   
    




@app.route('/metadata', methods=['GET', 'POST'])
def metadata():
    metadata_results = {}
    if request.method == 'POST':
        file = request.files['image']
        print('Received image:', file)  # Print file for debugging
        if file:
            try:
                img = Image.open(BytesIO(file.read()))
                metadata = img._getexif()
                print('Extracted metadata:', metadata)  # Print metadata for debugging
                if metadata:
                    metadata_results = {Image.TAGS.get(tag, tag): value for tag, value in metadata.items()}
                else:
                    metadata_results['Error'] = 'No metadata found'
            except Exception as e:  # Catch all exceptions and print them
                print('Error:', e)
                metadata_results['Error'] = str(e)
    print('Metadata results being passed to template:', metadata_results)  # Final results
    return render_template('metadata.html', metadata=metadata_results)

if __name__ == '__main__':
    app.run(debug=True)
