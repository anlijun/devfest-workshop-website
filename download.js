import('node-fetch').then(fetch => {
    const fs = require('fs');

    const url = 'https://unpkg.com/audiomotion-analyzer@4.3.0/dist/audiomotion-analyzer.min.js';
    const path = 'js/audiomotion-analyzer.min.js';

    fetch.default(url)
        .then(res => res.text())
        .then(body => {
            fs.writeFile(path, body, err => {
                if (err) {
                    console.error(err);
                }
            });
        });
});