import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

const data = [
  {
    "id": 101,
    "name": "Aashirvaad Shudh Chakki Atta 5kg",
    "category": "Staples",
    "mrp": 230,
    "wholesalePrice": 195,
    "stock": 50,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_y9s3cx_-YlrCd5Tk81dPOJgWX5UQ__JYRVV2QtXKZQ&s=10"
  },
  {
    "id": 102,
    "name": "Fortune Sunlite Refined Oil 1L",
    "category": "Edible Oil",
    "mrp": 155,
    "wholesalePrice": 138,
    "stock": 120,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5v6d5UCkT9lwAsIgBv2tou0zzMlnPkL15tQqyMW74w&s=10"
  },
  {
    "id": 103,
    "name": "Maggi 2-Minute Noodles 140g",
    "category": "Snacks",
    "mrp": 30,
    "wholesalePrice": 24,
    "stock": 0,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_79BcWkek7eM4re6Iuxm2Z2hu1FA8cwPBPg0-ksZ6g&s=10"
  },
  {
    "id": 104,
    "name": "Tata Salt Vacuum Evaporated 1kg",
    "category": "Staples",
    "mrp": 28,
    "wholesalePrice": 21,
    "stock": 200,
    "imageUrl": "https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "id": 105,
    "name": "Brooke Bond Red Label Tea 500g",
    "category": "Beverages",
    "mrp": 260,
    "wholesalePrice": 215,
    "stock": 35,
    "imageUrl": "https://gharstuff.com/wp-content/uploads/2018/11/Red-Label-Natural-Care-Tea-250-4.jpg"
  },
  {
    "id": 106,
    "name": "Surf Excel Easy Wash Detergent 1kg",
    "category": "Home Care",
    "mrp": 135,
    "wholesalePrice": 118,
    "stock": 0,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gV4mPHAB9YG7Cvv2MPMcYcvdzDKIhoYvMihBAjL2LakpSfFgijjlxu-3&s=10"
  },
  {
    "id": 101,
    "name": "Aashirvaad Shudh Chakki Atta 5kg",
    "category": "Staples",
    "mrp": 230,
    "wholesalePrice": 195,
    "stock": 50,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_y9s3cx_-YlrCd5Tk81dPOJgWX5UQ__JYRVV2QtXKZQ&s=10"
  },
  {
    "id": 102,
    "name": "Fortune Sunlite Refined Oil 1L",
    "category": "Edible Oil",
    "mrp": 155,
    "wholesalePrice": 138,
    "stock": 120,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5v6d5UCkT9lwAsIgBv2tou0zzMlnPkL15tQqyMW74w&s=10"
  },
  {
    "id": 103,
    "name": "Maggi 2-Minute Noodles 140g",
    "category": "Snacks",
    "mrp": 30,
    "wholesalePrice": 24,
    "stock": 0,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_79BcWkek7eM4re6Iuxm2Z2hu1FA8cwPBPg0-ksZ6g&s=10"
  },
  {
    "id": 104,
    "name": "Tata Salt Vacuum Evaporated 1kg",
    "category": "Staples",
    "mrp": 28,
    "wholesalePrice": 21,
    "stock": 200,
    "imageUrl": "https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "id": 105,
    "name": "Brooke Bond Red Label Tea 500g",
    "category": "Beverages",
    "mrp": 260,
    "wholesalePrice": 215,
    "stock": 35,
    "imageUrl": "https://gharstuff.com/wp-content/uploads/2018/11/Red-Label-Natural-Care-Tea-250-4.jpg"
  },
  {
    "id": 106,
    "name": "Surf Excel Easy Wash Detergent 1kg",
    "category": "Home Care",
    "mrp": 135,
    "wholesalePrice": 118,
    "stock": 0,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gV4mPHAB9YG7Cvv2MPMcYcvdzDKIhoYvMihBAjL2LakpSfFgijjlxu-3&s=10"
  }
]

app.get('/', (req, res)=>{
    res.send("Hello World")
}); 

app.get('/api/products', (req, res)=>{
    res.json(data)
}); 

app.listen(port, ()=>{
    console.log("App Listening on the PORT 3000")
});
