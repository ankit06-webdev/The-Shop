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
    "imageUrl": "https://dummyimage.com/200x200/e0e0e0/000000.png&text=Aashirvaad+Atta"
  },
  {
    "id": 102,
    "name": "Fortune Sunlite Refined Oil 1L",
    "category": "Edible Oil",
    "mrp": 155,
    "wholesalePrice": 138,
    "stock": 120,
    "imageUrl": "https://dummyimage.com/200x200/e0e0e0/000000.png&text=Fortune+Oil"
  },
  {
    "id": 103,
    "name": "Maggi 2-Minute Noodles 140g",
    "category": "Snacks",
    "mrp": 30,
    "wholesalePrice": 24,
    "stock": 0,
    "imageUrl": "https://dummyimage.com/200x200/e0e0e0/000000.png&text=Maggi+Noodles"
  },
  {
    "id": 104,
    "name": "Tata Salt Vacuum Evaporated 1kg",
    "category": "Staples",
    "mrp": 28,
    "wholesalePrice": 21,
    "stock": 200,
    "imageUrl": "https://dummyimage.com/200x200/e0e0e0/000000.png&text=Tata+Salt"
  },
  {
    "id": 105,
    "name": "Brooke Bond Red Label Tea 500g",
    "category": "Beverages",
    "mrp": 260,
    "wholesalePrice": 215,
    "stock": 35,
    "imageUrl": "https://dummyimage.com/200x200/e0e0e0/000000.png&text=Red+Label+Tea"
  },
  {
    "id": 106,
    "name": "Surf Excel Easy Wash Detergent 1kg",
    "category": "Home Care",
    "mrp": 135,
    "wholesalePrice": 118,
    "stock": 0,
    "imageUrl": "https://dummyimage.com/200x200/e0e0e0/000000.png&text=Surf+Excel"
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
