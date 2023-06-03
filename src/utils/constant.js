const API_KEY=process.env.REACT_APP_API_KEY
const YOUTUBE_POPOLUER_VDO_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_KEY}`;

export const SEARCH_URL='http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q='

export default YOUTUBE_POPOLUER_VDO_API;