import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import genby from '../Assets/genby.png'

const Header = (props) => {
    const [Saldo, setSaldo] = useState("")

    useEffect(() => {
        fetch(`http://localhost:6287/genbox/get`)
        .then(res => res.json())
        .then(res => {
            setSaldo(res.data)
        })
    }, [])

    return (
        <div className="header">
            <header>
                <div className='logo'>
                    <img src={genby}/>
                    <h1>Genbox CELL</h1>
                </div>
                <h2>{props.Saldo}</h2>
                <ul>
                    <li><Link to="/"><i class="fa-solid fa-pen"></i><span> INPUT</span></Link></li>
                    <li><Link to="/riwayat"><i class="fa-solid fa-user"></i><span> RIWAYAT</span></Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header