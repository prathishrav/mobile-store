const data = [
  {
    id: 1,
    name: "iphone1",
    model: "12pro",
    price: "2000",
    image: "/Allmobiles/i2.webp",
    detailimages: [
      {
        id: "1",
        image: "/Allmobiles/i2.webp",
        productID:"p1",
        products: ["/Allmobiles/i2.webp", "/Allmobiles/i3.webp", "/Allmobiles/i2.webp", "/Allmobiles/i2.webp"],
        details: "Apple iphoe 15pro",
        amount:"20000"
      },
      {
        id: "2",
        image: "/Allmobiles/i3.webp",
        productID:"p2",
        products: ["/Allmobiles/i3.webp", "/Allmobiles/i3.webp", "/Allmobiles/i3.webp", "/Allmobiles/i3.webp"],
        details: "Apple iphone 17pro",
        amount:"20000"
      },
      {
        id: "3",
        image: "/Allmobiles/i4.webp",
        productID:"p3",
        products: ["/Allmobiles/i4.webp", "/Allmobiles/i4.webp", "/Allmobiles/i4.webp", "/Allmobiles/i4.webp"],
        details: " Apple iphoe 17pro",
        amount:"20000"
      },
      {
        id: "4",
        image: "/Allmobiles/i5.webp",
        productID:"p4",
        products: ["/Allmobiles/i5.webp", "/Allmobiles/i5.webp", "/Allmobiles/i5.webp", "/Allmobiles/i5.webp"],
        details: "Apple iphoe 17pro",
        amount:"20000"

      },
    ],
    brand: "/brands/apple.webp",
  },
  {
    id: 2,
    name: "onplus",
    model: "11",
    price: "2000",
    image: "/Allmobiles/op10.webp",
    detailimages: [
      {
        id: "5",
        image: "/Allmobiles/op10r.webp",
        productID:"p5",
        products: ["/Allmobiles/op10r.webp", "/Allmobiles/op10r.webp", "/Allmobiles/op10r.webp", "/Allmobiles/op10r.webp"],
        details: "SomeDetails1",
        amount:"20000"
      },
      {
        id: "6",
        image: "/Allmobiles/op10t.webp",
        productID:"p6",
        products: ["/Allmobiles/op10t.webp", "/Allmobiles/op10t.webp", "/Allmobiles/op10t.webp", "/Allmobiles/op10t.webp"],
        details: "SomeDetails2",
        amount:"20000"
      },
      {
        id: "7",
        image: "/Allmobiles/op11.webp",
        productID:"p7",
        
        products: ["/Allmobiles/op11.webp", "/Allmobiles/op11.webp", "/Allmobiles/op11.webp", "/Allmobiles/op11.webp"],
        details: "SomeDetails3",
        amount:"20000"
      },
      {
        id: "8",
        image: "/Allmobiles/op11r.webp",
        productID:"p8",
        products: ["/Allmobiles/op11r.webp", "/Allmobiles/op11r.webp", "/Allmobiles/op11r.webp", "/Allmobiles/op11r.webp"],
        details: "SomeDetails4",
        amount:"20000"
      },
    ],
    brand: "/brands/Oneplus.webp",
  },
  {
    id: 3,
    name: "oppo",
    model: "7",
    price: "2000",
    image: "/Allmobiles/oppoa38.webp",
    detailimages: [
      {
        id: "9",
        image: "/Allmobiles/oppoa17.webp",
        productID:"p9",
        products: ["/Allmobiles/oppoa17.webp", "/Allmobiles/oppoa17.webp", "/Allmobiles/oppoa17.webp", "/Allmobiles/oppoa17.webp"],
        details: "SomeDetails5",
        amount:"20000"
      },
      {
        id: "10",
        image: "/Allmobiles/oppa38.webp",
        productID:"p10",
        products: ["/Allmobiles/oppa38.webp", "/Allmobiles/oppa38.webp", "/Allmobiles/oppa38.webp", "/Allmobiles/oppa38.webp"],
        details: "SomeDetails6",
        amount:"20000"
      },
      {
        id: "11",
        image: "/Allmobiles/oppor8.webp",
        productID:"p11",
        products: ["/Allmobiles/oppor8.webp", "/Allmobiles/oppor8.webp", "/Allmobiles/oppor8.webp", "/Allmobiles/oppor8.webp"],
        details: "SomeDetails7",
        amount:"20000"
      },
      {
        id: "12",
        image: "/Allmobiles/oppoa78.webp",
        productID:"p12",
        products: ["/Allmobiles/oppoa78.webp", "/Allmobiles/oppoa78.webp", "/Allmobiles/oppoa78.webp", "/Allmobiles/oppoa78.webp"],
        details: "SomeDetails8",
        amount:"20000"
      },
    ],
    brand: "/brands/oppo.webp",
  },
  {
    id: 4,
    name: "samsung",
    model: "11",
    price: "2000",
    image: "/Allmobiles/s21.webp",
    detailimages: [
      {
        id: "13",
        image: "/Allmobiles/s21.webp",
        productID:"p13",
        products: ["/Allmobiles/s21.webp", "/Allmobiles/s21.webp", "/Allmobiles/s21.webp", "/Allmobiles/s21.webp"],
        details: "SomeDetails9",
        amount:"20000"
      },
      {
        id: "14",
        image: "/Allmobiles/s3.webp",
        productID:"p14",
        products: ["/Allmobiles/s3.webp", "/Allmobiles/s3.webp", "/Allmobiles/s3.webp", "/Allmobiles/s3.webp"],
        details: "SomeDetails10",
        amount:"20000"
      },
      {
        id: "15",
        image: "/Allmobiles/sa.webp",
        productID:"p15",
        products: ["/Allmobiles/sa.webp", "/Allmobiles/sa.webp", "/Allmobiles/sa.webp", "/Allmobiles/sa.webp"],
        details: "SomeDetails11",
        amount:"20000"
      },
      {
        id: "16",
        image: "/Allmobiles/sa34.webp",
        productID:"p16",
        products: ["/Allmobiles/sa34.webp", "/Allmobiles/sa34.webp", "/Allmobiles/sa34.webp", "/Allmobiles/sa34.webp"],
        details: "SomeDetails12",
        amount:"20000"
      },
    ],
    brand: "/brands/samsung.webp",
  },
  {
    id: 5,
    name: "vivo",
    model: "12",
    price: "2000",
    image: "/Allmobiles/vivo1.webp",
    detailimages: [
      {
        id: "17",
        image: "/Allmobiles/vivo v27.webp",
        productID:"p17",
        products: ["/Allmobiles/vivo v27.webp", "/Allmobiles/vivo v27.webp", "/Allmobiles/vivo v27.webp", "/Allmobiles/vivo v27.webp"],
        details: "SomeDetails13",
        amount:"20000"
      },
      {
        id: "18",
        image: "/Allmobiles/vivo v29e.webp",
        productID:"p18",
        products: ["/Allmobiles/vivo v29e.webp", "/Allmobiles/vivo v29e.webp", "/Allmobiles/vivo v29e.webp", "/Allmobiles/vivo v29e.webp"],
        details: "SomeDetails14",
        amount:"20000"
      },
      {
        id: "19",
        image: "/Allmobiles/vivo y16.webp",
        productID:"p19",
        products: ["/Allmobiles/vivo y16.webp", "/Allmobiles/vivo y16.webp", "/Allmobiles/vivo y16.webp", "/Allmobiles/vivo y16.webp"],
        details: "SomeDetails15",
        amount:"20000"
      },
      {
        id: "20",
        image: "/Allmobiles/vivoy27.webp",
        productID:"p20",
        products: ["/Allmobiles/vivoy27.webp", "/Allmobiles/vivoy27.webp", "/Allmobiles/vivoy27.webp", "/Allmobiles/vivoy27.webp"],
        details: "SomeDetails16",
        amount:"20000"
      },
    ],
    brand: "/brands/vivo.webp",
  },
];

export default data;
