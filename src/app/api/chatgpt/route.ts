import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      error: 'ChatGPT functionality is disabled during build',
      message: 'This feature will be available after deployment when OPENAI_API_KEY is configured.'
    },
    { status: 503 }
  );
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'ChatGPT API endpoint',
      status: 'Disabled during build',
      note: 'Configure OPENAI_API_KEY environment variable to enable'
    },
    { status: 200 }
  );
}