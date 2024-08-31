const API_KEY = "AIzaSyBDTEj2a1ds3lU09kD4oY6ROEdIdY-Fo0Y";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_FILTERS = ['All', 'Live', 'Wealth', 'Shorts', 'Gaming', 'Fashion', 'JavaScript', 'React', 'Angular', 'Cricket', 'Shark Tank', 'History', 'Asian Music', 'Watched']