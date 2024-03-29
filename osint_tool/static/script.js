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



function openBlockchainExplorer() {
    var address = document.getElementById('addressInput').value.trim();
    var currency = document.getElementById('currencySelect').value;

    var baseUrls = {
        btc: 'https://blockchain.info/address/',
        eth: 'https://etherscan.io/address/'
    };

    var urlToOpen = baseUrls[currency] + address;

    window.open(urlToOpen, '_blank');
}