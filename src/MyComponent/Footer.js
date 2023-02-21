import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "93vh",
    width: "100%",
    // border: "2px solid red"
  }
  return (
    

    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center" > Copyright &copy; MyTodolist.MyComponent</p>
      
      </footer>
  )
}
