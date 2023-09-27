async function main() {
	const baseUrl = "https://doa-doa-api-ahmadramadhan.fly.dev/api";
	const getDoa = async () => {
		try {
			const response = await fetch(baseUrl);
			const responseJson = await response.json();

			if (!response.ok) {
				showResponseMessage(responseJson.msg);
			} else {
				renderAllPrayer(responseJson);
			}
		} catch (error) {
			showResponseMessage(error);
		}
	};

	const showResponseMessage = (message = "route tidak ditemukan") => {
		console.log(message);
	};

	const renderAllPrayer = (prayers) => {
		const listPrayerElement = document.querySelector("#prayerName");
		listPrayerElement.innerHTML = "";

		prayers.forEach((prayer) => {
			const prayerElement = document.createElement("div");
			prayerElement.className = "prayerCard";
			prayerElement.innerHTML = `
        <span class="text-black">${prayer.doa}</span>
      `;
			prayerElement.addEventListener("click", (e) => detailPrayer(prayer));

			listPrayerElement.append(prayerElement);
		});
	};

	const detailPrayer = (prayer) => {
		const prayerTitle = document.getElementById("prayerTitle");
		const btnBack = document.createElement("button");
		btnBack.innerText = "kembali";
		btnBack.addEventListener("click", (e) => {
			btnBack.classList.add("hidden");
			getDoa();
			prayerTitle.innerHTML = `
        <h2 class="title">Semua Doa</h2>
      `;
		});

		prayerTitle.innerHTML = `
      <h2 class="title">${prayer.doa}</h2>
    `;
		prayerTitle.append(btnBack);

		const listPrayerElement = document.querySelector("#prayerName");
		listPrayerElement.innerHTML = "";

		listPrayerElement.innerHTML = `
      <div class="prayerCard">
				<span class="text-black">${prayer.latin}</span>
			</div>
    `;
	};

	getDoa();
}

export default main;
