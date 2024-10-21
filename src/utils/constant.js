
const GOOGLE_API_KEY = "AIzaSyBIHOzO5Dmtx0_0UgAmFfCkRm0GKLqOu-k";


export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

//we dont need to keep key like here we did. should keep in .env file while deployment nd all. for now i put key here.