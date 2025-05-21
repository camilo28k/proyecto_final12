import Comparte from '@/modules/components/comparte.component'
import Layout from '@/modules/layouts/layout'
import Image from 'next/image'
import React from 'react'


export default function PageTechnology() {
  return (
    <Layout>Page Technology
              <section className='rounded-xl flex flex-col gap-3 group'>
                <div>
                <Image
                    width={300}
                    height={300}
                  src="https://res.cloudinary.com/dpfiudhfb/image/upload/v1747262967/tecnologia_zmu64d.avif" 
                  alt=""
                  className="rounded-lg  object-cover mx-auto"
                />
                </div>
              </section>
              <Comparte />
    </Layout>
  )
}