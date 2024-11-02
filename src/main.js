let inputsRadio = document.querySelectorAll("[type='radio']");

let index = 1;

let interval = setInterval(()=> {
    inputsRadio[index].checked = true;
    index++;
    
    if (index >= inputsRadio.length) index = 0;
},6000)


inputsRadio.forEach(radio => radio.addEventListener('click', () => clearInterval(interval)))

