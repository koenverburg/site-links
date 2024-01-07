import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const background = searchParams.get('background')

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'teal',
          backgroundImage: `url(${process.env.APP_PROTOCOL}://${process.env.APP_URL}/${background})`
        }}
      >
        <div
          style={{
            marginTop: '11rem',
            width: '800px',
            maxHeight: '1500px',
            textAlign: 'center',
            // border: '1px solid red',
            display: 'flex',
            fontSize: 130,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'black',
            lineHeight: '120px',
            // whiteSpace: 'pre-wrap',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      height: 1920,
      width: 1080,
    }
  )
}
