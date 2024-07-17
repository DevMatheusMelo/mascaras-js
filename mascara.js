// Mascara para primeira letra maiuscula:
let minha_string = "teste";  
minha_string.replace(/\b\w/g, char => char.toUpperCase()); // -> Teste;

// Mascara para telefone (pronta para ir alterando conforme a digitação): 
let telefone = "11123456789";
if (telefone.length > 2) {
  telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2'); // 11123456789 -> (11)123456789
}
if (telefone.length > 7) {
  telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // (11)123456789 -> (11) 12345-6789
}

// Mascara para CPF (Pronta para ir alterando conforme a digitação)
let cpf = 12345678912
  // Remove tudo que não é dígito
  cpf = cpf.replace(/\D/g, '');

  // Aplica a máscara conforme a quantidade de dígitos
  if (cpf.length <= 3) {
    // Nenhuma máscara aplicada
  } else if (cpf.length <= 6) {
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  } else if (cpf.length <= 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
  } else {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  }

//Mascara para CNPJ (pronta para ir alterando conforme a digitação)
let cnpj = "12345367891012"
  // Remove tudo que não é dígito
  cnpj = cnpj.replace(/\D/g, '');

  // Aplica a máscara conforme a quantidade de dígitos
  if (cnpj.length <= 2) {
    // Nenhuma máscara aplicada
  } else if (cnpj.length <= 6) {
    cnpj = cnpj.replace(/(\d{2})(\d)/, '$1.$2');
  } else if (cnpj.length <= 9) {
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d)/, '$1.$2.$3');
  } else if (cnpj.length <= 12) {
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3/');
  } else if(cnpj.length <= 16){
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

