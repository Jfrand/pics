import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f6bc56d59c4a40c07864f6f9d8e869e90b216a60a7ba4f0d201b785e04e33ea8'
    }
});