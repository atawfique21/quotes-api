const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

// import Route from Speaker Router
const speakerRouter = require('./routes/speakerRouter');

// import Route from quoteRouter

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/speaker', speakerRouter)


app.listen(PORT, () => {
  console.log(`listen on port: ${PORT}`);
})