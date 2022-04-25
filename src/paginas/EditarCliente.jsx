import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const { id } = useParams()

  const [cliente, setcliente] = useState({})
  const [cargando, setcargando] = useState(true)

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setcliente(resultado)
      } catch (error) {
        console.log(error)
      }
      setcargando(false)
    }
    obtenerClienteAPI()
  }, [])

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>
            Editar Cliente
        </h1>
        <p className='mt-3'>
            Utiliza este formulario para editar datos de un cliente
        </p>
        <Formulario 
          cliente={cliente}
        />
    </>
  )
}

export default EditarCliente