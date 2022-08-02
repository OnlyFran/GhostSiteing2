import React from 'react'

const InputCount = () => {
    return (
        <Link to='/cart' >
            <button className='btn btn-outline-primary' onClick={ () => console.log('Ir al Cart') }>
                Ir al Cart
            </button>
        </Link>
    )
}

export default InputCount