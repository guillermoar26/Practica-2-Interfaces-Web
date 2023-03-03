import { StyledElement, StyledTable } from "@/styles/styled";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Table = () => {
    const [nombre, setNombre] = useState<string>("")
    const [dni, setDni] = useState<string>("")
    const [datos, setDatos] = useState<{ nombre: string, dni: string }[]>([])

    const addUser = () => {
        if (nombre && dni) { 
            setDatos([...datos, { nombre: nombre, dni: dni }])
            setNombre("")
            setDni("")
        } else {
            alert("Introduce todos los datos")
        }
    }
    
    return (
        <>
            Introduce nombre: <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br/>
            Introduce DNI: <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} /><br />
            <button onClick={addUser}>Añadir</button>

            <StyledTable>
                <h1>Nombre</h1>
                <h1>DNI</h1>
                <h1>Eliminar</h1>

                {datos.map((dato, index) => {
                    return (
                        <>
                            <StyledElement>{dato.nombre}</StyledElement>
                            <StyledElement>{dato.dni}</StyledElement>
                            <button onClick={() => {
                                const newDatos = datos.filter((dato, i) => i !== index)
                                setDatos(newDatos)
                            }}><Image src="/bin.png" alt="" height="25" width="25"/></button>
                        </>
                    )
                })}
            </StyledTable>
        </>
    )
}

export default Table;