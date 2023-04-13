import React from 'react'

interface Props {
  goBack: () => void
  gameName: string
}

function NavBar({ goBack, gameName }: Props) {
  return (
    <nav>
      <div className='container'>
        <a href="#" onClick={goBack}>Retro Games</a>
        <p>{gameName}</p>
      </div>
    </nav>
  )
}

export default NavBar