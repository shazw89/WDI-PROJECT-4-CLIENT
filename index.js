const express    = require('express');
const morgan     = require('morgan');
const cors       = require('cors');
const port       = process.env.PORT || 4000;
const app        = express();
const dest       = `${__dirname}/public`;

//connect to routes somehow
const routes     = require('../WDI-PROJECT-4-API/config/routes.rb');

if (app.get('env') !== 'production') app.use(cors());
app.use(morgan('dev'));
app.use(express.static(dest));


//The jwt token needs to be called from the backend
app.use('/api', rubyJWT({ secret: config.secret })
  .unless({
    path: [
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] }
    ]
  }));

app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}


app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
