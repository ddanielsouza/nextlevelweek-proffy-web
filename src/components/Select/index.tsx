import React, { SelectHTMLAttributes } from 'react'
import './style.css';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
    options: Array<{
        value: string;
        label?: string;
    }>;
}

const Select:React.FC<SelectProps> = ({ label, name, options, ...rest}) =>{
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select  id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map((o, index) =>{
                    return (<option value={o.value} key={index}> { o.label || o.value } </option>)
                })}
            </select>
        </div>
    )
}

export default Select;