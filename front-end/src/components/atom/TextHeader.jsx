import React from 'react'

export default function TextHeader({children}) {
    return (
        <>
            <div className="lg:py-6 py-3">
                <h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl text-secondary text-center tracking-tight'>
                    {children}
                </h1>
            </div>
        </>
    )
}
