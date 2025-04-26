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
export default function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Removes special characters
    .replace(/\s+/g, '-') // Replaces spaces with hyphens
    .replace(/-+/g, '-') // Collapses multiple hyphens into one
}
