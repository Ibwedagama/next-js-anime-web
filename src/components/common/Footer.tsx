import Link from 'next/link'
import BaseContainer from './BaseContainer'

function Footer() {
  return (
    <header className='sticky top-0 z-50 w-full bg-muted'>
      <BaseContainer className='flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold'>
          <div className='w-[75px] h-auto'>
            <img src='/logo.png' alt='AniHub Logo' width={75} />
          </div>
        </Link>
      </BaseContainer>
    </header>
  )
}

export default Footer
