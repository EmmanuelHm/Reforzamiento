import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        //Llamado a API
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params:{ 
                page: paginaRef.current
            }
        })

        console.log(resp);
        

        if( resp.data.data.length > 0 ){
            setUsuarios(resp.data.data);
            paginaRef.current ++;
        } else{
            alert("No hay más registros");
        }

    }

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar } 
                        alt={ first_name } 
                        style={{ 
                            width: 70,
                            borderRadius: 10 
                        }}/>
                </td>
                <td>{ first_name } { last_name }</td>
                <td> { email } </td>
            </tr>
        )
    }
    
  return (
    <>
        <h3>Usuarios</h3>

        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                { usuarios.map( renderItem ) }
            </tbody>
        </table>

        <button 
            className='btn btn-primary'
            onClick={ cargarUsuarios }>
            Siguiente
        </button>
    </>
  )
}
