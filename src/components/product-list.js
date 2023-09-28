import './product-item';

class ProductList extends HTMLElement {
    set products(products) {
        this._products = products;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._products.forEach((product) => {
            const productItemElement = document.createElement('product-item');
            productItemElement.product = product;
            this.appendChild(productItemElement);
        });
    }
}

customElements.define('product-list', ProductList);
