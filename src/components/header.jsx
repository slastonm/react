function Header(){
    let links = ['Main','About', 'Shop', 'Contacts'];
    let linksEl = links.map((item, index)=><a key={index} href="#">{item}</a>)
    return(

        <header>
            logo
            <nav>
                {/* <a href="#">
                    Main
                </a>
                <a href="#">
                    About
                </a>
                <a href="#">
                    Shop
                </a> */}
                {linksEl}
            </nav>
        </header>
    )
}
export default Header;