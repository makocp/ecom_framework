import express from 'express';

const app = express();

app.get("/api", (req, res) => {
    res.json('Testdata!');
});


app.listen(4242, () => { console.log("Server started on port 4242"); });