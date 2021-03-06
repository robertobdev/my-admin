export interface Zipcode {
  zipcode?: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface ZipcodeAPI {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}
