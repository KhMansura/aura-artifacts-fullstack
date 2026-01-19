const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'artifacts.json');

// Middleware
// app.use(cors()); 
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "https://aura-artifacts-fullstack.vercel.app" 
  ],
  credentials: true
}));
app.use(express.json()); 

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}
app.get('/', (req, res) => {
    res.send('Aura Artifacts Server is Running...');
});
// 1.ITEM LIST (Public)
app.get('/api/items', (req, res) => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        const items = JSON.parse(data);
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Could not read data" });
    }
});

// 2. GET Route: Fetch details of a specific item (Public)
app.get('/api/items/:id', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        const item = data.find(i => i.id == req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching item" });
    }
});

// 3. POST Route: Add a new item (Protected Page)
app.post('/api/items', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        
        
        const newItem = {
            id: Date.now(), 
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        };

        data.push(newItem);
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: "Could not save item" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});