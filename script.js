const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const scripturl = 
'https://script.google.com/macros/s/AKfycbxdTYxwYBRQSA8ctRHTy7Mno7C_QSpiTV6HRDCF5McatgoCJa9T0N-iXWK8NchV5YdqMQ/exec'
const form = document.form['google-sheet']
