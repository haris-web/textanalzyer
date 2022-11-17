import React from 'react'
import '../css/Navbar.css'

export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 ">{props.heading}</span>
  </div>
</nav>
    </div>
  )
}
