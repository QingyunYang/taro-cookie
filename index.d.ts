import { Chain } from '@tarojs/taro'

declare module 'taro-cookie' {
  
  function cookieInterceptor(chain: Chain): Promise<any>
}
