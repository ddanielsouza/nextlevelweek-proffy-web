import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import backIcons from '../../assets/images/icons/back.svg';
import './style.css';
interface PageHeaderProps {
    title?: string
}

const PageHeader:React.FC<PageHeaderProps>  = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcons} alt="Voltar"/>
                </Link> 
                <Link to="/">
                    <img src={logoImg} alt="Proffy logo"/>
                </Link>
            </div>

            <div className="header-content">
                <strong> {props.title || 'Proffy'} </strong>
                {props.children}
            </div>

            
        </header>
    )
}

export default PageHeader;