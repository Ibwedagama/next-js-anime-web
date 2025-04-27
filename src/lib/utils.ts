import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ZodError } from 'zod'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getZodFlatErrorMessage(error: ZodError) {
  const { fieldErrors } = error.flatten()
  return JSON.stringify(fieldErrors, null, 2)
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} title - The title to slugify.
 * @returns {string} The slugified version of the title.
 */
export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Removes special characters
    .replace(/\s+/g, '-') // Replaces spaces with hyphens
    .replace(/-+/g, '-') // Collapses multiple hyphens into one
}
/**
 * Converts an object of query parameters into a URL-encoded search string.
 *
 * - Ignores `undefined` and `null` values.
 * - Converts all values to strings.
 *
 * @param {Record<string, unknown>} params - An object containing query parameters.
 * @returns {string} A URL-encoded search string (e.g., `page=1&limit=12`).
 */
export function toSearchParams(params: Record<string, unknown>) {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value.toString())
    }
  })

  return searchParams.toString()
}
