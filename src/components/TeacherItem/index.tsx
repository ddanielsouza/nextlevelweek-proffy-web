import React from 'react'
import './style.css';

import wappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img 
                    alt="Daniel Souza"
                    src="https://avatars2.githubusercontent.com/u/60083124?s=460&u=b772c3209d26ea525f64cc6010fad98b35876862&v=4"></img>
                <div>
                    <strong>Daniel Souza</strong>
                    <span>WEBDeveloper</span>
                </div>
            </header>
            <p>
                Biridin
                <br/><br/>
                Auu!
            </p>

            <footer>
                <p>
                    Preço/hora: 
                    <strong>R$ 45,00</strong>
                </p>
                <button type="button">
                    <img src={wappIcon} alt="Whatsapp - contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;