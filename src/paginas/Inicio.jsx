import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {

  const [clientes, setclientes] = useState([])

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setclientes(resultado)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerClientesAPI()
  }, [])


  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>
        Clientes
      </h1>
      <p className='mt-3'>
        Administra tus clientes
      </p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-1'>
              Nombre
            </th>
            <th className='p-1'>
              Contacto
            </th>
            <th className='p-1'>
              Empresa
            </th>
            <th className='p-1'>
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <Cliente 
              key={cliente.id}
              cliente={cliente}
            />
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default Inicio