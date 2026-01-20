// 'use server'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

// export async function loginAction(formData) {
//   const email = formData.get('email');
//   const password = formData.get('password');

//   // রিকোয়ারমেন্ট অনুযায়ী হার্ডকোডেড ক্রেডেনশিয়াল
//   if (email === "mansura@aura.com" && password === "aura2026") {
//     const cookieStore = await cookies();
//     // কুকিতে সেশন সেভ করা
//     cookieStore.set('aura_session', 'true', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 60 * 60 * 24, // ১ দিন
//       path: '/',
//     });
    
//     redirect('/items'); // সাকসেস হলে আইটেম পেজে রিডাইরেক্ট
//   } else {
//     return { error: "ভুল ইমেইল বা পাসওয়ার্ড!" };
//   }
// }
'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === "mansura@aura.com" && password === "aura2026") {
    const cookieStore = await cookies();
    
    // save session cookie
    cookieStore.set('aura_session', 'authenticated_123', {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, 
      path: '/',
    });
    
    
    redirect('/items'); 
  } else {
    return { error: "Invalid email or password!" };
  }
}