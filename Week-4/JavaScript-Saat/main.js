let fullName = prompt("Please enter your name");

let person = (document.querySelector("#myName").innerHTML = fullName);

document.addEventListener("DOMContentLoaded", function () {
  function showTime() {
    var date = new Date(); // Şimdiki tarihi ve saati alır
    var time = date.toLocaleTimeString(); // Saati 'hh:mm:ss AM/PM' formatında alır
    document.getElementById("myClock").innerHTML = time; // 'myClock' id'li div'in içeriğini günceller
  }

  setInterval(showTime, 1000); // Her 1000 milisaniyede (yani her saniyede) showTime fonksiyonunu çalıştırır
});
