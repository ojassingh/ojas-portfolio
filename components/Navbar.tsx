
const Navbar = () => {

    
    const navItems = [
        {
            name: '// about',
            link: '#about'
        },
        {
            name: '// projects',
            link: '#projects'
        },
        {
            name: '// work',
            link: '#work'
        },
        {
            name: '// resume',
            link: '#resume'
        },
        // {
        //     name: '// contact',
        //     link: '#contact'
        // },
        
    ]

    return(<div className="py-10 grid place-content-center">
       
        <nav className="text-darkgray">
            <ul className="flex">
                {/* <p className="px-2 font-medium ">{"<nav>"}</p> */}
                {navItems.map((item, i)=>{
                    return(<li className="font-medium px-2" key={i}>
                        <a href={item.link} className="bg-darkgray rounded-xl px-5 py-3 text-chalk">{item.name}</a>
                    </li>)
                })}
                {/* <p className="px-2 font-medium ">{"</nav>"}</p> */}
            </ul>
        </nav>
    </div>)
}

export default Navbar;