import './prayer-item';

class PrayerList extends HTMLElement {
    set prayers(prayers) {
        this._prayers = prayers;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._prayers.forEach((prayer) => {
            const prayerItemElement = document.createElement('prayer-item');
            prayerItemElement.prayer = prayer;
            this.appendChild(prayerItemElement);
        });
    }
}

customElements.define('prayer-list', PrayerList);
