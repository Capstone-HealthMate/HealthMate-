import React from 'react'

export default function TextHeader({children}) {
    return (
        <>
            <div className="py-6">
                <h1 className='font-semibold text-5xl text-secondary tracking-tight'>
                    {children}
                </h1>
            </div>
        </>
    )
}
