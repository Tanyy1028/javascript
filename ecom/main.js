  const products = [
    {
      "id": 1,
      "title": "RoboRex",
      "price": 199,
      "description": "A fun and interactive dinosaur robot with LED eyes, sounds, and walking action.",
      "category": "men's clothing",
      "image": "images/i1.jpg",
      "qyt": "1",

    },
    {
      "id": 2,
      "title": "BlockMaster City Builder Set ",
      "price": 299,
      "description": "Build cars, buildings, and more with this colorful interlocking block set.",
      "category": "men's clothing",
      "image": "images/i2.jpg",
      "qyt": "1",
    },
    {
      "id": 3,
      "title": "Tiny Town Cars ",
      "price": 599,
      "description": "A set of colorful micro cars with smooth-rolling wheels. Perfect for small hands.",
      "category": "men's clothing",
      "image": "images/i3.jpg",
      "qyt": "1",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Teddy CuddleBear",
      "price": 199,
      "description": "TUltra-soft and huggable. Perfect bedtime buddy for kids of all ages",
      "category": "men's clothing",
      "image": "images/i4.jpg",
      "qyt": "1",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "RaceMaster Turbo Car",
      "price": 695,
      "description": "High-speed racer with rubber wheels and cool paintwork. No batteries needed!",
      "category": "jewelery",
      "image": "images/i5.jpg",
      "qyt": "1",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Mini RC Construction Truck ",
      "price": 168,
      "description": "Remote-controlled dump truck with working bed and lights. Great for sandbox fun!",
      "category": "jewelery",
      "image": "images/i6.jpg",
      "qyt": "1",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "Mini Arcade Machine",
      "price": 799,
      "description": "Tiny handheld game console packed with classic games and pixel fun.",
      "category": "jewelery",
      "image": "images/i7.jpg",
      "qyt": "1",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Princess Fantasy Castle Playset",
      "price": 1099,
      "description": "Includes princess dolls, a foldable castle, and royal furniture.",
      "category": "jewelery",
      "image": "images/i8.jpg",
      "qyt": "1",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "id": 9,
      "title": "Stack & Roll Rings ",
      "price": 64,
      "description": "Colorful stacking rings that promote early coordination and color learning.",
      "category": "electronics",
      "image": "images/i9.jpg",
      "qyt": "1",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "id": 10,
      "title": "SRoboDuck ",
      "price": 109,
      "description": "Floats and swims in the water. Wind it up and watch it go!",
      "category": "electronics",
      "image": "images/i10.jpg",
      "qyt": "1",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "id": 11,
      "title": "TransformaBot",
      "price": 122,
      "description": "Switch from car to robot with a few simple moves. Durable and exciting.",
      "category": "electronics",
      "image": "images/i11.jpg",
      "qyt": "1",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "id": 12,
      "title": "GiggleBot",
      "price": 114,
      "description": "Speaks fun phrases and plays music. Helps with language and rhythm learning.",
      "category": "electronics",
      "image": "images/i12.jpg",
      "qyt": "1",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "CyberHero Blaze",
      "price": 599,
      "description": "Shoots fire missiles (safe foam), glows in red, and delivers flaming justice.",
      "category": "electronics",
      "image": "images/i13.jpg",
      "qyt": "1",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 14,
      "title": "BubbleBlaster 2000  ",
      "price": 999.99,
      "description": "Shoots out hundreds of bubbles per minute. Refillable and fun for all ages.",
      "category": "electronics",
      "image": "images/i14.jpg",
      "qyt": "1",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 15,
      "title": "RocketBot Blaze",
      "price": 569,
      "description": "Shoots up with a press of a button. Includes reusable mini rocket.",
      "category": "women's clothing",
      "image": "images/i15.jpg",
      "qyt": "1",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Magic Cube",
      "price": 295,
      "description": "A cube you can twist, spin, and click. Keeps fingers busy and focused.",
      "category": "women's clothing",
      "image": "images/i16.jpg",
      "qyt": "1",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 17,
      "title": "ColorMe Craft Bear ",
      "price": 399,
      "description": "Comes with washable markers for endless creative fun on a plush bear.",
      "category": "women's clothing",
      "image": "images/i17.jpg",
      "qyt": "1",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "id": 18,
      "title": "Pirate Duck  ",
      "price": 299,
      "description": "One-eyed pirate duck with a rubber sword and pirate hat. Yo ho and a splash of fun!",
      "category": "women's clothing",
      "image": "images/i18.jpg",
      "qyt": "1",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "id": 19,
      "title": "Animal Friends Puzzle",
      "price": 795,
      "description": "Wooden puzzle with cute animal shapes. Develops motor skills and memory.",
      "image": "images/i19.jpg",
      "qyt": "1",
    
    },
    {
      "id": 20,
      "title": "Gundam RX-78 Poseable Action Figure",
      "price": 499,
      "description": " A small, affordable, app-enabled robot ball that introduces programming and can be controlled with sensors.",
      "image": "images/i20.jpg",
      "qyt": "1",
    
    }
  ];



  // <div class="product-box">
  //   <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="LD01 Chair">
  //   <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
  //   <h5>109.95,</h5>
  //   <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
  //   <button>Add To Cart</button>
  // </div>


  const pro = document.querySelector(".products")
  const main = document.querySelector(".cart");
  let cartList = JSON.parse(localStorage.getItem("cart"));

  function displayProducts() {
    pro.innerHTML = "";
    products.map((product) => {
      const box = document.createElement("div");
      box.className = "product";

      const img = document.createElement("img");
      img.src = product.image;

      const title = document.createElement("h4");
      title.textContent = product.title;

      const price = document.createElement("h5");
      price.textContent = "₹" + product.price;

      const dis = document.createElement("p");
      dis.textContent = product.description;

      const btn = document.createElement("button");
      btn.textContent = "Add To Cart";


      btn.addEventListener("click", () => {
        addToCart(product);
      });


      box.appendChild(img);
      box.appendChild(title);
      box.appendChild(price);
      box.appendChild(dis);
      box.appendChild(btn);
      pro.appendChild(box);

    });
  }



  function displayCart() {
    main.innerHTML = "";
    let total = 0;
    cartList.map((cart, index) => {
      
      const box = document.createElement("div");
      box.className = "p";

      const img = document.createElement("img");
      img.src = cart.image;

      const title = document.createElement("h4");
      title.textContent = cart.title;

      const price = document.createElement("p");
      price.textContent = "₹" + cart.price;

      const qty = document.createElement("p");
      qty.textContent = "Qty: " + cart.qyt;


      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.addEventListener("click", () => {
        removeFromCart(index)
      })

      box.appendChild(img);
      box.appendChild(title);
      box.appendChild(price);   
      box.appendChild(btn);
      box.appendChild(qty);

      main.appendChild(box);


      total += cart.price * parseInt(cart.qyt);
    });


    const totalDisplay = document.createElement("h1");
    totalDisplay.textContent = "Total : " + total + " /-";
    main.appendChild(totalDisplay);


  }


  function addToCart(product) {
    const existing = cartList.find(item => item.id === product.id);
    if (existing) {
      existing.qyt = (parseInt(existing.qyt) + 1).toString();
    } else {
      cartList.push({ ...product });
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
    displayCart();
  }




  function removeFromCart(index) {
    cartList.splice(index, 1); // [1,2], [1]
    localStorage.setItem("cart", JSON.stringify(cartList));
    displayCart(); // display remaing products in cart after deleting
  }



  displayProducts();
  displayCart();


  // function displayCart() {
  //   cartDiv.innerHTML = "";
  //   let total = 0;
  //   cartList.map((cart, index) => {
  //     const cartBox = document.createElement("div");
  //     const img = document.createElement("img");
  //     const detail = document.createElement("div");
  //     const title = document.createElement("h3");
  //     const price = document.createElement("h2");
  //     const button = document.createElement("button");

  //     cartBox.className = "cart-box";
  //     img.src = cart.image;
  //     detail.className = "detail";
  //     title.textContent = cart.title;
  //     price.textContent = "Rs. " + cart.price + "/-";
  //     button.textContent = "Delete";
  //     button.onclick = () => {
  //       removeFromCart(index);
  //     };

  //     detail.appendChild(title);
  //     detail.appendChild(price);
  //     detail.appendChild(button);

  //     cartBox.appendChild(img);
  //     cartBox.appendChild(detail);

  //     cartDiv.appendChild(cartBox);
  //     total += cart.price; // +=
  //   });
  //   // console.log(total);
  //   const totalDisplay = document.createElement("h1");
  //   totalDisplay.textContent = "Total : " + total + " /-";
  //   cartDiv.appendChild(totalDisplay);
  // }





















  // < img src = "images/c1.jfif" >
  //   <div class="con">
  //     <h4>LD04 LOUNGE CHAIR</h4>
  //     <p>$200</p>
  //     <button>Delete</button>
  //   </div>


  // const AddTo= document.querySelector(".cart-items");

  // const main = document.createElement("div");
  // main.className = "p";


  // const img = createElement("img");
  // img.src ="images/c1.jfif";

  // const title = createElement("h4");
  // title.textContent="LD04 LOUNGE CHAIR";

  // const price = createElement("p");
  // price.textContent="$200";

  // const btn = createElement("button");
  // btn.textContent="Delete";

  // main.appendChild(img);
  // main.appendChild(title);
  // main.appendChild(price);
  // main.appendChild(btn);

  // AddTo.appendChild(main);


  // AddTo.appendChild(div);


  // <div class="p">
  //   <img src="images/c1.jfif">
  //     <h4>LD04 LOUNGE CHAIR</h4>
  //     <p>$200</p>
  //     <button>Delete</button>
  // </div>
