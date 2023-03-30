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
            name: '≫ work-exp',
            link: '#work'
        },
        {
            name: '≫ projects',
            link: '#projects'
        },
        {
            name: '≫ my resume',
            link: 'https://drive.google.com/file/d/1zUABabvTjbFZHnFnBX3DbfQ6RwowaLZ4/view?usp=share_link'
        },



        // {
        //     name: '// contact',
        //     link: '#contact'
        // },
        
    ]

    return(<div className="py-10 grid place-content-center">
       
        <nav className="">
            <ul className="flex gap-6 text-cyan-600 brightness-150">
                {/* <p className="px-2 font-medium ">{"<nav>"}</p> */}
                {navItems.map((item, i)=>{
                    return(<motion.li  whileHover={{scale: 1.05}} className="font-medium text-center text-lg hover:text-white" key={i}>
                            <motion.a href={item.link} className="py-3 hover:text-white">{item.name}</motion.a>
                    </motion.li>
                    )
                })}
                {/* <p className="px-2 font-medium ">{"</nav>"}</p> */}
            </ul>
            <h1 className="text-cyan-600 brightness-150 text-center text-xs">(navbars are overrated)</h1>
        </nav>
    </div>)
}

export default Navbar;