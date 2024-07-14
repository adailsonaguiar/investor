export const maskMoney = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

//  criar unção que formata número colocando pontos.
export const maskNumber = (value: number) => {
  return new Intl.NumberFormat('pt-BR').format(value);
}