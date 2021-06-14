import Button from './customs/button.js'
import ButtonA from './customs/buttonA.js'
import { signIn, signOut, useSession } from "next-auth/client"
import Link from 'next/link'

export default function Header() {
   const [session] = useSession();
   console.log(session)
   return (
      <>
         {!session &&
            <div className='flex flex-row bg-red-300 justify-around h-12'>
               <div className='flex flex-col justify-center' >
                  <Button text='Iniciar Sesion' action={signIn} type='blue-300' />
               </div>
            </div>
         }
         {session &&
            <div className='flex flex-row bg-green-300 justify-around h-12 p-4'>
               <div className='flex flex-col justify-center'>
                  <ButtonA href='/app/registrar-gastos' text='Registrar Gastos' type='yellow-400' />
               </div>
               <div className='flex flex-col justify-center'>
                  <ButtonA href='/app/historial' text='Historial' type='green-150' />
               </div>
               <div className='flex flex-col justify-center'>
                  <ButtonA href='/app/graficos' text='Graficos' type='purple-400' />
               </div>
               <div  className='flex flex-col justify-center'>
                  <div className='bg-blue-500 p-1 rounded-lg'>
                  <p className="font-mono text-white">
                  Hola {session.user.name}
                  </p>
                  </div>
               </div>
               <div className='flex flex-col justify-center' >
                  <Button text='Cerrar Sesión' action={signOut} type='red-300' />
               </div>
            </div>
         }
      </>
   );
};