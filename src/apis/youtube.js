import axios from 'axios';

const KEY = 'AIzaSyDsrYODOcdi9nU8DPAtuE7AWRfygVy-1ZY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

