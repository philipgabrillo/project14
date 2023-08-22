const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')

const formElements = [ ...form.elements ]

const allInputsValid = () => {

  const valid = formElements.every((element) => {

    if (element.nodeName === 'SELECT') {
      return element.value !== 'Please select an option'
    } else {

      return element.checkValidity()
    }
  })

  return valid
}

const handleChange = () => {

  formElements.forEach((element) => {

    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'  
          && element.type !== 'checkbox'
          && element.type !== 'radio'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'
          && element.type !== 'checkbox'
          && element.type !== 'radio'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }

    if (!element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && (element.type === 'checkbox'
              || element.type === 'radio')
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#212529'
    }

    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.nodeName === 'SELECT'
          && element.value !== 'Please select an option'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }
  })

  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}

const handleSubmit = (e) => {

  e.preventDefault()

  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
}

formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

form.addEventListener('submit', (e) => handleSubmit(e))
