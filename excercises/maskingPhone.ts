function maskingPhone(phone: string): string {
  const phoneLen: number = phone.length
  const masking: string = '*'.repeat(phoneLen - 4)
  return (
    phone[0] + phone[1] + masking + phone[phoneLen - 2] + phone[phoneLen - 1]
  )
}
