export interface ResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
  user?: any
  error?: any
  pages?: any
  updated?: any
}

export const getReadableErrorMessage = (code: string): string => {
  const message = code.replace(/auth\/|\(|\)/g, '').replace(/-/g, ' ')

  return message
}

export const getErrorMessage = (error: Error): string => {
  const { message } = JSON.parse(JSON.stringify(error))

  return message
}
