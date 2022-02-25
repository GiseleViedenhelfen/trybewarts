//  recuperar tags header
const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
const botaoSubmit = document.querySelector('#btn-form-header');
//  recuperar tags formulário
const formularioBody = document.querySelector('#evaluation-form');
const nomeFormBody = document.querySelector('#input-name');
//  const sobrenomeFormBody = document.querySelector('#input-lastname');
//  const emailBody = document.querySelector('#input-email');
const textArea = document.querySelector('#textarea');
const botaoSubmitBody = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');
const paragrafoContador = document.querySelector('#counter');
botaoSubmit.addEventListener('click', () => {
  if (senha.value !== '123456' || email.value !== 'tryber@teste.com') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
checkboxAgreement.addEventListener('change', () => {
  botaoSubmitBody.disabled = !checkboxAgreement.checked;
});

textArea.addEventListener('input', () => {
  const inputTextArea = textArea.value;
  const contador = 500;
  paragrafoContador.innerText = contador - inputTextArea.length;
});

botaoSubmitBody.addEventListener('click', (event) => {
  event.preventDefault();
  const pNome = document.createElement('p');
  pNome.innerHTML = `Nome: ${nomeFormBody.value}`;
  formularioBody.appendChild(pNome);
  nomeFormBody.value = '';
});
