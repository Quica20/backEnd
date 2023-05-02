class ProductManager {
        constructor(products = []){
            this._products = products;
            this._id = 0;
        }

    addProduct (title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error('Todos los campos son requeidos');
            return;
        }
        if (this._products.some(product => product.code === code)) {
            console.error('Ya existe un producto con el misco codigo');
            return;
        }

        const product = {id: ++this._id,title,description,price,thumbnail,code,stock};
        this._products.push(product)
    }

        getProducts() {
            return this._products;
        }

        getProductById(id) {
            const product = this._products.find(product => product.id === id);
            if (product) {
            return product;
            } else {
            console.error('No existe el producto con el id ingresado');
            }
        }
}