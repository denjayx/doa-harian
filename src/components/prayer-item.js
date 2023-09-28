class PrayerItem extends HTMLElement {
    set prayer(prayer) {
        this._prayer = prayer;
        this.render();
    }

    render() {
        this.innerHTML = `
      <div id="prayerItem" class="card">
					<div class="card-header text-capitalize d-flex justify-content-between fs-6">
						<span class="fw-bold fs-5">${this._prayer.doa}</span>
					</div>
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p class="fs-2">${this._prayer.ayat}</p>
							<span class="blockquote-footer"><cite title="Latin">${this._prayer.latin}</cite></span>
							<footer class=""><cite title="Latin">${this._prayer.artinya}</cite></footer>
						</blockquote>
					</div>
      </div>
    `;
    }
}

customElements.define('prayer-item', PrayerItem);
