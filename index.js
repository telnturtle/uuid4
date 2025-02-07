const handleClickRandom = async () => {
  const uuid = crypto.randomUUID()
  document.getElementById('output').innerText = uuid

  // render history uuids
  uuids.push(uuid)
  const history = document.querySelector('.history')
  history.innerHTML = ''
  uuids.forEach((uuid) => {
    const li = document.createElement('li')
    li.innerText = uuid
    history.appendChild(li)
  })
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

const uuids = []
const historyEl = {
  opened: false,
}
const historyToggledTimer = {
  timer: null,
}
const handleClickHistory = () => {
  historyEl.opened = !historyEl.opened
  const history = document.querySelector('.history')
  if (historyEl.opened) {
    history.style.display = 'block'
  } else {
    history.style.display = 'none'
  }

  const button = document.querySelector('#history')
  button.classList.add('copied')
  historyToggledTimer && window.clearTimeout(historyToggledTimer)
  historyToggledTimer = window.setTimeout(() => {
    button.classList.remove('copied')
  }, 2000)
}

const handlers = {
  random: handleClickRandom,
  copy: handleClickCopy,
  history: handleClickHistory,
}

for (const [key, handler] of Object.entries(handlers)) {
  document.getElementById(key).addEventListener('click', handler)
}
