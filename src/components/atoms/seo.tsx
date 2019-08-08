import React from 'react'
import { Helmet } from 'react-helmet'
import image from 'src/static/img/og.png'

export const SEO: React.FC<{}> = () => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title="Tomás Francisco"
    meta={[
      {
        name: 'title',
        content: 'Tomás Francisco'
      },
      {
        name: 'description',
        content: 'Personal Portfolio'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: 'https://tomasfrancisco.com/'
      },
      {
        name: 'og:title',
        content: 'Tomás Francisco'
      },
      {
        name: 'og:description',
        content: 'Personal Portfolio'
      },
      {
        name: 'og:image',
        content: image
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:url',
        content: 'https://tomasfrancisco.com/'
      },
      {
        name: 'twitter:title',
        content: 'Tomás Francisco'
      },
      {
        name: 'twitter:description',
        content: 'Personal Portfolio'
      },
      {
        name: 'twitter:image',
        content: image
      }
    ]}
  />
)
