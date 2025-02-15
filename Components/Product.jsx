import React from 'react'
import Button from './Button'

const Product = ({ count, val, mover }) => {
    return (
        <div className='w-full h-[23rem] py-20 text-white'>
            <div onMouseEnter={() => { mover(count) }} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
                <div className='sd w-1/3'>
                    <p className='mb-10'>{val.description}</p>
                    <div className='w-1/4'>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product