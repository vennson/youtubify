import axios from 'axios'

export const isProduction = process.env.NODE_ENV === 'production'

const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : 'http://localhost:3000'

export async function search(query: string) {
  const params = { query }
  const { data } = await axios.get<SearchVideoResponse>(
    `${serverUrl}/api/search`,
    { params },
  )
  return data
}
