import React from 'react'
import Diet from '../components/Diet'

const page = () => {
  return (
    <div>
    <main className='ml-20'>
     <div className='m-10'>
      <h3 className='flex justify-center font-bold'>Meal Plan For the Week !!</h3>
    <Diet /> 
    </div>
    </main>
   </div>
  )
}

export default page
