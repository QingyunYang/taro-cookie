import URLParse from 'url-parse'
import { Chain, setStorageSync, getStorageSync, request } from '@tarojs/taro'
import CookieStore from './CookieStore'

export const cookieInterceptor = async(chain: Chain): Promise<any> => {
  const cookieStore = new CookieStore({
    storage: {
      setItem: setStorageSync,
      getItem: (key: string) => getStorageSync(key),
    }
  })

  chain.requestParams.header = chain.requestParams.header || {}

  const { hostname, pathname } = URLParse(chain.requestParams.url)
  chain.requestParams.header['Cookie'] = cookieStore.getRequestCookies(hostname, pathname)

  return chain.proceed(chain.requestParams).then((res: request.SuccessCallbackResult) => {
    const cookieStr = res.header['Set-Cookie'] || res.header['set-cookie'] || ''
    if (cookieStr) cookieStore.setResponseCookies(cookieStr, hostname)
    return res
  })
}

export default CookieStore;