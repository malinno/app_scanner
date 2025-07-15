export function validateEmail(email: string): boolean {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function validatePassword(password: string): boolean {
  // Tối thiểu 6 ký tự, có chữ và số
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
} 