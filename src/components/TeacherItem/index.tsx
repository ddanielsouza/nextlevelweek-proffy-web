import React from 'react'
import './style.css';

import wappIcon from '../../assets/images/icons/whatsapp.svg'
import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
interface TeacherItemProps{
    teacher: {
        id?: number,
        name: string,
        avatar: string, 
        whatsapp: string,
        bio: string,
        subject: string,
        cost: number,
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    
    function storeConnection() {
        api.post('connections', { user_id: teacher.id });
    }

    return (
        <article className="teacher-item">
            <header>
                <img 
                    alt={teacher.name}
                    src={teacher.avatar}></img>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora: 
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    href={`https://wa.me/${teacher.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={storeConnection}
                >
                    <img src={wappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;