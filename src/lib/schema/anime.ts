import { z } from 'zod'

export const animeSchema = z.object({
  mal_id: z.number(),
  url: z.string(),
  images: z.object({
    webp: z.object({
      image_url: z.string(),
      small_image_url: z.string(),
      large_image_url: z.string(),
    }),
  }),
  trailer: z.object({
    youtube_id: z.string().nullable(),
    url: z.string().nullable(),
    embed_url: z.string().nullable(),
  }),
  title: z.string(),
  title_english: z.string().nullable(),
  status: z.string(),
  airing: z.boolean(),
  synopsis: z.string(),
  season: z.string().nullable(),
  year: z.number().nullable(),
  episodes: z.number().nullable(),
  score: z.number().nullable(),
  scored_by: z.number().nullable(),
  rank: z.number().nullable(),
  genres: z
    .object({
      mal_id: z.number(),
      type: z.string(),
      name: z.string(),
      url: z.string(),
    })
    .array(),
})

export const animeListSchema = z.object({
  data: z.array(animeSchema),
  pagination: z.object({
    last_visible_page: z.number(),
    has_next_page: z.boolean(),
    current_page: z.number(),
    items: z.object({
      count: z.number(),
      total: z.number(),
      per_page: z.number(),
    }),
  }),
})

export const animeDetailSchema = z.object({
  data: animeSchema,
})

export type ImageSizes = z.infer<typeof animeSchema>['images']
export type AnimeList = z.infer<typeof animeListSchema>
