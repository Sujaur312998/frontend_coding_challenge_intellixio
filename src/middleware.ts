import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgentData= userAgent(request)
  const response = NextResponse.next();
  response.headers.set('userAgentData', JSON.stringify(userAgentData.ua));
  return response;
}

export const config = {
  matcher: '/user-agent'
}