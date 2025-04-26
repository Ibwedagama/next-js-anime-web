'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import BaseContainer from './BaseContainer'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background'>
      <BaseContainer className='flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold'>
          MyAnime
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='flex flex-col gap-6 pt-10'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-lg font-medium'
                >
                  {link.label}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </BaseContainer>
    </header>
  )
}
