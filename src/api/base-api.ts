import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import { stringify } from '@/utils/stringify'
import { createPathWithParams } from '@/utils/path-params'

export interface Options extends AxiosRequestConfig {
  readonly query?: object
  readonly params?: object
}

const queryToString = (query: object = {}): string => {
  return stringify(query)
}

const createRequestOptions = (options: AxiosRequestConfig): AxiosRequestConfig => {
  const { headers = {} } = options
  const token = localStorage.getItem('financial-token')
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return {
    baseURL: '',
    ...options,
    headers
  }
}

const createRequestUrl = (url: string, query: object = {}, params: object = {}): string => {
  const formattedUrl = createPathWithParams(url, params)

  return [formattedUrl, queryToString(query)].filter(Boolean).join('?')
}

export const request = <T>(url: string, options: Options = {}) => {
  return new Promise<T>((resolve, reject) => {
    const { query, params, ...kyOptions } = options

    const formattedOptions = createRequestOptions(kyOptions)
    const formattedUrl = createRequestUrl(url, query, params)

    return axios
      .request({ url: formattedUrl, ...formattedOptions })
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          return response.data || {}
        }

        return {
          response
        }
      })
      .then((data) => {
        if (data.status === 204) {
          return resolve({} as T)
        }

        return resolve(data)
      })
      .catch((error: AxiosError) => {
        reject(error.response)
        if (error?.response?.status === 401) {
          const financialToken = localStorage.getItem('financial-token')
          if (financialToken) {
            localStorage.setItem('financial-token', '')
            location.reload()
          }
        }
      })
  })
}

export const getRequest = <T>(url: string, options: Options = {}) => {
  return request<T>(url, { ...options, method: 'get' })
}

export const postRequest = <T>(url: string, options: Options = {}) => {
  return request<T>(url, { ...options, method: 'post' })
}

export const putRequest = <T>(url: string, options: Options = {}) => {
  return request<T>(url, { ...options, method: 'put' })
}

export const deleteRequest = <T>(url: string, options: Options = {}) => {
  return request<T>(url, { ...options, method: 'delete' })
}

export const patchRequest = <T>(url: string, options: Options = {}) => {
  return request<T>(url, { ...options, method: 'patch' })
}
