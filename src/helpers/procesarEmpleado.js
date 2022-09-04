
import axios from 'axios'
//Metodos fachada a exportar



const obtenerEmpleado = async (id) => {
    return await obtenerEmpleadoAxios(id);
}
const insertarEmpleado = async (body) => {
    return await insertarEmpleadosAxios(body); 
}
const actualizarEmpleado = async (body) => {
    return await actualizarEmpleadoAxios(body);
}
const borrarEmpleado = async (id) => {
    return await borrarEmpleadoAxios(id); 
}

//Métodos de consumo del API 

const obtenerEmpleadoAPI = async (id) => {
    const data = await fetch(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}
// GET
const obtenerEmpleadoAxios = async (id) => {
    const data = axios.get(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}
//POST
const insertarEmpleadosAxios = async(body1) => {
    const data = axios.post(`http://localhost:8085/API/Nomina/V1/empleados`, body1).then(r=>r.data); 
    console.log(data)
    return data 
}

//PUT 
const actualizarEmpleadoAxios = async(body) =>{
    const cabecera = {

    }
    const data = axios.put(`http://localhost:8085/API/Nomina/V1/empleados`, body).then(r=>r.data); 
    console.log(data)
    return data 
}
//DELETE 
const borrarEmpleadoAxios = async() =>{
    const data = axios.delete(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}




//export default obtenerEmpleado
//export default borrarEmpleado
export default obtenerEmpleado;insertarEmpleado;borrarEmpleado;actualizarEmpleado