import { NextResponse } from 'next/server'

const FIELDS = ['name', 'company', 'email', 'phone', 'project_type', 'timeline', 'budget', 'message', 'website'] as const

export async function POST(request: Request) {
  const apiUrl = process.env.CRM_API_URL
  const apiKey = process.env.CRM_API_KEY
  if (!apiUrl || !apiKey) {
    console.error('CRM_API_URL or CRM_API_KEY is not configured.')
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 500 })
  }

  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  // Only forward known fields; empty optional values are dropped.
  const payload: Record<string, string> = {}
  for (const field of FIELDS) {
    const value = (body as Record<string, unknown>)[field]
    if (typeof value === 'string' && value.trim() !== '') payload[field] = value.trim()
  }
  const source = request.headers.get('referer')
  if (source) payload.source = source

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/project-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })
    const data = await response.json().catch(() => ({}))
    if (response.status === 401) {
      console.error('CRM rejected the API key.')
      return NextResponse.json({ error: 'Service unavailable.' }, { status: 500 })
    }
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Failed to reach the CRM:', error)
    return NextResponse.json({ error: 'Service unavailable.' }, { status: 502 })
  }
}
