import app from './app';

// Initializations
require('./database');

// Settings
app.set('port', process.env.PORT || 5000);

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})