export interface ResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export const getErrorMessage = (error: Error): string => {
  const { message } = JSON.parse(JSON.stringify(error))

  return message
}
