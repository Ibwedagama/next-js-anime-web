import { animeListSchema } from '../schema/anime'
import { fetchJson } from './fetcher'

const RESOURCE = '/anime'

export async function getAnimeList() {
  return await fetchJson(`${RESOURCE}`, animeListSchema)
}
