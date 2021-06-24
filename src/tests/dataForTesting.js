export const productsData = {
    "items": [
        {
            "id": 1,
            "name": "Ergonomic Concrete Shirt",
            "description": "Deleniti aliquid consequatur.",
            "rating": 5,
            "image": "https://picsum.photos/640/480?random=272",
            "promo": false,
            "active": true
        },
        {
            "id": 2,
            "name": "Incredible Wooden Sausages",
            "description": "Ratione voluptas cum est corrupti at autem temporibus quis.",
            "rating": 3,
            "image": "https://picsum.photos/640/480?random=1670",
            "promo": false,
            "active": true
        },
        {
            "id": 3,
            "name": "Fantastic Concrete Mouse",
            "description": "Expedita deserunt odio hic.",
            "rating": 4,
            "image": "https://picsum.photos/640/480?random=1482",
            "promo": false,
            "active": true
        },
        {
            "id": 4,
            "name": "Refined Rubber Chicken",
            "description": "Tempore deserunt voluptatibus.",
            "rating": 2,
            "image": "https://picsum.photos/640/480?random=3010",
            "promo": true,
            "active": false
        },
        {
            "id": 5,
            "name": "Tasty Fresh Sausages",
            "description": "Voluptatibus dolor asperiores maiores.",
            "rating": 5,
            "image": "https://picsum.photos/640/480?random=8451",
            "promo": true,
            "active": true
        },
        {
            "id": 6,
            "name": "Sleek Soft Fish",
            "description": "Deserunt provident nulla eum atque.",
            "rating": 5,
            "image": "https://picsum.photos/640/480?random=4054",
            "promo": true,
            "active": true
        },
        {
            "id": 7,
            "name": "Awesome Wooden Tuna",
            "description": "Laborum error nulla qui est.",
            "rating": 3,
            "image": "https://picsum.photos/640/480?random=9095",
            "promo": true,
            "active": false
        },
        {
            "id": 8,
            "name": "Unbranded Rubber Soap",
            "description": "Voluptate iure illo ipsa vero ut dicta deserunt nulla.",
            "rating": 2,
            "image": "https://picsum.photos/640/480?random=7248",
            "promo": false,
            "active": true
        }
    ],
    "meta": {
        "totalItems": 500,
        "itemCount": 8,
        "itemsPerPage": 8,
        "totalPages": 63,
        "currentPage": 1
    },
    "links": {
        "first": "https://join-tsh-api-staging.herokuapp.com/products?limit=8",
        "previous": "",
        "next": "https://join-tsh-api-staging.herokuapp.com/products?page=2&limit=8",
        "last": "https://join-tsh-api-staging.herokuapp.com/products?page=63&limit=8"
    }
}

export const productsDataZero = {
    "items": [],
    "meta": {
      "totalItems": 0,
      "itemCount": 0,
      "itemsPerPage": 500,
      "totalPages": 0,
      "currentPage": 1
    },
    "links": {
      "first": "https://join-tsh-api-staging.herokuapp.com/products?limit=500",
      "previous": "",
      "next": "",
      "last": ""
    }
};

export const productDataSimple = {
    "items": [
      {
        "id": 1,
        "name": "Ergonomic Concrete Shirt",
        "description": "Deleniti aliquid consequatur.",
        "rating": 5,
        "image": "https://picsum.photos/640/480?random=272",
        "promo": false,
        "active": true
      }
    ],
    "meta": {
      "totalItems": 500,
      "itemCount": 1,
      "itemsPerPage": 1,
      "totalPages": 500,
      "currentPage": 1
    },
    "links": {
      "first": "https://join-tsh-api-staging.herokuapp.com/products?limit=1",
      "previous": "",
      "next": "https://join-tsh-api-staging.herokuapp.com/products?page=2&limit=1",
      "last": "https://join-tsh-api-staging.herokuapp.com/products?page=500&limit=1"
    }
  }