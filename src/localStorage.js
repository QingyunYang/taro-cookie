import { getStorageSync, setStorageSync } from '@tarojs/taro'

/**
 * LocalStorage 类
 */
class LocalStorage {
  /**
   * 获取数据项
   * @param {String} key   键
   */
  getItem (key) {
    return getStorageSync(key)
  }

  /**
   * 设置数据项
   * @param {String} key   键
   * @param {Any} value 值
   */
  setItem (key, value) {
    return setStorageSync(key, value)
  }
}

// 单例
export default new LocalStorage()
