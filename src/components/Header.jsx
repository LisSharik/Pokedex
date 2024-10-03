import { Link } from 'react-router-dom'
import Logo from '../assets/pokedex-logo.svg'
import { useEffect, useState } from 'react'

export default function Header() {
    const [theme, setTheme] = useState('light');
    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('body').classList.add('dark');
        }else{
            document.querySelector('body').classList.remove('dark');
        }
    }, [theme]);

    return (
        <header className='w-screen h-[11vh] bg-brown-dark flex justify-center items-center gap-16 dark:bg-neutral-700 relative'>
            <Link to={"/"} className='hover:scale-105 transition-all'>
                <img className='w-[160px] ' src={Logo} alt="Logo de Pokedex" />
            </Link>
            <button className='py-2 px-4 absolute right-16  bg-brown-lighter rounded-md dark:bg-neutral-300' onClick={handleChangeTheme}>{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }</button>
        </header>
    )
}