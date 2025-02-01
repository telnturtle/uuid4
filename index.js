const handleClickRandom = async () => {
  const uuid = crypto.randomUUID()
  document.getElementById('output').innerText = uuid
}

const copiedTimer = {
  timer: null,
}

const handleClickCopy = () => {
  const hash = document.getElementById('output')?.innerText ?? ''
  navigator.clipboard.writeText(hash)
  const button = document.getElementById('copy')
  button.classList.add('copied')
  copiedTimer.timer && window.clearTimeout(copiedTimer.timer)
  copiedTimer.timer = window.setTimeout(() => {
    button.classList.remove('copied')
  }, 2000)
}

const handlers = {
  random: handleClickRandom,
  copy: handleClickCopy,
}

for (const [key, handler] of Object.entries(handlers)) {
  document.getElementById(key).addEventListener('click', handler)
}

const handleKeydownInput = (event) => {
  if (event.key === 'Enter') {
    handleClickRandom()
  }
}
document.getElementById('input').addEventListener('keydown', handleKeydownInput)
