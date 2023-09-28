class ProductItem extends HTMLElement {
    set product(product) {
        this._product = product;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card mb-4">
            <img src="${this._product.thumbnail}" class="object-fit-cover" alt="${this._product.title} image" height="300px">
            <div class="card-body">
                <h5 class="card-title">${this._product.title}</h5>
                <p class="card-text text-truncate">${this._product.description}</p>
                <p class="blockquote-footer">${this._product.brand}</p>
                <h5 class="card-title">${this._product.price} USD</h5>
                <a href="#" class="btn btn-primary">Detail</a>
            </div>
        </div>
    `;
    }
}

customElements.define('product-item', ProductItem);
