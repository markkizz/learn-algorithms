  /**
   * @param email: example@nipa.com
   * @returns e*****e@n***.com
   */
  export function maskingEmail(email) {
    const regex = new RegExp(/(.)(.*?)(.@.)(.*?)(\.[^\.]+)$/g)
    const match = regex.exec(email)
    const firstChar = match[1]
    const emailName = match[2]
    const emailSymbol = match[3]
    const domain = match[4]
    const dotCom = match[5]

    return (
      firstChar +
      '*'.repeat(emailName.length) +
      emailSymbol +
      '*'.repeat(domain.length) +
      dotCom
    )
  }
