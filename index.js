const wrapper = document.querySelector(".sliderwrapper");

// wrapper.style.transform = "translatex(-200vW)"

const items = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let choosenProduct = products[0];

const productImage = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productprice");
const productDesc = document.querySelector(".productdesc");
const productColors = document.querySelectorAll(".color");
const productSize = document.querySelectorAll(".size");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.style.borderBottom = "none";
    });
    choosenProduct = products[index];
    productImage.src = choosenProduct.colors[0].img;
    productPrice.textContent = "$" + choosenProduct.price;
    productTitle.textContent = choosenProduct.title;
    productColors.forEach((col, index) => {
      col.style.backgroundColor = choosenProduct.colors[index].code;
      col.addEventListener("click", () => {
        productImage.src = choosenProduct.colors[index].img;
      });
    });
    wrapper.style.transform = `translatex(-${100 * index}vW)`;
    item.style.borderBottom = "2px solid lawngreen";
  });
});

productSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    productSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});



const payment = document.querySelector(".payment")
const BuyButton = document.querySelector(".buybutton")
const Close = document.querySelector(".close")


BuyButton.addEventListener("click",()=>{
  payment.style.display="flex"
})


Close.addEventListener("click",()=>{
  payment.style.display="none"
})










