document.addEventListener('DOMContentLoaded',()=>{
  const themeToggle = document.getElementById('theme-toggle')

  // theme toggler (global key: nejigiku_theme)
  function applyTheme(name){
    // name: 'light' | 'dark'
    if(name === 'dark') document.documentElement.classList.add('theme-dark'), document.documentElement.classList.remove('theme-light')
    else document.documentElement.classList.add('theme-light'), document.documentElement.classList.remove('theme-dark')
    if(themeToggle) themeToggle.textContent = name === 'dark' ? 'Claro' : 'Oscuro'
  }
  const saved = localStorage.getItem('nejigiku_theme') || 'light'
  applyTheme(saved)
  if(themeToggle) themeToggle.addEventListener('click', ()=>{
    const cur = localStorage.getItem('nejigiku_theme') || 'light'
    const next = cur === 'dark' ? 'light' : 'dark'
    localStorage.setItem('nejigiku_theme', next)
    applyTheme(next)
  })
})
