import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  const options = {
    method: 'GET',
    url: `https://${process.env.YOUTUBE_API_HOST}/search`,
    params: { query },
    headers: {
      'X-RapidAPI-Host': process.env.YOUTUBE_API_HOST,
      'X-RapidAPI-Key': process.env.YOUTUBE_API_KEY,
    },
  }

  try {
    const { data } = await axios.request<SearchVideoResponse>(options)
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
  }
}
