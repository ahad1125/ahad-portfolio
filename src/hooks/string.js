export function decodeEmail(email) {
  return atob(email);
}

export function decodePhoneNumber(phone) {
  return atob(phone);
}

export function formatPhoneNumber(phone) {
  return phone;
}
