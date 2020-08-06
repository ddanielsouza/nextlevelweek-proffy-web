import React, { useState, FormEvent } from 'react'
import './style.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from './../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import {useHistory} from 'react-router-dom'
function TeacherForm(){
    const history = useHistory();

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    const [name, setName]         = useState('');
    const [avatar, setAvatar]     = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [title, setTitle]       = useState('');
    const [bio, setBio]           = useState('');
    const [subject, setSubject]   = useState('');
    const [cost, setCost]         = useState('');

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);
    }
    
    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        const data = {
            name,
            avatar,
            whatsapp,
            title,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }


        api.post('classes', data).then(() => {
                alert('Cadastro realizado com sucesso.');
                history.push('/')
            }, error => {
                console.warn(error);
                alert('Ocorreu um erro ao salvar, tente novamente.');
            });
    } 

    function setSheduleItemValue(position: number, field: string, value: any){
        const newArray = scheduleItems.map((scheduleItem, index) =>{
            return index === position ? {...scheduleItem, [field]: value} : scheduleItem;
        })

        setScheduleItems(newArray);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você queira dar aulas"
                description="O primeiro passo é preeencher esse formulario de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <Input
                            name="avatar"
                            label="Link da sua foto"
                            value={avatar}
                            onChange={event => setAvatar(event.target.value)}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={event => setWhatsapp(event.target.value)}
                        />
                        <Input
                            name="title"
                            label="Título do perfil"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={event => setBio(event.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Aulas</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes'},
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
                            onChange={event => setSubject(event.target.value)}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            type="number"
                            value={cost}
                            onChange={event => setCost(event.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horarios disponíveis
                            <button onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div className="schedule-item" key={ index }>
                                    <Select
                                        label="Dia da semana" 
                                        name="week_day"
                                        value={scheduleItem.week_day}
                                        onChange={e=>{setSheduleItemValue(index, 'week_day', e.target.value)}}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sabado' },
                                        
                                        ]}
                                    />

                                        <Input 
                                            label="Das"
                                            value={scheduleItem.from}
                                            onChange={e=>{setSheduleItemValue(index, 'from', e.target.value)}} 
                                            name="from" 
                                            type="time"
                                        />
                                        <Input 
                                            label="até" 
                                            value={scheduleItem.to}
                                            onChange={e=>{setSheduleItemValue(index, 'to', e.target.value)}} 
                                            name="to" 
                                            type="time"
                                        />
                                    </div>
                            )
                        })}
                        
                    </fieldset>
                
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Icone Aviso important"></img>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;