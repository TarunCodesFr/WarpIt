import {config} from '../config';
import {google} from 'googleapis';

const GOOGLE_CLIENT_ID = config.GOOGLE_ID;
const GOOGLE_CLIENT_SECRET = config.GOOGLE_SECRET;

export const googleProvider = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, 'postmessage');
