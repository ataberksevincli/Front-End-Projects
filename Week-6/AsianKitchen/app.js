const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

////////////////////////////////////buton eklemek için///////////////////////////////////////////////
const buttonDOM = document.querySelector('#buttons')
//buton oluşturma ve buton özellikleri tanımlama
const buttonFunc = (buttonName) => `<button type="button" class="btn btn-outline-dark">${buttonName}</button>`
//buttonName için gelecek isimleri bir listeye tanımlama
const buttonNames = ["All", "Korea", "Japan", "China"]

//buttonDOM.innerHTML = buttonFunc("All")
//liste elemanlarının her birini sırayla buttonName değişkenine atamak için
buttonNames.forEach(item => {
  buttonDOM.innerHTML += buttonFunc(item)
});


///////////////////listeleme biçimi için fonksiyon tanımlama

const listItemFunc = (product) => {
  //fonksiyonun yeni bir div açması sağlandı
  let listItem = document.createElement('div');
  listItem.className = "col-6"

  //açılacak div'in konumu belirlendi
  const listItemDOM = document.querySelector('#listItemDOM');

  //yeni açılan div in içeriği hazırlandı
  listItem.innerHTML = `
    <div class="mb-3">
      <div class="row g-0 menu-items">
        <div class="col-md-4 photo">
          <img src = ${product.img} class="img-fluid rounded-start" alt="" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="col-md-8">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${product.title}</h4>
              <h4>${product.price}</h4>
            </div>
            <p class="menu-text">${product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  `

  //içeriği doldurulan divin ekranda nereye yazılacağı belirtildi
  listItemDOM.appendChild(listItem);
}
//sayfa yüklendiğinde bütün menünün gelmesi için;
////menüdeki değerler fonksiyona parametre olarak gönderildi
menu.forEach(
  function (obj) {
    listItemFunc(obj)
  }
);

//butonlara fonksiyon ekleme
buttonDOM.addEventListener("click" , filterFunction)


//if yapısı kullanarak filtreleme -çalışıyor-
function filterFunction(e) {

  //önce sayfa boşaltıldı
  document.querySelector('#listItemDOM').innerHTML = '';

  if (e.target.textContent === "Korea") {
    menu.forEach(function(item) {
      if (item.category === 'Korea') {
          listItemFunc(item);
      }
    });
  }
  else if (e.target.textContent === "Japan"){
    menu.forEach(function(item) {
      if (item.category === 'Japan') {
          listItemFunc(item);
      }
    });
  }
  else if (e.target.textContent === "China"){
    menu.forEach(function(item) {
      if (item.category === 'China') {
          listItemFunc(item);
      }
    });
  }
  else if (e.target.textContent === "All"){
    menu.forEach(
      function (obj) {
        listItemFunc(obj)
      }
    );
  }
}


//filter kullanarak filtreleme //chat GPT önerisi
// function filterFunction(e) {

//   document.querySelector('#listItemDOM').innerHTML = '';

//   const category = e.target.textContent;
//   const filteredMenu = category === "All" ? menu : menu.filter(item => item.category === category);

//   filteredMenu.forEach(listItemFunc);

// }




