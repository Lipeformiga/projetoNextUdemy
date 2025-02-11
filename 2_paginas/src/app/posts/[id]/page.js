import React from 'react'



const postpage = ({params}) => {
  const id = params.id;
  return (
    <div>
      <h1>Titulo: {id}</h1>
      <p>Texto</p>
    </div>
  )
}

export default postpage;