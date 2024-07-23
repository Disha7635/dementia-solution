'use client'
import React, { useState, useEffect, ChangeEvent } from 'react';
import { BACKEND_URL } from '../../../constants';
import ChatBot from '../components/ChatBot';

const Page: React.FC = () => {
    return (
        <div className='ml-20'>
        <main className="ml-20">
      <div className='m-10'>
     <ChatBot /> 
     </div>
     </main>
        </div>
      )
}

export default Page;