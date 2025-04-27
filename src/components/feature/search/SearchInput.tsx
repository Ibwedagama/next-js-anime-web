'use client'

import { Input } from '../../ui/input'

type Props = {
  onSearchChange: (value: string) => void
}

function SearchInput({ onSearchChange }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  return (
    <Input
      type='text'
      placeholder='Search Anime...'
      onChange={handleInputChange}
    />
  )
}

export default SearchInput
