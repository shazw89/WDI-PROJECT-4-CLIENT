const express    = require('express');
const app        = express();
const port       = process.env.PORT || 4000;
const dest       = `${__dirname}/public`;

app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
app.listen(port, () => console.log(`Express has started on port: ${port}`));
