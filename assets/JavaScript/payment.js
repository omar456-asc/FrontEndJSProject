let btn = document.getElementById('shipBtn');
let infoForm = document.getElementById('infoForm');
let payForm = document.getElementById('payForm');
let visaBtn = document.getElementById('visaBtn');
let cashBtn = document.getElementById('cashBtn');
let visaForm = document.getElementById('visaForm');
let infoBtn = document.getElementById('infoBtn');
let payBtn = document.getElementById('payBtn');

visaBtn.onclick = function(){
    visaForm.classList.remove('hide');
}
cashBtn.onclick = function(){
    visaForm.classList.add('hide');
}

btn.onclick = function(){
    infoForm.classList.toggle('hide');
    payForm.classList.toggle('hide');
    infoBtn.classList.remove('bold');
    payBtn.disabled = false;
    payBtn.classList.add('bold');
}
infoBtn.onclick = function(){
    infoForm.classList.toggle('hide');
    payForm.classList.toggle('hide');
    infoBtn.classList.add('bold');
    payBtn.disabled = true;
    payBtn.classList.remove('bold');
}
