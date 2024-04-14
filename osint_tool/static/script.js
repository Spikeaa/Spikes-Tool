
/* the 2 sections commented out are not used in this version*/





/*document.getElementById('searchBtn').addEventListener('click', function() {
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

*/


/*

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
    .then(text => {
        var results = text.split('[+]'); // Split the result into an array of strings
        var formattedResults = results.map(function(result) {
            return result.trim(); // Remove any leading/trailing whitespace
        }).filter(function(result) {
            return result.length > 0; // Filter out any empty strings
        }).join('<br>'); // Join the results with a line break
        document.getElementById('results').innerHTML = formattedResults; // Display the results
    });
});


*/




/*for sherlock*/

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
    .then(text => {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        // Split the result into an array of strings and create links
        const results = text.split('[+]')
            .map(result => result.trim())
            .filter(result => result)
            .map(result => {
                const parts = result.split(': ');
                if (parts.length === 2) {
                    const siteNameWithDomain = parts[0].trim();
                    const url = parts[1].trim();
                    return `<a href="${url}" target="_blank">${siteNameWithDomain}</a>`;
                }
                return result; // If the format does not match, return the original result
            })
            .join('<br>');

        resultsContainer.innerHTML = results; // Display the results as clickable links
    });
});




/*for blockchain analysis*/

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