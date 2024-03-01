document.getElementById('searchBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    fetch('/username', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('results').innerHTML = data;
    });
});




// Basic example to attach to the drag-and-drop events
document.addEventListener('DOMContentLoaded', (event) => {
    let dropArea = document.getElementById('drop-area');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        let dt = e.dataTransfer;
        let files = dt.files;
        // Call your function to handle the files
        handleFiles(files);
    }

    function handleFiles(files) {
        ([...files]).forEach(uploadFile);
    }

    function uploadFile(file) {
        let url = '/metadata';
        let formData = new FormData();

        formData.append('image', file);

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())  // Assuming server responds with JSON
        .then(data => {
            // Handle the response data
            console.log(data);
        })
        .catch(() => {
            /* Handle error */
        });
    }
});