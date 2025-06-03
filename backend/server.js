const express = require("express");
const cors = require("cors");
const fs = require("fs"); // для БД потрібно
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DATA_PATH = __dirname + "/db.json";//відносний шлях

function readData() {
    const raw = fs.readFileSync(DATA_PATH);
    return JSON.parse(raw);
}

function writeData(data) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

//запити
//GET
app.get("/api/posts", (req, res) => {
    const data = readData();
    res.json(data);
});

// GET_ОДИН
app.get("/api/posts/:id", (req, res) => {
    const data = readData();
    const post = data.find(p => p.id == req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

// POST
app.post("/api/posts", (req, res) => {
    const data = readData();
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId || 1
    };
    data.unshift(newPost);
    writeData(data);
    res.status(201).json(newPost);
});

//PUT
app.put("/api/posts/:id", (req, res) => {
    let data = readData();
    const idx = data.findIndex(p => p.id == req.params.id);
    if (idx === -1) return res.status(404).json({ message: "Post not found" });

    data[idx] = { ...data[idx], ...req.body };
    writeData(data);
    res.json(data[idx]);
});

//DELETE
app.delete("/api/posts/:id", (req, res) => {
    let data = readData();
    const newData = data.filter(p => p.id != req.params.id);
    if (data.length === newData.length) return res.status(404).json({ message: "Post not found" });
    writeData(newData);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
