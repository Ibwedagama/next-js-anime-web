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
    youtube_id: z.string().nullish(),
    url: z.string().nullish(),
    embed_url: z.string().nullish(),
  }),
  title: z.string(),
  title_english: z.string().nullish(),
  type: z.string().nullish(),
  episodes: z.number().nullish(),
  status: z.string().nullish(),
  airing: z.boolean(),
  aired: z.object({
    from: z.string().nullish(),
    to: z.string().nullish(),
  }),
  synopsis: z.string().nullish(),
  season: z.string().nullish(),
  year: z.number().nullish(),
  score: z.number().nullish(),
  scored_by: z.number().nullish(),
  rank: z.number().nullish(),
  studios: z
    .object({
      mal_id: z.number(),
      type: z.string(),
      name: z.string(),
      url: z.string(),
    })
    .array(),
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

export const animeListQueryParamsSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  q: z.string().optional(),
  sort: z.enum(['desc', 'asc']).optional(),
  order_by: z
    .enum([
      'mal_id',
      'title',
      'start_date',
      'end_date',
      'episodes',
      'score',
      'scored_by',
      'rank',
      'popularity',
      'members',
      'favorites',
    ])
    .optional(),
})

export type ImageSizes = z.infer<typeof animeSchema>['images']
export type AnimeList = z.infer<typeof animeListSchema>
export type AnimeListQueryParams = z.infer<typeof animeListQueryParamsSchema>
