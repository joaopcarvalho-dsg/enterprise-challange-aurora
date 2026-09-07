const form = document.querySelector('.s-cta-form-card form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const btn = form.querySelector('.btn-form')
  btn.textContent = 'Enviando...'
  btn.disabled = true

  const dados = new FormData(form)

  fetch('https://formspree.io/f/xnpqgbbz', {
    method: 'POST',
    body: dados,
    headers: { 'Accept': 'application/json' }
  })
    .then(function (response) {
      if (response.ok) {
        form.innerHTML = `
          <div class="form-sucesso">
            <p>✅ Recebemos sua solicitação!</p>
            <p>Retornaremos em até 6–8 horas úteis.</p>
          </div>
        `
      } else {
        btn.textContent = 'Quero minha demonstração gratuita →'
        btn.disabled = false
        alert('Algo deu errado. Tente novamente.')
      }
    })
    .catch(function () {
      btn.textContent = 'Quero minha demonstração gratuita →'
      btn.disabled = false
      alert('Erro de conexão. Verifique sua internet e tente novamente.')
    })
})