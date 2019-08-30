


const deger = Math.floor(Math.random() * 100 -1);
console.log(deger);

let hak = 5;

function tahmin(){
    const sayi = document.querySelector("#sayi").value;
    const sonuc = document.getElementById("yakin");

    if(sayi <= 100  && sayi >= 0){

        if(sayi == deger){
            sonuc.innerHTML = "Doğru " + " Değer: " + deger;
        }
        else if(sayi > deger){
            sonuc.innerHTML = "Biraz Aşağı İn.";
        }
        else{
            sonuc.innerHTML = "Biraz Yukarı Çık."
        }

        //HAK

        hak--;
        console.log(hak);
        if(hak === 5){
            sonuc.innerHTML = sonuc.textContent + "<br>" + "Kalan Hak: " + hak;
        }
        else if(hak === 4){
            sonuc.innerHTML = sonuc.textContent + "<br>" + "Kalan Hak: " + hak;
        }
        else if(hak === 3){
            sonuc.innerHTML = sonuc.textContent + "<br>" + "Kalan Hak: " + hak;
        }
        else if(hak === 2){
            sonuc.innerHTML = sonuc.textContent + "<br>" + "Kalan Hak: " + hak;
        }
        else if(hak === 1){
            sonuc.innerHTML = sonuc.textContent + "<br>" + "Kalan Hak: " + hak;
        }
        else if(hak < 0){
            sonuc.innerHTML = "Malesef Hakkın Kalmadı" +"<br><br> "+ "Bulman Gereken Sayı : " + deger + "<br>" + "Tekrar Oynamak için " + "<button onclick='reloaded()'>Tekrar</button>";
            
        }
    }
    else{
        sonuc.innerHTML = "0 ile 100 arasında bir sayı olmalı.";

    }    
}



function reloaded(){
    window.location.reload();
}