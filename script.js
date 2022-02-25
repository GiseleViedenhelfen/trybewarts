const botaoSubmit = document.querySelector('#btn-form-header');
const email = document.querySelector('#mail');
const senha = document.querySelector('#password');
botaoSubmit.addEventListener('click', () => {
  if (senha.value !== '123456' || email.value !== 'tryber@teste.com') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
