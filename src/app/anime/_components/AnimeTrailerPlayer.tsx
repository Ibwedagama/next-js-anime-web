'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Play } from 'lucide-react'
import ReactPlayer from 'react-player'

type Props = {
  title: string
  videoUrl: string
}

function AnimeTrailerPlayer({ title, videoUrl }: Props) {
  if (!videoUrl) {
    return (
      <Button className='w-fit' variant={'outline'} disabled>
        <Play /> Watch Trailer
      </Button>
    )
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-fit' variant={'outline'}>
          <Play /> Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:min-w-[600px] lg:min-w-[720px]'>
        <DialogTitle className='text-lg'>{title} Trailer</DialogTitle>
        <div className='aspect-video rounded-lg lg:rounded-xl overflow-clip'>
          <ReactPlayer
            className='react-player'
            url={`https://www.youtube.com/watch?v=${videoUrl}`}
            width='100%'
            height='100%'
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AnimeTrailerPlayer
