import logo from "../logomeme.png"

function Header () {
    return (
   <header className="header">
       <img src={logo} alt="logo" className="header-img" />
       <h3 className="header-title">Meme Generator</h3>
       <h4 className="header-project">React Course - Project 3</h4>
   </header>
    )
}

export default Header 