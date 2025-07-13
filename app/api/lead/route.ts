import { NextRequest, NextResponse } from 'next/server'

// Interface for the lead data
interface LeadData {
  name: string
  email: string
  phone?: string
  source: 'hero' | 'footer'
  timestamp: string
}

// Interface for the response
interface LeadResponse {
  success: boolean
  message: string
  data?: LeadData
  error?: string
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, phone, source } = body

    // Basic validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name is required',
          error: 'Name field is missing or empty'
        } as LeadResponse,
        { status: 400 }
      )
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email is required and must be valid',
          error: 'Invalid email format'
        } as LeadResponse,
        { status: 400 }
      )
    }

    // Create the lead data object
    const leadData: LeadData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || undefined,
      source: source || 'hero',
      timestamp: new Date().toISOString()
    }

    // 🔥 N8N Webhook Integration
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: 'new_lead',
            data: leadData,
            timestamp: new Date().toISOString()
          })
        })
      } catch (error) {
        console.error('Error sending webhook to n8n:', error)
      }
    }

    // Here you would typically save to database
    // For now, we'll just return the data

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Lead registered successfully',
        data: leadData
      } as LeadResponse,
      { status: 201 }
    )

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: 'Failed to process lead data'
      } as LeadResponse,
      { status: 500 }
    )
  }
}

// Optional: Handle GET requests to retrieve leads (for testing)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (email) {
    return NextResponse.json({
      success: true,
      message: 'Lead lookup endpoint',
      data: {
        email,
        message: 'This would return lead data from database'
      }
    })
  }

  return NextResponse.json({
    success: true,
    message: 'Lead API endpoint is working',
    endpoints: {
      POST: '/api/lead - Create new lead',
      GET: '/api/lead?email=test@example.com - Get lead by email'
    }
  })
} 