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

    return(<div className="xs:hidden lg:sticky bg-dark py-10 grid place-content-end md:ml-8 ">
       
        <nav className="">
            <ul className="md:flex-none lg:flex-wrap text-cyan-600 brightness-150">
                {/* <p className="px-2 font-medium ">{"<nav>"}</p> */}
                {navItems.map((item, i)=>{
                    return(<motion.li  whileHover={{scale: 1.05}} className="font-medium px-2 text-right text-lg hover:text-white" key={i}>
                            <motion.a href={item.link} className="px-5 py-3 hover:text-white">{item.name}</motion.a>
                    </motion.li>
                    )
                })}
                {/* <p className="px-2 font-medium ">{"</nav>"}</p> */}
            </ul>
        </nav>
    </div>)
}

export default Navbar;