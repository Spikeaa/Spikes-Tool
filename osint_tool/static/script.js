document.getElementById('searchBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    fetch('/', {
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
