import { animeDetailSchema, animeListSchema } from '../schema/anime'
import { fetchJson } from './fetcher'

const RESOURCE = '/anime'

export async function getAnimeList() {
  return await fetchJson(`${RESOURCE}`, animeListSchema)
}

export async function getAnimeById(id: number) {
  return await fetchJson(`${RESOURCE}/${id}`, animeDetailSchema)
}
