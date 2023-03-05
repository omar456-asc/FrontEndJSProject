let btn = document.getElementById('shipBtn');
let infoForm = document.getElementById('infoForm');
let payForm = document.getElementById('payForm');
let visaBtn = document.getElementById('visaBtn');
let cashBtn = document.getElementById('cashBtn');
let visaForm = document.getElementById('visaForm');

visaBtn.onclick = function(){
    visaForm.classList.remove('hide');
}
cashBtn.onclick = function(){
    visaForm.classList.add('hide');
}

btn.onclick = function(){
    infoForm.classList.toggle('hide');
    payForm.classList.toggle('hide');
}
