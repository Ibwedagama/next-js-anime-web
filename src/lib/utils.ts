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
