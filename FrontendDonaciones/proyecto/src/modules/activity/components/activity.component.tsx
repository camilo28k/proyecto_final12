'use client';

import { useActivityStore } from '@/modules/stores/activity.store';
import { useState } from 'react';


export default function Activity() {
  const [objetivo, setObjetivo] = useState('');
  const { createActivity, activity } = useActivityStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (objetivo.trim()) {
      await createActivity(objetivo);
      setObjetivo(''); // Limpiar campo tras crear
    }
  };

  return (
    <div className='flex flex-col bg-gradient-to-br  to-[#2222] px-4 py-3 rounded-2xl shadow-lg'>
      <div className='flex flex-col gap-4'>
        <h3 className='font-semibold text-black text-xl'>
          Objetivo de las campañas
        </h3>

        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input
            type='text'
            placeholder='Escribe un objetivo...'
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            className='px-3 py-1 rounded-md outline-none flex-1'
          />
          <button
            type='submit'
            className=' text-black px-4 py-1 rounded-md hover:bg-gray-200 transition'
          >
            Crear
          </button>
        </form>

        {activity && (
          <p className='text-black'>
            Último objetivo creado: <strong>{activity.objetivo}</strong>
          </p>
        )}
      </div>
    </div>
  );
}


