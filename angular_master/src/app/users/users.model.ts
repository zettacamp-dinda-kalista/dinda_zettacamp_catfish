export interface User {
  _id: number,
  name: string,
  age: string,
  gender: number,
  email: string,
  position: string,
  marital_status: string,
  address: {
    address: string,
    zip_code: number,
    city: string,
    country: string
  }
}