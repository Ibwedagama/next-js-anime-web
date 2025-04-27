import { ZodSchema } from 'zod'
import { getZodFlatErrorMessage } from '../utils'

export type ApiResult<T> = {
  data: T | null
  error: string | null
  message: string | null
  status: number
}

type FetchJsonOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: unknown
  headers?: HeadersInit
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchJson<T>(
  url: RequestInfo,
  schema: ZodSchema<T>,
  options: FetchJsonOptions = {},
): Promise<ApiResult<T>> {
  try {
    const { method = 'GET', body, headers } = options

    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: body ? JSON.stringify(body) : undefined,
      cache: 'force-cache', // Cache all network request
    })

    if (!response.ok) {
      const errorText = await response.text()
      const { error } = JSON.parse(errorText)

      return {
        data: null,
        error: `[FETCH ERROR] Failed to fetch ${url} with status ${response.status}: ${error}`,
        message: null,
        status: response.status,
      }
    }

    const json = await response.json()
    const parsed = schema.safeParse(json)

    if (!parsed.success) {
      throw new Error(
        `[ZOD ERROR] Failed to parse response from ${url}: ${getZodFlatErrorMessage(
          parsed.error,
        )}`,
      )
    }

    return {
      data: parsed.data,
      error: null,
      message: json.message ?? null,
      status: response.status,
    }
  } catch (error: any) {
    console.error(error)
    return {
      data: null,
      error: `[FETCH ERROR] ${error.message}`,
      message: null,
      status: 500,
    }
  }
}
