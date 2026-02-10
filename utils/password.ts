class Password {
  getStrongPassword(){
    const length = 15;

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    
    // Cria um array de números aleatórios de 32 bits com segurança criptográfica
    const values = new Uint32Array(length);
    crypto.getRandomValues(values);

    for (let i = 0; i < length; i++) {
        // Usa o operador resto (%) para selecionar um caractere do charset
        password += charset[values[i]! % charset.length];
    }
    
    return password;
  }
}

export default Password;