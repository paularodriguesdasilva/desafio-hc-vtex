import React from 'react'
import './Form.css'

function Form() {
  function handleSubmit(e) {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value

    const data = {
      name,
      email,
      tel,
    }

    const dataConverted = JSON.stringify(data)

    localStorage.setItem('dados-cadastro', dataConverted)
    alert('Cadastro efetuado com sucesso!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        aria-label="Nome Completo"
        placeholder="Nome Completo"
      />

      <input id="email" type="email" aria-label="Email" placeholder="Email" />

      <input
        id="tel"
        type="text"
        aria-label="Telefone com DDD"
        placeholder="Telefone com DDD"
      />

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Form
