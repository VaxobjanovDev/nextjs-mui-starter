import { join, map, pipe, toPairs } from 'ramda'

export const stringify = pipe(
  toPairs, // Convert object to array of key-value pairs
  map(join('=')), // Join key-value pairs with '='
  join('&') // Join pairs with '&'
)
