import Comparte from '@/modules/components/comparte.component'
import Layout from '@/modules/layouts/layout'
import Image from 'next/image'
import React from 'react'


export default function PageArt() {
  return (
    <Layout>Page Art
      <section className='rounded-xl flex flex-col gap-3 group'>
        <div>
        <Image
            width={300}
            height={300}
          src="https://res.cloudinary.com/dpfiudhfb/image/upload/v1747263928/artes_w9tcje.jpg" 
          alt=""
          className="rounded-lg  object-cover mx-auto"
        />
        </div>
      </section>
        <Comparte />
    </Layout>
  )
}
