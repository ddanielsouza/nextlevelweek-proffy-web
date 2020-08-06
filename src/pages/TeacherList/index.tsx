import React, { useState, useEffect } from 'react'
import './style.css';
import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList(){

    const [searched, setSearched] = useState(false);
    const [classes, setClasses]   = useState([]);
    const [subject, setSubject]   = useState('');
    const [weekday, setWeekday]   = useState('');
    const [time, setTime]         = useState('');

    useEffect(() =>{
        const searchTeachers = async () =>{

            if (subject && weekday && time) {
                setClasses([]);
                setSearched(false);
                const response = await api.get('/classes', { 
                        params: {
                            subject,
                            week_day: weekday,
                            time
                        } 
                    });
                
                setClasses(response.data);
            }
        }

        searchTeachers();
    }, [subject, weekday, time])
   
    
    
    

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers" onSubmit={e => {e.preventDefault()}}>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                        { value: 'Artes' },
                        { value: 'Biologia' },
                        { value: 'Desenho Geométrico' },
                        { value: 'Educação Física' },
                        { value: 'Espanhol' },
                        { value: 'Filosofia' },
                        { value: 'Física' },
                        { value: 'Geografia' },
                        { value: 'História' },
                        { value: 'Inglês' },
                        { value: 'Língua Portuguesa e Literatura' },
                        { value: 'Matemática' },
                        { value: 'Química' },
                        { value: 'Sociologia' }
                        ]}
                        value={subject}
                        onChange={ event => { setSubject(event.target.value) } }
                    />
                    <Select
                        name="weekday"
                        label="Dia da semana"
                        options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' }
                        ]}
                        value={weekday}
                        onChange={ event => { setWeekday(event.target.value) } }
                    />
                    <Input
                        name="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={ event => { setTime(event.target.value) } }
                    />
                </form>
            </PageHeader>
            <main> 
                {classes.map((teacher, index) => <TeacherItem key={index} teacher={teacher}/>)}
                {searched && classes.length === 0 && (
                    <div className="no-results">
                        <p>Nenhum professor encontrado<br/>para sua pesquisa.</p>
                    </div>
                )}
            </main>
        </div>
    )
}

export default TeacherList;