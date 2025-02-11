"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
const searchParams = useSearchParams();

const valorParam = searchParams.get("parametro");

  return (
    <div>
        <h1>Parametro: {valorParam}</h1>
    </div>
  )
}

export default page