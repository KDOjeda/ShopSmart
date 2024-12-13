//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "UA Dynamic Select Training Shoes Fitness Shoes",
      description: "Under Armor Dynamic Select Training Shoes sneakersDesigned for gym workouts.Under Armor shoesWhile it offers the flexibility and comfort you need for fitness or HIIT exercises, it does not compromise on performance. You can also use it during morning walks.fitness shoesThanks to its breathable structure, it does not cause sweating and supports foot health.",
      price: 4178,
      brand: "Under Armour",
      category: "FootWear",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://underarmour.scene7.com/is/image/Underarmour/3026609-001_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        },
        {
          id: 2,
          image:
            "https://underarmour.scene7.com/is/image/Underarmour/3026609-001_TOE?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        },
        {
          id: 3,
          image:
            "https://underarmour.scene7.com/is/image/Underarmour/3026609-001_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        },
      ],
      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "64a654593e91b8e73a351e9b",
          rating: 4,
          comment:
            "good enough. I like the camera and casing. the delivery was fast too.",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "example1@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2023-06-26T15:40:52.558Z",
            updatedAt: "2023-06-26T15:40:52.558Z",
            role: "USER",
          },
        },
      ],
    },
    {
      id: "64a4ebe300900d44bb50628a",
      name: "Nike Alpha Menace Pro 3",
      description:
        "Rubber sole",
      price: 6512.98,
      brand: "Nike",
      category: "FootWear",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/I/71pWYNAKEcL._AC_SY575_.jpg",
        },
        {
          id: 2,
          image:
            "https://m.media-amazon.com/images/I/61tqI2tRenL._AC_SY575_.jpg",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/I/81SC5GXQujL._AC_SY575_.jpg",
        },
      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "648437b38c44d52b9542e340",
      name: "Under Armour Squeeze Water Bottle",
      description:
        "Under Armour's 32 oz squeeze water bottles hold liquid with a quick-shot lid and one-way valve for quick hydration, perfect for sports water bottles squeeze, gym water bottles for men and women, and more.",
      price: 528.08,
      brand: "Under Armour",
      category: "Accesories",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/I/71QhN4Is0NL._AC_SX679_.jpg",
        },
        {
          id: 2,
          image:
            "https://m.media-amazon.com/images/I/6155xOsl81S._AC_SX679_.jpg",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/I/613HOz0N1oS._AC_SX679_.jpg",
        },
      ],
      reviews: [
      
      ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "EyeBlack Anti-Glare Under Eye Black Sports Grease Stick for Pro Performance",
      description:
        " This powerful grease stick is not just for sports—it's your secret weapon to amplify your athletic prowess! From the football field to the baseball diamond and the softball pitch, this grease stick is your ultimate companion.",
      price: 280,
      brand: "EyeBlack",
      category: "Accesories",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/I/61FVYF-uMuL._AC_SX679_.jpg",
        },
        {
          id: 2,
          image:
            "https://m.media-amazon.com/images/I/51xrWKsnobL._AC_SX679_.jpg",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/I/61FNPZmJ+hL._AC_SX679_.jpg",
        },
        
      ],
      reviews: [],
    },
    {
      id: "649d775128b6744f0f497040",
      name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
      description:
        'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
      price: 50,
      brand: "Nerunsa",
      category: "Watch",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/I/71s4mjiit3L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
          id: 2,
          image:
            "https://m.media-amazon.com/images/I/71zbWSRMaYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
      ],
      reviews: [],
    },

    {
      id: "64c3e7f83a5b8d7d8539021a",
      name: 'Pole Vault Pits and Pit Covers & Shelters',
      description: "An ASTM approved vault box collar changes the  slope of the tri-slant area when vaulting poles rotate. Gill's thoughtful pit entry design accounts for the box collar's effect by featuring a vaulter friendly angle.",
      price: 59799,
      brand: "GILL",
      category: "Facilities&SetUp",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://www.everythingtrackandfield.com/images/5893_1.jpg?resizeid=14&resizeh=1200&resizew=1200",
        },
        {
          id: 2,
          image:
            "https://www.everythingtrackandfield.com/images/5893_2.jpg?resizeid=14&resizeh=1200&resizew=1200",
        },
      ],
      reviews: [
    
      ],
    },

    {
      id: "64d1f5e72b8c9c7e9421038f",
      name: "Santos Laguna Charly 2024/25 Authentic Goalkeeper Jersey - PinkB",
      description:
       "Represent your favorite Liga MX squad from goal to goal with this Santos Laguna Authentic Goalkeeper Jersey from Charly. This authentic goalkeeper jersey boasts vibrant Santos Laguna graphics that stand out as boldly as your saves. Featuring DRY FACTOR technology, this jersey effectively absorbs moisture to keep you dry and cool, whether you're guarding the net or cheering from the stands.",
      price: 5280,
      brand: "Santos Laguna",
      category: "Apparel",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://fanatics.frgimages.com/santos-laguna/mens-charly-pink-santos-laguna-2024/25-authentic-goalkeeper-jersey_ss5_p-201683455+pv-2+u-7vakdib9vkabdnlvyppc+v-kwvme67dsgidfaufijyo.jpg?_hv=2&w=900",
        },
        {
          id: 2,
          image:
            "https://fanatics.frgimages.com/santos-laguna/mens-charly-pink-santos-laguna-2024/25-authentic-goalkeeper-jersey_ss5_p-201683455+pv-3+u-7vakdib9vkabdnlvyppc+v-tnrchg089n2c2kddrbhw.jpg?_hv=2&w=900g",
        },
        {
          id: 3,
          image:
            "https://fanatics.frgimages.com/santos-laguna/mens-charly-pink-santos-laguna-2024/25-authentic-goalkeeper-jersey_ss5_p-201683455+pv-1+u-7vakdib9vkabdnlvyppc+v-8rdukwuy9gk6d63ttrto.jpg?_hv=2&w=900g",
        },
      ],
      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "648437b38c44d52b9542e340",
          rating: 4,
          comment:
            "good enough. I like the camera and casing. the delivery was fast too.",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "example1@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2023-06-26T15:40:52.558Z",
            updatedAt: "2023-06-26T15:40:52.558Z",
            role: "USER",
          },
        },
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "I really liked it!!",
          createdDate: "2023-06-26T14:30:40.998Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    
    {
      id: "64e4a8f93d7e4b7f7321049b",
      name: "Woven Layered Gym Shorts",
      description:
       "Take it up a gear with these layered gym shorts from our Goodmove collection. They're designed with a mid-rise, drawstring waist for a comfortable fit. The breathable woven fabric is moisture-wicking and quick-drying to keep you cool. There's even a zip-up pocket to keep essentials secure in the gym. Made with recycled polyester.",
      price: 1950,
      brand: "Marks&Spencer",
      category: "Apparel",
      inStock: true,
      images: [
        {
          id: 1, 
          image:
            "https://marksandspencer.com.ph/cdn/shop/files/SD_01_T51_6542_X8_X_EC_90_1500x.jpg?v=17004649920",
        },
        {
          id: 2,
          image:
            "https://marksandspencer.com.ph/cdn/shop/files/SD_01_T51_6542_X8_X_EC_3_1500x.jpg?v=1700465002",
        },
        {
          id: 3,
          image:
            "https://marksandspencer.com.ph/cdn/shop/files/SD_01_T51_6542_X8_X_EC_4_1500x.jpg?v=1700465005",
        },
      ],
      reviews: [
        
      ],
    },

    {
      id: "64f2d6a92c6a8a6f9132057d",
      name: "STATSports APEX Athlete Series GPS Soccer Activity Tracker Stat Sports Football Performance Vest Wearable Technology Youth Medium",
      description:
       "The STATSports Apex Athlete Series is the only tracker on the market with 16 key metrics. Our FIFA approved GPS tracker is the most powerful wearable in sport. Now it’s your turn to use the same technology as the Pro’s.",
      price: 21826.28,
      brand: "StatSports",
      category: "Wearable",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/I/61p2Q++ytPL._AC_SL1100_.jpg",
        },
        {
          id: 2,
          image:
            "https://m.media-amazon.com/images/I/614Qq3mwbXL._AC_SL1500_.jpg",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/I/61HVmO9JGNL._AC_SL1100_.jpg",
        },
      ],
      reviews: [
  
        
      ],
    },

    {
      id: "6503b7f82e9b6a7f6123041",
      name: " Amazfit Active Smart Watch",
      description:
       "Amazfit Active Smart Watch 42mm,Fitness Watch for Android & iPhone,Black",
      price: 8839,
      brand: "AmazFit",
      category: "Wearable",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://images-cdn.ubuy.com.ph/66ff54def31451517f14df43-amazfit-active-smart-watch-42mm-fitness.jpg",
        },
        {
          id: 2,
          image:
            "https://images-cdn.ubuy.com.ph/66ff54def31451517f14df49-amazfit-active-smart-watch-42mm-fitness.jpg",
        },
        {
          id: 3,
          image:
            "https://images-cdn.ubuy.com.ph/66ff54def31451517f14df46-amazfit-active-smart-watch-42mm-fitness.jpg",
        },
      ],
      reviews: [
        
      ],
    },

    {
      id: "6518a4d72f2c7e7b8121070a",
      name: "Ultraboost 1.0 Shoes",
      description:
       "These adidas Ultraboost running shoes combine the most advanced adidas technology for a performance that has to be felt to be believed. The sock-like adidas Primeknit upper has been redesigned to allow air to flow freely. A supportive heel counter supports the back of your foot, while adidas BOOST delivers maximum comfort and energy return. The Stretchweb outsole is made with Continental™ Rubber for a firm grip and a smooth ride.",
      price: 9500,
      brand: "Adidas",
      category: "Footwear",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12a7dc066e2640898c10af15018481f8_9366/Ultraboost_1.0_Shoes_White_HR0063_01_standard_hover.jpg",
        },
        {
          id: 2,
          image:
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b90f8598c034e90b74eaf1501853553_9366/Ultraboost_1.0_Shoes_White_HR0063_02_standard.jpgg",
        },
        {
          id: 3,
          image:
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf2d719b28644abfad7caf150184f780_9366/Ultraboost_1.0_Shoes_White_HR0063_03_standard.jpg",
        },
      ],
      reviews: [
   
        
      ],
    },
    {
      id: "6529c3e61a6c5d7c8233069f",
      name: 'BEACE Sweatbands Sports Headband for Men & Wome',
      description:
        'Wearing this headband will absorb all your sweat before it flows down from forehead , wick moisture away and dry quickly, making you totally focused in your sports!',
      price: 586.17,
      brand: "BEACE",
      category: "Accesories",
      inStock: true,
      images: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/I/71fi2Bz3gkL._AC_SX679_.jpg",
        },
        {
          id: 2,
          image:
            "https://m.media-amazon.com/images/I/71qvh3aiPgL._AC_SX679_.jpg",
        },
        {
          id: 3,
          image:
            "https://m.media-amazon.com/images/I/71ubMDbrK6L._AC_SX679_.jpg",
        },
      ],
      reviews: [],
    },
  ];