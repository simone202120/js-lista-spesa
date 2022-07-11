const listaspesa= ['latte', 'sale', 'acqua','uova', 'pane','carne'];
let lista = document.getElementById('lista');
let i=0;

while(i<listaspesa.length){
    lista.innerHTML += ` <li>${listaspesa[i]}</li>`;
    i++;
}
