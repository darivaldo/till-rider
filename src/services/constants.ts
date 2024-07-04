

export let SHOW_VEHICLES_WITHIN = 5; // within 5km
export let POSITION_INTERVAL = 2000; // 2000ms
export let VEHICLE_LAST_ACTIVE_LIMIT = 60000; // 60s

export let DEAL_STATUS_PENDING = 'pending';
export let DEAL_STATUS_ACCEPTED = 'accepted';
export let DEAL_TIMEOUT = 20; // 20s
export let TRIP_STATUS_WAITING = 'waiting';
export let TRIP_STATUS_NOTIFIED = 'notified';
export let TRIP_STATUS_GOING = 'going';
export let TRIP_STATUS_PAID = 'paid';
export let TRIP_STATUS_FINISHED = 'finished';
export let TRIP_STATUS_CANCELED = 'canceled';

export let EMAIL_VERIFICATION_ENABLED = true; // send verification email after user register
export let ENABLE_SIGNUP = true;
export let SOS = "";

// NOTE: Please update your firebase configurations on src/app/app.module.ts

export let GOOGLE_MAP_API_KEY = "AIzaSyC80LrSr49CyKFXGNRJqj5zW3pUwaIN2PQ";
export let GOOGLE_MAP_BASE_URL = "https://maps.googleapis.com/maps/api/";
export let DEFAULT_AVATAR = "http://placehold.it/150x150";
