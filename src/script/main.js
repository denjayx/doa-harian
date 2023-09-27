import "../components/prayer-list.js";
const axios = require("axios");

function main() {
	const prayerListElement = document.querySelector("prayer-list");
	const baseUrl = "https://doa-doa-api-ahmadramadhan.fly.dev/api/";
	const getPrayer = async () => {
		try {
			const response = await axios.get(baseUrl);
			const data = await response.data;
			if (!response.status) {
				console.log("Gagal memuat data");
			} else {
				renderPrayers(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const renderPrayers = (data) => {
		prayerListElement.prayers = data;
	};

	getPrayer();
}

export default main;
