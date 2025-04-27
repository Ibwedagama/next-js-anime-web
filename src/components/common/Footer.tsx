import Link from 'next/link'
import BaseContainer from './BaseContainer'

function Footer() {
  return (
    <footer
      className='sticky top-0 z-50 w-full bg-muted'
      data-testid='footer__container'
    >
      <BaseContainer className='flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold'>
          <div className='w-[75px] h-auto' data-testid='footer__app-logo'>
            <img src='/logo.png' alt='AniHub Logo' width={75} />
          </div>
        </Link>
      </BaseContainer>
    </footer>
  )
}

export default Footer
