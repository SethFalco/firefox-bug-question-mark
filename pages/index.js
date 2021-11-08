import Head from 'next/head'

export default function Home() {
  const sources = [
    {
      src: "/1080.webp",
      srcSet: "/1080.webp 1x, /2160.webp 2x",
      media: "(min-width: 769px)"
    },
    {
      src: "/353.webp",
      srcSet: "/353.webp 1x, /706.webp 2x",
      media: "(min-width: 481px) and (max-width: 768px)"
    },
    {
      src: "/362.webp",
      srcSet: "/362.webp 1x. /724.webp 2x",
      media: "(max-width: 480px)"
    }
  ]

  const firstSource = sources[0];

  return (
    <div>
      <Head>
        {sources.map((source) => (
          <link
            key={source.src}
            rel="preload"
            as="image"
            href={source.src}
            imagesrcset={source.srcSet}
            media={source.media}
          />
        ))}
      </Head>

      <picture key={`image-${firstSource.src}-${firstSource.srcSet}`}>
        {sources.map((source) => (
          <source
            key={source.src}
            srcSet={source.srcSet}
            media={source.media}
          />
        ))}

        <img src={firstSource.src} srcSet={firstSource.srcSet}/>
      </picture>
    </div>
  )
}
