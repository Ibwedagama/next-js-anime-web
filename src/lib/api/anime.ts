import {
  animeDetailSchema,
  AnimeListQueryParams,
  animeListSchema,
} from '../schema/anime'
import { toSearchParams } from '../utils'
import { fetchJson } from './fetcher'

const RESOURCE = '/anime'

export async function getAnimeList(params: AnimeListQueryParams) {
  const queryParams = toSearchParams(params)

  return await fetchJson(`${RESOURCE}?${queryParams}`, animeListSchema)
}

export async function getAnimeById(id: number) {
  return await fetchJson(`${RESOURCE}/${id}`, animeDetailSchema)
}
