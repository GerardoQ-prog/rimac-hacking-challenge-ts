export type User = {
    dni: string
    phone: string 
    license: string
    documentType: number
    terms: boolean
}

export type ErroUser = {
  errorDocumentType: boolean
  errorTextDocumentType: string
  errorPhone: boolean
  errorTextPhone: string
  errorLicense: boolean
  errorTextLicense: string
  errorTerms: boolean
  errorTextTerms: string
  errorDni:boolean
  errorTextDni:string
}