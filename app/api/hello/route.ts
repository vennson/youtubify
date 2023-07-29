import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const data = 'hello ...'
  return NextResponse.json({ data })
}
