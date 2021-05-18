export interface ICookieStore {
  getRequestCookies: (domain:string, path: string) => string;
  setResponseCookies: (cookieStr: string, domain: string) => void;
}

export default class CookieStore {
  getRequestCookies: (domain:string, path: string) => string;
  setResponseCookies: (cookieStr: string, domain: string) => void;
}
