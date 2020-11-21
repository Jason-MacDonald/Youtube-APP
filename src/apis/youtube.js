import axios from 'axios';

const KEY = 'AIzaSyB6mzJ5YF0xuDIAId7kYLaokPbjdkSX7yE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});