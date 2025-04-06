function conversor() {
  // Solicita o valor e converte
  valor_wons = prompt("Digite um valor em wons")
  won_real = valor_wons * 0.0040
  won_dolar = valor_wons * 0.00069
  won_euro = valor_wons * 0.00063
  
  // Formata cada valor de acordo com seu país
  valor_real = won_real.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  valor_dolar = won_dolar.toLocaleString('en-us',{style: 'currency', currency: 'USD'});
  valor_euro = won_euro.toLocaleString('en-uk',{style: 'currency', currency: 'EUR'});
  
  // Lança um POP-UP de alerta com as conversões
  alert("O valor convertido em Reais é: " + valor_real +
        "\nO valor convertido em Dólares é: " + valor_dolar +
        "\nO valor convertido em Euros é: " + valor_euro)
  
}
