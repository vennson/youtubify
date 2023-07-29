import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {
      q: query,
      hl: 'en',
      gl: 'US',
    },
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.X_RAPID_API_HOST,
    },
  }

  try {
    const { data } = await axios.request(options)
    return NextResponse.json({ data })
  } catch (error) {
    console.error(error)
  }
}
