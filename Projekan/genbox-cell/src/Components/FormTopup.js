import { useState } from "react"
import BGenbox from '../Assets/BGenbox.png'

const FormTopup = (props) => {
    const [Form, formUse] = useState(true);

    return (
        <div className="container-form">
            <img className='BG' src={BGenbox}/>
            <div className="btn-form">
                <input type="button" value="TOP-UP" onClick={() => formUse(true)}/>
                <input type="button" value="JUAL" onClick={() => formUse(false)}/>
            </div>
            <div className="container">
                {
                    Form ?
                    
                    <div className="form-section">
                    <h1>TOP - UP</h1>
                    <form onSubmit={props.POST}>
                        <label>TANGGAL</label>
                        <input type="text" onInput={(e) => props.tanggal(e.target.value)}/>
                        <label>NOMINAL</label>
                        <input type="text" onInput={(e) => props.nominal(e.target.value)}/>
                        <button>KIRIM</button>
                    </form>
                </div> :
                <div className="form-section">
                <h1>JUAL</h1>
                <form onSubmit={props.POST}>
                    <label>TANGGAL</label>
                    <input type="text"/>
                    <label>PROVIDER</label>
                    <select>
                        <option value="Telkomsel">TELKOMSEL</option>
                        <option value="Indosat">INDOSAT</option>
                        <option value="Smartfren">SMARTFREN</option>
                        <option value="XL">XL</option>
                        <option value="Tri">TRI</option>
                        <option value="Axis">AXIS</option>
                    </select>
                    <label>NOMINAL</label>
                    <select>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="25000">25000</option>
                        <option value="50000">50000</option>
                        <option value="70000">70000</option>
                        <option value="100000">100000</option>
                    </select>
                    <label>NOMOR HANDPHONE</label>
                    <input type="text"/>
                    <button>KIRIM</button>
                </form>
            </div>
                }
            </div>
        </div>
    )
}

export default FormTopup