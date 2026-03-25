import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, organization, email, phone, message } = body;

  if (!name?.trim() || !organization?.trim() || !email?.trim()) {
    return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 });
  }

  const { error } = await supabase.from('demo_requests').insert({
    name: name.trim(),
    organization: organization.trim(),
    email: email.trim(),
    phone: phone?.trim() || null,
    message: message?.trim() || null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
