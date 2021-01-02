
function defaultValueReturn<TValue, TDefault> (
  value: TValue,
  defaultValue: TDefault
) {
  if (!value) return defaultValue
  return value
}

function gbtoByte (gb: number): number {
  return gb * Math.pow(10, 9)
}

function mbToByte (mb: number) {
  return mb * Math.pow(10, 6)
}

function byteToGb (byte: number): number {
  return byte * Math.pow(10, -9)
}

function byteToMb (byte: number) {
  return byte * Math.pow(10, -6)
}

function convertGBtoByte (gb: number): number {
  return defaultValueReturn(gbtoByte(gb), 0)
}

function convertMbtoBy (mb: number) {
  return defaultValueReturn(mbToByte(mb), 0)
}

function convertByteToGB (byte: number) {
  return defaultValueReturn(byteToGb(byte), 0)
}

function convertByteToMb (byte: number) {
  return defaultValueReturn(byteToMb(byte), 0)
}

function convertSizeGbToString (
  gb: number,
  fractionDigits: number = 0
) {
  if (gb === -1) {
    return 'unlimited'
  }
  if (gb >= 1000) {
    return `${(gb / 1000).toFixed(fractionDigits)} TB`
  }
  if (gb < 1000 && gb > 1) {
    return `${gb.toFixed(fractionDigits)} GB`
  }

  if (gb > 0 && gb < 1) {
    const mb = gb * 1000
    if (mb > 1) {
      return `${mb.toFixed(fractionDigits)} MB`
    }
    return `${mb.toFixed(fractionDigits || 1)} MB`
  }
  return 0 + ' GB'
}
