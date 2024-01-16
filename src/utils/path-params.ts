import { curry } from 'ramda'

export const createPathWithParams = curry((url, params) => {
  try {
    const path = url.replace(/:([^\/]+)/g, (_: any, key: any) => params[key])
    return path
  } catch (error: any) {
    return new Error(`Params error: ${error.message}`)
  }
})
