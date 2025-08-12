let increaseButton = document.getElementById("increaseButton");
let decreaseButton = document.getElementById("decreaseButton");
let resetButton = document.getElementById("resetButton");
let angka = document.getElementById("Angka");
let awal = 0;

increaseButton.onclick = function(){
    awal++;
    angka.textContent = awal;
};

decreaseButton.onclick = function(){
    awal--;
    angka.textContent = awal;
};

resetButton.onclick = function(){
    awal = 0;
    angka.textContent = awal;
};


