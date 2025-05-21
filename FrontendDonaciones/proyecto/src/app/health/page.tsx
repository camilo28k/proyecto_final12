import Comparte from '@/modules/components/comparte.component'
import Layout from '@/modules/layouts/layout'
import Image from 'next/image'
import React from 'react'

export default function PageHealth() {
  return (
    <Layout> health page
                  <section className='rounded-xl flex flex-col gap-3 group'>
                    <div>
                    <Image
                        width={300}
                        height={300}
                      src="https://res.cloudinary.com/dpfiudhfb/image/upload/v1747262419/salud_vi5tmq.avif" 
                      alt=""
                      className="rounded-lg  object-cover mx-auto"
                    />
                    </div>
                  </section>
        <Comparte />
    </Layout>
  )
}
