import '../components/prayer-list';
import axios from 'axios';
import { BASE_URL } from '../utils/constanta';

const main = () => {
    const prayerListElement = document.querySelector('prayer-list');
    const getPrayer = async () => {
        try {
            const response = await axios.get(BASE_URL, 'Access-Control-Allow-Origin: *');
            const data = await response.data.data;
            if (!response.status) {
                alert('Gagal memuat data');
            } else {
                renderPrayers(data);
            }
        } catch (error) {
            alert(error);
        }
    };

    const renderPrayers = (data) => {
        prayerListElement.prayers = data;
    };

    getPrayer();
};

export default main;
