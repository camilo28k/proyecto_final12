import Layout from '@/modules/layouts/layout'
import React from 'react'
import Comparte from '../../modules/components/comparte.component';
import Image from 'next/image'

export default function PageEntrepreneurship() {
  return (
    <Layout>Page Entrepreneurship
            <section className='rounded-xl flex flex-col gap-3 group'>
              <div>
              <Image
                  width={300}
                  height={300}
                src="https://res.cloudinary.com/dpfiudhfb/image/upload/v1747260791/emprendimiento_bjvww8.jpg"
                alt=""
                className="rounded-lg  object-cover mx-auto"
              />
              </div>
            </section>
        <Comparte />
    </Layout>
  )
}
