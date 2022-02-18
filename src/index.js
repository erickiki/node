import app from './app'

app.listen(app.get('port'))
console.log('Server on port', app.get('port'))

/* import app from './app'

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server on port ${PORT}`);
}); */
