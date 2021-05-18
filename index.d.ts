export interface ICookieStore {
  getRequestCookies: (domain:string, path: string) => string;
  setResponseCookies: (cookieStr: string, domain: string) => void;
}

declare const cookieStore: ICookieStore
export default cookieStore
