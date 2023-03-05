let btn = document.getElementById('shipBtn');
let infoForm = document.getElementById('infoForm');
let payForm = document.getElementById('payForm');
let visaBtn = document.getElementById('visaBtn');
let cashBtn = document.getElementById('cashBtn');
let visaForm = document.getElementById('visaForm');
let infoBtn = document.getElementById('infoBtn');
let payBtn = document.getElementById('payBtn');
let cashMsg = document.getElementById('cashMsg');

visaBtn.onclick = function(){
    visaForm.classList.remove('hide');
    cashMsg.classList.add('hide');
}
cashBtn.onclick = function(){
    visaForm.classList.add('hide');
    cashMsg.classList.remove('hide');
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



// loop cart

var items = [
    ['Logitek', 'EGP 60.000,00', '../images/checkout/iphone11.webp'],
    ['MSI', 'EGP 300.000,00', '../images/checkout/iphone11.webp'],
    ['Genius', 'Rp 50.000,00', 'Genius Mouse'],
    ['Jerry', 'Rp 30.000,00', 'Jerry Mouse']
  ]
  
let content = '';

let productsCartArray=[]

productsCartArray = JSON.parse(localStorage.getItem("product"));
  
productsCartArray.forEach(p => {
    content += `
            <div class="row g-0">
                  <div class="col-md-4">
                    <img 
                      src="${p.imgSrc}"
                      class="img-fluid rounded-start"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title" id="productName">${p.name}</h5>
                      <p class="card-text" >
                        <small class="text-muted" id="productPrice">${p.price}</small>
                      </p>
                    </div>
                  </div>
                </div><br><hr class="hr" /><br>
    `
  });
  
  document.querySelector("#shop").innerHTML = content;