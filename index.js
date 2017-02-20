const express    = require('express');
const morgan     = require('morgan');
const cors       = require('cors');
const port       = process.env.PORT || 4000;
const app        = express();
const dest       = `${__dirname}/public`;

if (app.get('env') !== 'production') app.use(cors());
app.use(morgan('dev'));
app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
