import React from "react"

function Footer(){
 
  const year= new Date().getFullYear();
    return <footer>
    <h4> News-Letter App|| Copyright © {year}</h4>
    </footer>
}

export default Footer;