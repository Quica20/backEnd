const fs = require('fs') //import fs from 'fs', es otra forma pero se debe agregar a package.json el type: modulo
const express = require('express')

const app = express();
const productFilePath = './products.JSON'
const productArchive = fs.readFileSync(productFilePath,'utf-8')
const objProductArchive = JSON.parse(productArchive)

app.get('/products', (req, res) => {
    let quantityOfProducts = req.query.quantityOfProducts;
    //Si no se ingreso nada mostrar todos los productos:
    if(!quantityOfProducts){
        return res.send(objProductArchive)
    } else{
        quantityOfProducts = parseInt(quantityOfProducts) //Convertimos lo solicitado a numero entero
        let requestedProducts = objProductArchive.slice(0,quantityOfProducts)
        return res.send(requestedProducts)
    }

})

app.get('/products/:pdi',(req,res) => {
    let productId = req.params.productId;
    //Buscamos el procuto por id
    let product = objProductArchive.find( u => u.id === productId)
    if(!product) return res.send({error:"No hay ningun producto con ese Id"})
    res.send(product)
/*     let product = objProductArchive.find((product) => product.id == productId);
    if(product){
        return res.send(product)
    } else{
        return res.send({error: "No hay ningun producto con ese Id"})
    } */
})

app.listen(8080, () => console.log('Servidor Funcionando'))