import React from 'react'

type AlertProps = {
    children: React.ReactNode
}
const Alert = ({children}: AlertProps) => {
  return (
    <div className='bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
        {children}
    </div>
  )
}

export default Alert