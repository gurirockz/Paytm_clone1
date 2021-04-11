export const API_BASE_URL="http:/232.243.13..234";

export const getApiUrl=(endpoint)=>`${API_BASE_URL}${endpoint}`

export const LOGIN_API=getApiUrl("/login");
export const SIGNUP_API=getApiUrl("/signup")