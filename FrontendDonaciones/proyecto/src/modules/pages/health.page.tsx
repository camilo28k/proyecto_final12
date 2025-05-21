import React from 'react'

interface Props{
    children:React.ReactNode
}
 
export default function healthpage({children}:Props) {
  return (
    <main className=''>
    {children}
    </main>
  )
}
