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
      category: "Footwear",
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
      "id": "648437b38c44d52b9542e340",
      "name": "Under Armour Squeeze Water Bottle",
      "description": "Under Armour's 32 oz squeeze water bottles hold liquid with a quick-shot lid and one-way valve for quick hydration, perfect for sports water bottles squeeze, gym water bottles for men and women, and more.",
      "price": 528.08,
      "brand": "Under Armour",
      "category": "Accesories",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://m.media-amazon.com/images/I/71QhN4Is0NL._AC_SX679_.jpg"
        },
        {
          "id": 2,
          "image": "https://m.media-amazon.com/images/I/6155xOsl81S._AC_SX679_.jpg"
        },
        {
          "id": 3,
          "image": "https://m.media-amazon.com/images/I/613HOz0N1oS._AC_SX679_.jpg"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5887402b0efd394d9af",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "648437b38c44d52b9542e340",
          "rating": 5,
          "comment": "Great bottle for keeping hydrated during workouts. The squeeze mechanism works well.",
          "createdDate": "2024-12-14T16:00:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Samantha Taylor",
            "email": "samantha.taylor@example.com",
            "image": "https://example.com/users/samantha_taylor.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5897402b0efd394d9b0",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "648437b38c44d52b9542e340",
          "rating": 4,
          "comment": "Decent bottle but a bit bulky for my liking.",
          "createdDate": "2024-12-13T16:00:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "David Wilson",
            "email": "david.wilson@example.com",
            "image": "https://example.com/users/david_wilson.jpg",
            "role": "USER"
          }
        }
      ]
    },
    
    {
      "id": "64a4e9e77e7299078334019f",
      "name": "EyeBlack Anti-Glare Under Eye Black Sports Grease Stick for Pro Performance",
      "description": "This powerful grease stick is not just for sports—it's your secret weapon to amplify your athletic prowess! From the football field to the baseball diamond and the softball pitch, this grease stick is your ultimate companion.",
      "price": 280,
      "brand": "EyeBlack",
      "category": "Accessories",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://m.media-amazon.com/images/I/61FVYF-uMuL._AC_SX679_.jpg"
        },
        {
          "id": 2,
          "image": "https://m.media-amazon.com/images/I/51xrWKsnobL._AC_SX679_.jpg"
        },
        {
          "id": 3,
          "image": "https://m.media-amazon.com/images/I/61FNPZmJ+hL._AC_SX679_.jpg"
        }
      ],
      "reviews": [
        {
          "id": "64e9b58a7402b0efd394d9b1",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64a4e9e77e7299078334019f",
          "rating": 5,
          "comment": "Works well to reduce glare. Great for outdoor sports.",
          "createdDate": "2024-12-14T16:05:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Oliver Green",
            "email": "oliver.green@example.com",
            "image": "https://example.com/users/oliver_green.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58b7402b0efd394d9b2",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64a4e9e77e7299078334019f",
          "rating": 3,
          "comment": "Okay product but didn’t last as long as expected.",
          "createdDate": "2024-12-13T16:05:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lily Martin",
            "email": "lily.martin@example.com",
            "image": "https://example.com/users/lily_martin.jpg",
            "role": "USER"
          }
        }
      ]
    },
    
    {
      "id": "64c3e7f83a5b8d7d8539021a",
      "name": "Pole Vault Pits and Pit Covers & Shelters",
      "description": "An ASTM approved vault box collar changes the slope of the tri-slant area when vaulting poles rotate. Gill's thoughtful pit entry design accounts for the box collar's effect by featuring a vaulter friendly angle.",
      "price": 59799,
      "brand": "GILL",
      "category": "Facilities",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://www.everythingtrackandfield.com/images/5893_1.jpg?resizeid=14&resizeh=1200&resizew=1200"
        },
        {
          "id": 2,
          "image": "https://www.everythingtrackandfield.com/images/5893_2.jpg?resizeid=14&resizeh=1200&resizew=1200"
        }
      ],
      "reviews": [
        {
          "id": "64e9b58c7402b0efd394d9b3",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64c3e7f83a5b8d7d8539021a",
          "rating": 5,
          "comment": "Durable and well-designed pit covers. Great safety feature for the vault.",
          "createdDate": "2024-12-14T16:10:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Ethan Clark",
            "email": "ethan.clark@example.com",
            "image": "https://example.com/users/ethan_clark.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58d7402b0efd394d9b4",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64c3e7f83a5b8d7d8539021a",
          "rating": 4,
          "comment": "Effective design, but could be a bit more user-friendly.",
          "createdDate": "2024-12-13T16:10:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Sarah Walker",
            "email": "sarah.walker@example.com",
            "image": "https://example.com/users/sarah_walker.jpg",
            "role": "USER"
          }
        }
      ]
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
      reviews:  [
        {
          "id": "64e9b58c7402b0efd394d9b3",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64e4a8f93d7e4b7f7321049b",
          "rating": 5,
          "comment": "Comfortable and breathable. Perfect for intense workouts.",
          "createdDate": "2023-12-01T12:00:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Olivia Harris",
            "email": "olivia.harris@example.com",
            "image": "https://example.com/users/olivia_harris.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58d7402b0efd394d9b4",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64e4a8f93d7e4b7f7321049b",
          "rating": 4,
          "comment": "Great fit, but could use more color options.",
          "createdDate": "2023-12-02T14:30:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "James Miller",
            "email": "james.miller@example.com",
            "image": "https://example.com/users/james_miller.jpg",
            "role": "USER"
          }
        }
      ],
    },

    {
      id: "64f2d6a92c6a8a6f9132057d",
      name: "STATSports APEX Athlete Series GPS Soccer Activity Tracker Stat Sports Football Performance Vest Wearable Technology Youth Medium",
      description:
       "The STATSports Apex Athlete Series is the only tracker on the market with 16 key metrics. Our FIFA approved GPS tracker is the most powerful wearable in sport. Now it’s your turn to use the same technology as the Pro’s.",
      price: 21826.28,
      brand: "StatSports",
      category: "Wearables",
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
        {
          "id": "64e9b58c7402b0efd394d9b5",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64f2d6a92c6a8a6f9132057d",
          "rating": 5,
          "comment": "Top-notch technology. A must-have for serious soccer players.",
          "createdDate": "2023-11-28T10:30:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lucas Johnson",
            "email": "lucas.johnson@example.com",
            "image": "https://example.com/users/lucas_johnson.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58d7402b0efd394d9b6",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64f2d6a92c6a8a6f9132057d",
          "rating": 4,
          "comment": "Expensive but worth the investment if you want to improve your game.",
          "createdDate": "2023-11-29T15:00:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Ella White",
            "email": "ella.white@example.com",
            "image": "https://example.com/users/ella_white.jpg",
            "role": "USER"
          }
        }
      ],
    },

    {
      id: "6503b7f82e9b6a7f6123041",
      name: " Amazfit Active Smart Watch",
      description:
       "Amazfit Active Smart Watch 42mm,Fitness Watch for Android & iPhone,Black",
      price: 8839,
      brand: "AmazFit",
      category: "Wearables",
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
        {
          "id": "64e9b58c7402b0efd394d9b7",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "6503b7f82e9b6a7f6123041",
          "rating": 4,
          "comment": "Great watch for tracking workouts and daily activity.",
          "createdDate": "2023-12-02T11:30:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Emma Davis",
            "email": "emma.davis@example.com",
            "image": "https://example.com/users/emma_davis.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58d7402b0efd394d9b8",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "6503b7f82e9b6a7f6123041",
          "rating": 5,
          "comment": "Stylish and functional. Keeps me motivated!",
          "createdDate": "2023-12-03T13:00:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Liam Turner",
            "email": "liam.turner@example.com",
            "image": "https://example.com/users/liam_turner.jpg",
            "role": "USER"
          }
        }
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
      reviews:[
        {
          "id": "64e9b58c7402b0efd394d9b9",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "6518a4d72f2c7e7b8121070a",
          "rating": 5,
          "comment": "Super comfortable for long runs. Excellent grip.",
          "createdDate": "2023-11-25T08:00:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Sophie Green",
            "email": "sophie.green@example.com",
            "image": "https://example.com/users/sophie_green.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58d7402b0efd394d9ba",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "6518a4d72f2c7e7b8121070a",
          "rating": 4,
          "comment": "Great for running and walking. A bit pricey.",
          "createdDate": "2023-11-26T10:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Noah Taylor",
            "email": "noah.taylor@example.com",
            "image": "https://example.com/users/noah_taylor.jpg",
            "role": "USER"
          }
        }
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
      reviews: [
        {
          "id": "64e9b58c7402b0efd394d9bb",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "6529c3e61a6c5d7c8233069f",
          "rating": 5,
          "comment": "Absorbs sweat well, keeps me dry during workouts.",
          "createdDate": "2023-12-01T09:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Mia Lee",
            "email": "mia.lee@example.com",
            "image": "https://example.com/users/mia_lee.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b58d7402b0efd394d9bc",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "6529c3e61a6c5d7c8233069f",
          "rating": 4,
          "comment": "Works well, but could be a bit tighter around the forehead.",
          "createdDate": "2023-12-02T16:15:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lucas Wilson",
            "email": "lucas.wilson@example.com",
            "image": "https://example.com/users/lucas_wilson.jpg",
            "role": "USER"
          }
        }
      ],
    },

    {
      "id": "64b1654593e91b8e73a351f0",
      "name": "Adidas Primeblue Running Tights",
      "description": "High-performance tights designed for runners. Made with Primeblue recycled material for sustainability and comfort. Provides excellent stretch and sweat-wicking capability.",
      "price": 2899,
      "brand": "Adidas",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf8cc0b584c44baa8c7fab1e0183d937_9366/Own_The_Run_Primeblue_Tights_Blue_FJ7023_01_laydown.jpg"
        },
        {
          "id": 2,
          "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26ec6bdc095746f0b4eeab1e01852bf1_9366/Own_The_Run_Primeblue_Tights_Blue_FJ7023_02_laydown_hover.jpg"
        }
      ],
      "reviews": [
        {
          "id": "64b9b4887402b0efd394d8f4",
          "userId": "64b9b184b0e9a8c8709821d4",
          "productId": "64b1654593e91b8e73a351f0",
          "rating": 5,
          "comment": "Fits perfectly and is very comfortable for long runs!",
          "createdDate": "2023-10-15T10:30:00.000Z",
          "user": {
            "id": "64b9b184b0e9a8c8709821d4",
            "name": "Jake",
            "email": "example2@gmail.com",
            "image": "https://example.com/users/jake_profile.jpg",
            "role": "USER"
          }
        },
      ]
    },

    {
      "id": "64b2654593e91b8e73a351f1",
      "name": "Nike Air Zoom Pegasus 39",
      "description": "Versatile and durable running shoes with advanced cushioning technology. Perfect for road running and daily training.",
      "price": 5999,
      "brand": "Nike",
      "category": "Footwear",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bb6250a-af23-4b73-bf8c-ded532982e12/NIKE+AIR+ZOOM+PEGASUS+39+4E.png"
        },
        {
          "id": 2,
          "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7053c29c-2ec3-415c-80fb-f37954f13a4d/NIKE+AIR+ZOOM+PEGASUS+39+4E.png"
        }
      ],
      "reviews": [
        {
          "id": "64c9b4887402b0efd394d8f5",
          "userId": "64c9b184b0e9a8c8709821d5",
          "productId": "64b2654593e91b8e73a351f1",
          "rating": 4,
          "comment": "Great cushioning and stylish design, though a bit pricey.",
          "createdDate": "2023-11-10T12:15:00.000Z",
          "user": {
            "id": "64c9b184b0e9a8c8709821d5",
            "name": "Sophia",
            "email": "example3@gmail.com",
            "image": "https://example.com/users/sophia_profile.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b4654593e91b8e73a351f3",
      "name": "Nike Brasilia Training Duffel Bag",
      "description": "Spacious and durable duffel bag designed for athletes. Features multiple compartments to organize your gear and is water-resistant.",
      "price": 2499,
      "brand": "Nike",
      "category": "Bags",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://m.media-amazon.com/images/I/512PWU-iaQL._AC_SL1000_.jpg"
        },
        {
          "id": 2,
          "image": "https://m.media-amazon.com/images/I/51IbeejkuBL._AC_SL1000_.jpg"
        }
      ],
      "reviews": [
        {
          "id": "64e9b4887402b0efd394d8f7",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b4654593e91b8e73a351f3",
          "rating": 4,
          "comment": "Good size and durable material. Perfect for gym sessions.",
          "createdDate": "2023-11-25T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Mason",
            "email": "example5@gmail.com",
            "image": "https://example.com/users/mason_profile.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351f4",
      "name": "Under Armour Performance Cap",
      "description": "Lightweight and breathable cap with a comfortable fit. Features moisture-wicking fabric to keep you cool during workouts.",
      "price": 1199,
      "brand": "Under Armour",
      "category": "Accessories",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://underarmour.scene7.com/is/image/Underarmour/1383474-015_SLF_SL?rp=standard-0pad|pdpZoomDesktop&scl=0.85&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500"
        },
        {
          "id": 2,
          "image": "https://underarmour.scene7.com/is/image/Underarmour/1383474-015_SLB_SL?rp=standard-0pad|pdpZoomDesktop&scl=0.85&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500"
        }
      ],
      "reviews": []
    },
    {
      "id": "64b5654593e91b8e73a351f2",
      "name": "Nike Pro Dri-FIT Shorts",
      "description": "Athletic shorts made with moisture-wicking fabric to keep you dry during intense workouts. Features a comfortable elastic waistband and inner lining.",
      "price": 1599,
      "brand": "Nike",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72c44e03-0bf9-4353-8760-9f400ab1e461/B+NP+DF+SHORT+24.png"
        },
        {
          "id": 2,
          "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/46315a64-d99e-4d74-ac2f-13c48836fe67/B+NP+DF+SHORT+24.png"
        }
      ],
      "reviews": [
        {
          "id": "64e9b4907402b0efd394d8f9",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f2",
          "rating": 5,
          "comment": "Very comfortable and lightweight, perfect for hot days at the gym.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Sarah Baker",
            "email": "sarah.baker@example.com",
            "image": "https://example.com/users/sarah_baker.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b4917402b0efd394d8fa",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f2",
          "rating": 4,
          "comment": "Good shorts but the sizing runs a bit small.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Daniel Smith",
            "email": "daniel.smith@example.com",
            "image": "https://example.com/users/daniel_smith.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351f9",
      "name": "Spalding NBA Game Ball",
      "description": "Official size and weight basketball designed for indoor and outdoor play. Made with high-quality composite leather for superior grip and durability.",
      "price": 3499,
      "brand": "Spalding",
      "category": "Equipment",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://i.ebayimg.com/images/g/9RYAAOSwMspjX8i-/s-l960.webp"
        },
        {
          "id": 2,
          "image": "https://i.ebayimg.com/images/g/ds4AAOSw8iljX8i-/s-l960.webp"
        }
      ],
      "reviews": [
        {
          "id": "64e9b4957402b0efd394d8fe",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f9",
          "rating": 5,
          "comment": "Great grip and perfect bounce, just like the ones used in official games.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Jake Thompson",
            "email": "jake.thompson@example.com",
            "image": "https://example.com/users/jake_thompson.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b4967402b0efd394d8ff",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f9",
          "rating": 4,
          "comment": "Durable but a bit heavy compared to other brands.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Emily Johnson",
            "email": "emily.johnson@example.com",
            "image": "https://example.com/users/emily_johnson.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351f6",
      "name": "Gymnazo Balance Board",
      "description": "Stability training tool designed to improve core strength, balance, and coordination. Ideal for rehabilitation and enhancing athletic performance.",
      "price": 3999,
      "brand": "Gymnazo",
      "category": "Equipment",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://ninjoo.com/cdn/shop/products/balance-board-tei-shorty-balance-board-bredder-board-281460_1024x1024.png?v=1613712601"
        },
        {
          "id": 2,
          "image": "https://ninjoo.com/cdn/shop/products/balance-board-tei-shorty-balance-board-bredder-board-267905_600x600.jpg?v=1613713646"
        }
      ],
      "reviews": [
        {
          "id": "64e9b4997402b0efd394d902",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f6",
          "rating": 5,
          "comment": "Perfect for improving my balance and core strength. Well-made and durable.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Sophia Adams",
            "email": "sophia.adams@example.com",
            "image": "https://example.com/users/sophia_adams.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5007402b0efd394d903",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f6",
          "rating": 4,
          "comment": "Effective but takes time to get used to.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Matthew Green",
            "email": "matthew.green@example.com",
            "image": "https://example.com/users/matthew_green.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351f7",
      "name": "Hampton Portable Basketball Hoop",
      "description": "Adjustable height hoop suitable for all ages and skill levels. Features a shatterproof backboard and a sturdy base for stability during play.",
      "price": 14999,
      "brand": "Hampton",
      "category": "Facilities",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://chrissports.com/cdn/shop/files/Sportsoul_basketball_hoop_portable_system_11_2b57c7c1-59a3-4396-a59d-028dfb4160e3_540x.jpg?v=1692932635"
        },
        {
          "id": 2,
          "image": "https://chrissports.com/cdn/shop/files/Sportsoul_basketball_hoop_portable_system_6_dc416a94-a03a-47c0-a47e-80c027563cc0_540x.jpg?v=1692932635"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5017402b0efd394d904",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f7",
          "rating": 5,
          "comment": "Excellent quality and easy to assemble. Great for backyard play.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "William Clark",
            "email": "william.clark@example.com",
            "image": "https://example.com/users/william_clark.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5027402b0efd394d905",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f7",
          "rating": 4,
          "comment": "Sturdy and reliable, but a bit pricey.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Grace Wilson",
            "email": "grace.wilson@example.com",
            "image": "https://example.com/users/grace_wilson.jpg",
            "role": "USER"
          }
        }
      ]
    },
    
    {
      "id": "64b5654593e91b8e73a351f5",
      "name": "Wilson NFL MVP Football",
      "description": "Official NFL size and weight football. Made with high-quality leather and Wilson’s exclusive synthetic laces for a secure grip.",
      "price": 2799,
      "brand": "Wilson",
      "category": "Equipment",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://i.ebayimg.com/images/g/Uv0AAOSwz-Nls8pO/s-l960.webp"
        },
        {
          "id": 2,
          "image": "https://i.ebayimg.com/images/g/KLgAAOSwsuVls8p4/s-l960.webp"
        }
      ],
      "reviews": [
        {
          "id": "64e9b4977402b0efd394d900",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f5",
          "rating": 5,
          "comment": "Excellent for practice and games. Feels great in the hand.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lucas Miller",
            "email": "lucas.miller@example.com",
            "image": "https://example.com/users/lucas_miller.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b4987402b0efd394d901",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f5",
          "rating": 4,
          "comment": "Good quality but could be a bit lighter.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Anna Carter",
            "email": "anna.carter@example.com",
            "image": "https://example.com/users/anna_carter.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351f8",
      "name": "TRX Suspension Trainer",
      "description": "Versatile training tool for bodyweight exercises. Includes adjustable straps for various workout intensities. Perfect for building strength, balance, and flexibility.",
      "price": 3999,
      "brand": "TRX",
      "category": "Equipment",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://www.trxtraining.com/cdn/shop/products/TRXPro45-21-21v21341_R2_1_800x.jpg?v=1663964638"
        },
        {
          "id": 2,
          "image": "https://www.trxtraining.com/cdn/shop/products/trx_mpp_pro_macro_3_1200x.jpg?v=1704233064"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5037402b0efd394d906",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f8",
          "rating": 5,
          "comment": "Incredibly versatile and easy to use. Great for home workouts.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Liam Roberts",
            "email": "liam.roberts@example.com",
            "image": "https://example.com/users/liam_roberts.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5047402b0efd394d907",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351f8",
          "rating": 4,
          "comment": "Great for muscle toning, but the straps could be more comfortable.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Sarah Martinez",
            "email": "sarah.martinez@example.com",
            "image": "https://example.com/users/sarah_martinez.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351fhi",
      "name": "PowerBlock Sport Adjustable Dumbbells",
      "description": "Space-saving adjustable dumbbells that grow with your strength. Each dumbbell adjusts from 3 to 24 pounds.",
      "price": 15999,
      "brand": "PowerBlock",
      "category": "Equipment",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://powerblock.com/cdn/shop/files/pro_100_knurled_stage_4.jpg?v=1714488463&width=1800"
        },
        {
          "id": 2,
          "image": "https://powerblock.com/cdn/shop/files/pro-100-exp-_504-00183-01_handle.jpg?v=1718392136&width=1800"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5057402b0efd394d908",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fhi",
          "rating": 5,
          "comment": "Convenient and easy to use. Perfect for a home gym setup.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Chloe Wright",
            "email": "chloe.wright@example.com",
            "image": "https://example.com/users/chloe_wright.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5067402b0efd394d909",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fhi",
          "rating": 4,
          "comment": "Great variety of weights but can be a bit clunky to adjust.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Daniel Martinez",
            "email": "daniel.martinez@example.com",
            "image": "https://example.com/users/daniel_martinez.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351fa",
      "name": "ProForm 2000 Treadmill",
      "description": "High-performance treadmill with a powerful motor and adjustable incline settings. Features a spacious running deck and interactive touch screen display.",
      "price": 69999,
      "brand": "ProForm",
      "category": "Equipment",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://webapi-prod.technogym.com/dw/image/v2/BFLQ_PRD/on/demandware.static/-/Sites-tg-catalog-master/default/dwfa987005/product/DCKA/technogym_myrun_gallery_001.jpg?sw=1840&sh=1380"
        },
        {
          "id": 2,
          "image": "https://webapi-prod.technogym.com/dw/image/v2/BFLQ_PRD/on/demandware.static/-/Sites-tg-catalog-master/default/dwb56d0bc4/product/DCKA/myrun-gallery-pdp-4.jpg?sw=1280&sh=960"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5077402b0efd394d90a",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fa",
          "rating": 5,
          "comment": "Excellent treadmill for home use. Quiet and easy to assemble.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Ella Peterson",
            "email": "ella.peterson@example.com",
            "image": "https://example.com/users/ella_peterson.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5087402b0efd394d90b",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fa",
          "rating": 4,
          "comment": "Good features but a bit expensive.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Noah Anderson",
            "email": "noah.anderson@example.com",
            "image": "https://example.com/users/noah_anderson.jpg",
            "role": "USER"
          }
        }
      ]
    },
    
    {
      "id": "64b5654593e91b8e73a351fb",
      "name": "Fitbit Charge 5 Fitness Tracker",
      "description": "Advanced fitness tracker with built-in GPS, heart rate monitoring, sleep tracking, and workout modes. Stylish design and water-resistant up to 50 meters.",
      "price": 14999,
      "brand": "Fitbit",
      "category": "Wearables",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://target.scene7.com/is/image/Target/GUEST_d60c7764-3924-49ad-8535-2e365cd86b32?wid=1200&hei=1200&qlt=80&fmt=webp"
        },
        {
          "id": 2,
          "image": "https://target.scene7.com/is/image/Target/GUEST_b74a83df-9084-409b-8eef-6fef84081077?wid=600&hei=600&qlt=80&fmt=webp"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5097402b0efd394d90c",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fb",
          "rating": 5,
          "comment": "Perfect for tracking my workouts and sleep. Very comfortable to wear.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Mia Taylor",
            "email": "mia.taylor@example.com",
            "image": "https://example.com/users/mia_taylor.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5107402b0efd394d90d",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fb",
          "rating": 4,
          "comment": "Easy to use and accurate data, but battery life could be better.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lila Brown",
            "email": "lila.brown@example.com",
            "image": "https://example.com/users/lila_brown.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351fd",
      "name": "Under Armour Micro G Hustle 5 Backpack",
      "description": "Durable and lightweight backpack with plenty of storage space. Features adjustable shoulder straps and a padded laptop compartment. Perfect for sports and everyday use.",
      "price": 2999,
      "brand": "Under Armour",
      "category": "Bags",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://www.insportline.cz/upload/product/640x640/UA10015950-006.jpg.webp"
        },
        {
          "id": 2,
          "image": "https://www.insportline.cz/upload/product/640x640/UA10015950-005.jpg.webp"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5137402b0efd394d910",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fd",
          "rating": 5,
          "comment": "Perfect size for all my gym essentials. Very comfortable to carry.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Alex Carter",
            "email": "alex.carter@example.com",
            "image": "https://example.com/users/alex_carter.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5147402b0efd394d911",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fd",
          "rating": 4,
          "comment": "Spacious and durable, but could use more pockets.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Olivia Scott",
            "email": "olivia.scott@example.com",
            "image": "https://example.com/users/olivia_scott.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a351fe",
      "name": "YETI Rambler 12oz Bottle",
      "description": "Durable, double-wall insulated stainless steel bottle. Keeps drinks cold or hot for hours. Leak-proof and easy to carry.",
      "price": 2799,
      "brand": "YETI",
      "category": "Accessories",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://yeti-web.imgix.net/5dad042f75cf50d1/W-site_studio_drinkware_Rambler_12oz_Bottle_Wild_Vine_Red_Front_3967_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846"
        },
        {
          "id": 2,
          "image": "https://yeti-web.imgix.net/679c1e9b03d1016f/W-site_studio_drinkware_Rambler_12oz_Bottle_Wild_Vine_Red_3qtr_Lid_4315_Primary_B_2400x2400.png?bg=0fff&auto=format&w=846&h=846"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5157402b0efd394d912",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fe",
          "rating": 5,
          "comment": "Keeps my drinks at the perfect temperature. Worth every penny.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Ethan Wilson",
            "email": "ethan.wilson@example.com",
            "image": "https://example.com/users/ethan_wilson.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5167402b0efd394d913",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351fe",
          "rating": 4,
          "comment": "Great quality but a bit heavy when full.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Grace Green",
            "email": "grace.green@example.com",
            "image": "https://example.com/users/grace_green.jpg",
            "role": "USER"
          }
        }
      ]
    },
    
    {
      "id": "64b5654593e91b8e73a351ff",
      "name": "Adidas Essential Sports Bra",
      "description": "Comfortable sports bra designed for medium-impact activities. Features moisture-wicking fabric and adjustable straps for a personalized fit.",
      "price": 1999,
      "brand": "Adidas",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd5e51fdcf8a4acabf76996bf2bb6a75_9366/TLRD_Impact_Luxe_High-Support_Zip_Bra_Green_IT6655_01_laydown.jpg"
        },
        {
          "id": 2,
          "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8eb47c3012047208589ee6a6439a458_9366/TLRD_Impact_Luxe_High-Support_Zip_Bra_Green_IT6655_02_laydown.jpg"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5177402b0efd394d914",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351ff",
          "rating": 5,
          "comment": "Super comfortable and supportive. Great for workouts!",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Liam Martin",
            "email": "liam.martin@example.com",
            "image": "https://example.com/users/liam_martin.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5187402b0efd394d915",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a351ff",
          "rating": 4,
          "comment": "Fits well and stays in place, but a bit pricey.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Avery Johnson",
            "email": "avery.johnson@example.com",
            "image": "https://example.com/users/avery_johnson.jpg",
            "role": "USER"
          }
        }
      ]
    },
    {
      "id": "64b5654593e91b8e73a35200",
      "name": "Puma Evercat Roam Backpack",
      "description": "Versatile and lightweight backpack with multiple compartments. Features padded shoulder straps and a laptop sleeve. Ideal for sports and travel.",
      "price": 2199,
      "brand": "Puma",
      "category": "Bags",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/927444/01/fnd/PNA/fmt/png/EVERCAT-Fraction-Backpack"
        },
        {
          "id": 2,
          "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/927444/01/bv/fnd/PNA/fmt/png/EVERCAT-Fraction-Backpack"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5197402b0efd394d916",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35200",
          "rating": 5,
          "comment": "Perfect for everyday use and sports. Comfortable and stylish.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "David Lee",
            "email": "david.lee@example.com",
            "image": "https://example.com/users/david_lee.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5207402b0efd394d917",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35200",
          "rating": 4,
          "comment": "Spacious and well-made, but could use more color options.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Ella Thompson",
            "email": "ella.thompson@example.com",
            "image": "https://example.com/users/ella_thompson.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a35201",
      "name": "Under Armour Project Rock Training Gloves",
      "description": "Durable training gloves with grip-enhancing texture and breathable mesh back. Ideal for weight lifting and general gym use.",
      "price": 2499,
      "brand": "Under Armour",
      "category": "Accessories",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://underarmour.scene7.com/is/image/Underarmour/1353074-001_SLF_SL?rp=standard-0pad|pdpZoomDesktop&scl=0.85&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500"
        },
        {
          "id": 2,
          "image": "https://underarmour.scene7.com/is/image/Underarmour/1353074-001_SLB_SL?rp=standard-0pad|pdpZoomDesktop&scl=0.85&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5217402b0efd394d918",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35201",
          "rating": 5,
          "comment": "Excellent grip and comfort. Perfect for heavy lifting.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Charlie Allen",
            "email": "charlie.allen@example.com",
            "image": "https://example.com/users/charlie_allen.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5227402b0efd394d919",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35201",
          "rating": 4,
          "comment": "Comfortable but could use a bit more padding.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lucas Wright",
            "email": "lucas.wright@example.com",
            "image": "https://example.com/users/lucas_wright.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a35205",
      "name": "Nike Dri-FIT Training Shorts",
      "description": "Lightweight shorts made with moisture-wicking fabric. Perfect for high-intensity workouts and casual wear.",
      "price": 1799,
      "brand": "Nike",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://i5.walmartimages.com/seo/Nike-Dri-Fit-11-Flex-Men-s-Woven-Training-Shorts-AQ3495-060-Anthracite-Small_a33cac3f-ddf7-4ae1-ba74-e256d8ffc5c1.16a167394498e5fdc21ae839f4e604f4.jpeg"
        },
        {
          "id": 2,
          "image": "https://i5.walmartimages.com/asr/1afa1026-33be-43cc-82f7-067f79d167d1.25b19037f7c79a84c760f0ca4be07bdd.jpeg"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5297402b0efd394d920",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35205",
          "rating": 5,
          "comment": "Perfect length and very comfortable for workouts.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lila Taylor",
            "email": "lila.taylor@example.com",
            "image": "https://example.com/users/lila_taylor.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5307402b0efd394d921",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35205",
          "rating": 4,
          "comment": "Good quality but could use more color options.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Jaxon Scott",
            "email": "jaxon.scott@example.com",
            "image": "https://example.com/users/jaxon_scott.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a35206",
      "name": "Reebok Classic Track Jacket",
      "description": "Timeless track jacket with a retro design. Made from lightweight, durable fabric. Ideal for layering and casual wear.",
      "price": 2499,
      "brand": "Reebok",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://i.ebayimg.com/images/g/Wh4AAOSwxPFkFzpG/s-l960.webp"
        },
        {
          "id": 2,
          "image": "https://i.ebayimg.com/images/g/m3YAAOSwPLhkFzpG/s-l960.webp"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5317402b0efd394d922",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35206",
          "rating": 5,
          "comment": "Stylish and comfortable. Perfect for both gym and casual outings.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Isabella Martinez",
            "email": "isabella.martinez@example.com",
            "image": "https://example.com/users/isabella_martinez.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5327402b0efd394d923",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35206",
          "rating": 4,
          "comment": "Nice jacket but a bit heavy for warmer days.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Nina Flores",
            "email": "nina.flores@example.com",
            "image": "https://example.com/users/nina_flores.jpg",
            "role": "USER"
          }
        }
      ]
    },
    
    {
      "id": "64b5654593e91b8e73a35208",
      "name": "Under Armour HeatGear Compression Tights",
      "description": "Compression tights designed to support muscles and wick away sweat during high-intensity workouts.",
      "price": 1899,
      "brand": "Under Armour",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://product-cdn-frz.alltricks.com/hd/422/918422/1918422/3650171"
        },
        {
          "id": 2,
          "image": "https://product-cdn-frz.alltricks.com/hd/422/918422/1918422/3650176"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5357402b0efd394d926",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35208",
          "rating": 5,
          "comment": "Excellent compression and comfort for intensive workouts.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Jackie Harris",
            "email": "jackie.harris@example.com",
            "image": "https://example.com/users/jackie_harris.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5367402b0efd394d927",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35208",
          "rating": 4,
          "comment": "Good fit but a bit tight around the waist.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Lily Thompson",
            "email": "lily.thompson@example.com",
            "image": "https://example.com/users/lily_thompson.jpg",
            "role": "USER"
          }
        }
      ]
    },

    {
      "id": "64b5654593e91b8e73a35218",
      "name": "Puma Future 6.1 Netfit Soccer Jersey",
      "description": "Advanced soccer jersey designed with Netfit technology for customizable fit. Ideal for all levels of play.",
      "price": 1599,
      "brand": "Puma",
      "category": "Apparel",
      "inStock": true,
      "images": [
        {
          "id": 1,
          "image": "https://dynamic.zacdn.com/5A7z0TvF2AgLESHX077TwX_RJzQ=/filters:quality(70):format(webp)/https://static-hk.zacdn.com/p/puma-0067-7486796-1.jpg"
        },
        {
          "id": 2,
          "image": "https://dynamic.zacdn.com/weM3hXUB2WDiGGuwy0kZ-F582As=/filters:quality(70):format(webp)/https://static-hk.zacdn.com/p/puma-0067-7486796-2.jpg"
        }
      ],
      "reviews": [
        {
          "id": "64e9b5557402b0efd394d946",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35218",
          "rating": 5,
          "comment": "Flexible fit and great breathability. Perfect for quick movements.",
          "createdDate": "2024-12-14T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Sarah Collins",
            "email": "sarah.collins@example.com",
            "image": "https://example.com/users/sarah_collins.jpg",
            "role": "USER"
          }
        },
        {
          "id": "64e9b5567402b0efd394d947",
          "userId": "64e9b184b0e9a8c8709821d7",
          "productId": "64b5654593e91b8e73a35218",
          "rating": 4,
          "comment": "Good jersey but runs small, order a size up.",
          "createdDate": "2024-12-13T15:45:00.000Z",
          "user": {
            "id": "64e9b184b0e9a8c8709821d7",
            "name": "Johnathan Wilson",
            "email": "johnathan.wilson@example.com",
            "image": "https://example.com/users/johnathan_wilson.jpg",
            "role": "USER"
          }
        }
      ]
    },

    
  ];