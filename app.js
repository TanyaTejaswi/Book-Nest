const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Maths",
    price: 999,
    sizes: [
      {
        code: "10",
        img: "./photoes/maths2.png",
      },
      {
        code: "9",
        img: "./photoes/maths3.png",
      },
      {
        code: "8",
        img: "./photoes/maths4.png",
      },
    ],
  },
  {
    id: 2,
    title: "Physics",
    price: 889,
    sizes: [
      {
        code: "5",
        img: "./photoes/physics2.png",
      },
      {
        code: "6",
        img: "./photoes/physics3.png",
      },
      {
        code: "7",
        img: "./photoes/physics4.png",
      },
    ],
  },
  {
    id: 3,
    title: "Litrature",
    price: 1372,
    sizes: [
      {
        code: "11",
        img: "./photoes/litrature2.png",
      },
      {
        code: "12",
        img: "./photoes/litrature3.png",
      },
      {
        code: "13",
        img: "./photoes/litrature4.png",
      },
    ],
  },
  {
    id: 4,
    title: "Fiction",
    price: 772,
    sizes: [
      {
        code: "22",
        img: "./photoes/fiction2.png",
      },
      {
        code: "23",
        img: "./photoes/fiction3.png",
      },
      {
        code: "24",
        img: "./photoes/fiction4.png",
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "Hippie",
  //   price: 99,
  //   colors: [
  //     {
  //       code: "gray",
  //       img: "./img/hippie.png",
  //     },
  //     {
  //       code: "black",
  //       img: "./img/hippie2.png",
  //     },
  //   ],
  // },
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
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.sizes[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.sizes[index].img;
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