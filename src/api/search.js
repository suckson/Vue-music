import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg'

  const data = Object.assign({}, commonParams, {
    key: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    perpage,
    n: perpage,
    zhidaqu: 1,
    platform: 'h5',
    needNewCode: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    uid: 0,
    remoteplace: 'txt.mqq.all'
  })

  return jsonp(url, data, options)
}