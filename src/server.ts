import express from 'express';


const app = express();

app.get("/", (request, response) => {
  response.send("Olá NLLW")
});


app.listen(3000, () => console.log("Server is runing"))
