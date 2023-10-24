const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Hp",
    price: 59990,
    colors: [
      {
        code: "black",
        img: "./image/hpBlack.jpg",
      },
      {
        code: "darkblue",
        img: "../image/hpWhite.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Dell",
    price: 69990,
    colors: [
      {
        code: "black",
        img: "./image/dellBlack.jpg",
      },
      {
        code: "lightgray",
        img: "./image/dellWhite.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Acer",
    price: 79990,
    colors: [
      {
        code: "black",
        img: "./image/acerBlack.jpg",
      },
      {
        code: "lightgray",
        img: "./image/acerWhite.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Asus",
    price: 89990 ,
    colors: [
      {
        code: "black",
        img: "./image/asusBlack.jpg",
      },
      {
        code: "lightgray",
        img: "./image/asusWhite.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Lenovo",
    price:  49990 ,
    colors: [
      {
        code: "black",
        img: "./image/lenovoBlack.jpg",
      },
      {
        code: "lightgray",
        img: "./image/lenovoGray.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" +" "+ choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
