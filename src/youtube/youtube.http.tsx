import {get} from "../http/instance";
import {YoutubeUploads} from "./youtube.interface";

const CHANNEL_ID = "UCq7UTrlpw-c5xbeo-UdDMSA";
const API_KEY = "AIzaSyAHYGx6Qbvg5UHooji20mIOcdjs0GSIQh8";

export const fetchYoutubeVideos = () => get<YoutubeUploads>(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`);