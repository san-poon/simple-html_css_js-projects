let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
    if (document.body.style.backgroundColor == 'cyan')
    {
        document.body.style.backgroundColor = 'white';
    }
    else {
        document.body.style.backgroundColor = 'cyan';
    }
})