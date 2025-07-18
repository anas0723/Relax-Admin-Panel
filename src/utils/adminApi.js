// Utility for admin API authentication and real-time data fetching
// Credentials are loaded from environment variables (never exposed to client)


// Checks credentials locally (no API call)
export function checkAdminLogin(inputEmail, inputPassword) {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (inputEmail === email && inputPassword === password) {
    return { success: true, message: 'Login successful' };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
}
