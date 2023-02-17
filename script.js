function criptografar(texto) {
    let criptografado = "";
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      switch (letra) {
        case "e":
          criptografado += "enter";
          break;
        case "i":
          criptografado += "imes";
          break;
        case "a":
          criptografado += "ai";
          break;
        case "o":
          criptografado += "ober";
          break;
        case "u":
          criptografado += "ufat";
          break;
        default:
          criptografado += letra;
          break;
      }
    }
    return criptografado;
  }
  
  function descriptografar(textoCriptografado) {
    const dicionario = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };
  
    const padrao = /enter|imes|ai|ober|ufat/g;
    return textoCriptografado.replace(padrao, function(match) {
      let letra = dicionario[match];
      if (!letra) return match;
      if (letra === "o" && /[aeiu]/.test(match.charAt(0))) {
        letra = "ober";
      }
      return letra;
    });
  } 
  
  const campoTexto = document.getElementById("campo-texto");
  const resultado = document.getElementById("resultado");
  const botaoCriptografar = document.getElementById("botao-criptografar");
  const botaoDescriptografar = document.getElementById("botao-descriptografar");
  const botaoCopiar = document.getElementById("botao-copiar");
  
  botaoCriptografar.addEventListener("click", function() {
    resultado.value = criptografar(campoTexto.value);
  });
  
  botaoDescriptografar.addEventListener("click", function() {
    resultado.value = descriptografar(campoTexto.value);
  });
  
  botaoCopiar.addEventListener("click", function() {
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
  });