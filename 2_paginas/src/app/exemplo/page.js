import React from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
const searchParams = useSearchParams();

  return (
    <div>page</div>
  )
}

export default page