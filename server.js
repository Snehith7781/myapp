const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is the 2nd project');
  res.send('This is alternate text');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
