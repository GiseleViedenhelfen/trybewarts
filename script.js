const botaoSubmit = document.querySelector('#btn-form-header');
const botaoSubmitBody = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');
const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
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
