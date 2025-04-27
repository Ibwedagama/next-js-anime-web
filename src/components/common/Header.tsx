import Link from 'next/link'
import BaseContainer from './BaseContainer'
import { Searchbar } from '../feature/search/Searchbar'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full bg-muted'>
      <BaseContainer className='flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold'>
          <div className='w-[75px] h-auto'>
            <img src='/logo.png' alt='AniHub Logo' width={75} />
          </div>
        </Link>

        {/* Search */}
        <Searchbar />
      </BaseContainer>
    </header>
  )
}
