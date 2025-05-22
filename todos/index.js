import express from 'express';
import cors from 'cors'
import gettodo from './controllers/gettodo.js'
import addtodo from './controllers/addtodo.js'
import deltodo from './controllers/deltodo.js'
import summarize_details from './controllers/summarize.js';
const app = express();
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});



app.get('/todos',gettodo)
app.post('/todos',addtodo)
app.delete('/todos/:id',deltodo)
app.get('/summerize',summarize_details)

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});