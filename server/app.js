const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Import the CORS middleware



app.use(cors());

// Sample data
const todoData = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' }
];

// Endpoint to get ToDo data
app.get('/user/getToDo', (req, res) => {
  res.json(todoData);
});

app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});
