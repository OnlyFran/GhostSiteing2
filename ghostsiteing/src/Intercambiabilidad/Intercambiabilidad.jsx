import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount/ItemCount';

const Intercambiabilidad = () => {
    const [ inputType, setInputType ] = useState('button');
    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
            <h2>Item Description</h2>

            {inputType === 'button'
            ?
            <ItemCount handleInter = {handleInter} />
            :
            'hola'
            }
        </div>
    )
}

export default Intercambiabilidad