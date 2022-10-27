import { motion } from "framer-motion"
const Navbar = () => {

    
    const navItems = [
        // {
        //     name: '// about',
        //     link: '#about'
        // },
        {
            name: '≫ home',
            link: '#home'
        },
        {
            name: '≫ about',
            link: '#about'
        },
        {
            name: '≫ work-xp',
            link: '#work'
        },
        {
            name: '≫ projects',
            link: '#projects'
        },
        {
            name: '≫ resume/cv',
            link: '#resume'
        },



        // {
        //     name: '// contact',
        //     link: '#contact'
        // },
        
    ]

    return(<div className="sticky top-0 bg-dark py-10 grid place-content-end">
       
        <nav className="text-darkgray">
            <ul className="">
                {/* <p className="px-2 font-medium ">{"<nav>"}</p> */}
                {navItems.map((item, i)=>{
                    return(<motion.li  whileHover={{scale: 1.05}} className="font-medium px-2 text-right text-lg" key={i}>
                            <motion.a href={item.link} className="px-5 py-3 text-projcomp scroll-smooth">{item.name}</motion.a>
                    </motion.li>
                    )
                })}
                {/* <p className="px-2 font-medium ">{"</nav>"}</p> */}
            </ul>
        </nav>
    </div>)
}

export default Navbar;