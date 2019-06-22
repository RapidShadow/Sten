$(document).ready(function() {
  let products = {
    original: {
      product: "original",
      image: "images/original.png",
      price: "$8.00",
      status: "sold out",
      text: "A trusable flavor. Good for a day at the office to a walk on the beach."
    }
  }
  //loopping the JSon object in the website to load content
  for (let key in products) {
    let mContent = `
    <div class="card" id="${key}">
  <p class="stuff">${products[key]["product"]}</p>
  <img src=${products[key]["image"]} class="poster" >
  <p class="stuff">${products[key]["price"]}<p>
  <p class="stuff">${products[key]["status"]}<p>
</div>`
    $("#display-area").append(mContent);
  }

  $(".card").click(function() {
    let cardId = $(this).attr("id");
    $("body").empty();
    let newNav = `
     <nav>
      <ul class="left">
        <li><a href="home.html">home</a></li>
        <li> <a href="index.html">about</a></li>
        <li> <a href="shop.html">shop</a></li>
        <li> <a href="contact.html">contact</a></li>
      </ul>
      <img src="images/logo.png" id="logo">
      <a href="shop.html"><img src="images/cart.png" id="cart" class="right"> </a>
    </nav>
    `
    $("body").append(newNav);

    let newElement = `
    <div id="backdiv">
    <a href="shop.html" id="back">back</a>
    <div>
    <div class="text">
    <img src="${products[cardId]["image"]}" class="pImage">
    <p class="pName">${products[cardId]["product"]}</p>
    <p class="desc">${products[cardId]["text"]}  </p>
    <p class="buy">${products[cardId]["status"]}</p>
    <div>
    <hr>
    <p id="copyright">Copyright © 2019 All Rights Reserved. Trademarked 2019 by RØG.INC ®</p>

  `
    $("body").append(newElement);
  })

  let points = 0

  $("#logo").click(function() {
    points++;
    console.log(points);
    if (points >= 6) {
      $("body").empty()
      let newElement = `<embed src="dark.mp3" width="0" height="0" loop="true" autostart="true" hidden="true" />
    <div id="demlogo">
    <img src="images/demLogo.png" width="100px" height="100px" class="demLogo">
    </div>
    <p class="dem">Smoking kills bro, but im not your mother so do what you want.</p>
    <p id=hidden>Smoking kills bro, but im not your mother so do what you want.</p>
    <div id="demlogo2">
    <img src="images/demon.png" id="seal">
    </div>
    `

      $("body").append(newElement);
      $("body").css({
        "background-color": "black"
      });
      $("#seal").click(function() {
        $(".dem").toggle();
        $("#hidden").fadeToggle("slow", "linear");

      });

    }
  })
})
