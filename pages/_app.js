
import '../scss/app.scss'
import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
const _app = () => {
    
    const dataArticulos = [
        {id: 1, nombre: "Leche LALA", precio: 24},
        {id: 2, nombre: "Pan bimbo", precio: 29},
        {id: 3, nombre: "Coca cola", precio: 14},
    ];

    const [data, setData] = useState(dataArticulos);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [precio, setPrecio] = useState(0);
    const [articuloSeleccionado, setArticuloSeleccionado] = useState({
        id:'',
        nombre:'',
        precio:''
    })
    const seleccionarArticulo = (elementos, caso) => {
        setArticuloSeleccionado(elementos);
        (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
    }
    const abrirModalInsertar=()=>{
        setModalInsertar(true);
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setArticuloSeleccionado((prevState)=>({
            ...prevState,
            [name]: value
        }));
        console.log(articuloSeleccionado);
    }
    
    const editar=()=>{
        var dataNueva=data;
        dataNueva.map(articulo=>{
            if(articulo.id===articuloSeleccionado.id)
            {
                articulo.nombre=articuloSeleccionado.nombre;
                articulo.precio=articuloSeleccionado.precio;
            }
        });
        setData(dataNueva);
        setModalEditar(false);
    }
    
    const eliminar = () =>{
        setData(data.filter(articulo=>articulo.id!==articuloSeleccionado.id));
        setModalEliminar(false);
    }


    const insertar =()=>{
        var artiInsertar = articuloSeleccionado;
        artiInsertar.id=data[data.length-1].id+1;
        var iva=artiInsertar.precio*0.16
        var precio = parseInt(artiInsertar.precio);
        artiInsertar.precio=iva+precio
        var dataNueva = data;
        dataNueva.push(artiInsertar);
        setData(dataNueva);
        precio=0;
    }
    return ( 
        <>
            <div className="login-parent">
                <div className="login-container">
                    <div className="login-div">
                        <div className="logo"></div>
                        <div className="title">Admin</div>
                        <div className="sub-title">Beta</div>
                        <div className="fields">
                            <div className="name">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="#999"d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                                </svg>
                                <input type="username" className="user-input"  maxLength="30" placeholder="Nombre" name="nombre" onChange={handleChange}></input>
                            </div>
                            <div className="cost" >
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="#999" d="M5.229,6.531H4.362c-0.239,0-0.434,0.193-0.434,0.434c0,0.239,0.194,0.434,0.434,0.434h0.868c0.24,0,0.434-0.194,0.434-0.434C5.663,6.724,5.469,6.531,5.229,6.531 M10,6.531c-1.916,0-3.47,1.554-3.47,3.47c0,1.916,1.554,3.47,3.47,3.47c1.916,0,3.47-1.555,3.47-3.47C13.47,8.084,11.916,6.531,10,6.531 M11.4,11.447c-0.071,0.164-0.169,0.299-0.294,0.406c-0.124,0.109-0.27,0.191-0.437,0.248c-0.167,0.057-0.298,0.09-0.492,0.098v0.402h-0.35v-0.402c-0.21-0.004-0.352-0.039-0.527-0.1c-0.175-0.064-0.324-0.154-0.449-0.27c-0.124-0.115-0.221-0.258-0.288-0.428c-0.068-0.17-0.1-0.363-0.096-0.583h0.664c-0.004,0.259,0.052,0.464,0.169,0.613c0.116,0.15,0.259,0.229,0.527,0.236v-1.427c-0.159-0.043-0.268-0.095-0.425-0.156c-0.157-0.061-0.299-0.139-0.425-0.235C8.852,9.752,8.75,9.631,8.672,9.486C8.594,9.34,8.556,9.16,8.556,8.944c0-0.189,0.036-0.355,0.108-0.498c0.072-0.144,0.169-0.264,0.292-0.36c0.122-0.097,0.263-0.17,0.422-0.221c0.159-0.052,0.277-0.077,0.451-0.077V7.401h0.35v0.387c0.174,0,0.29,0.023,0.445,0.071c0.155,0.047,0.29,0.118,0.404,0.212c0.115,0.095,0.206,0.215,0.274,0.359c0.067,0.146,0.103,0.315,0.103,0.508H10.74c-0.007-0.201-0.06-0.354-0.154-0.46c-0.096-0.106-0.199-0.159-0.408-0.159v1.244c0.174,0.047,0.296,0.102,0.462,0.165c0.167,0.063,0.314,0.144,0.443,0.241c0.128,0.099,0.23,0.221,0.309,0.366c0.077,0.146,0.116,0.324,0.116,0.536C11.509,11.092,11.473,11.283,11.4,11.447 M18.675,4.795H1.326c-0.479,0-0.868,0.389-0.868,0.868v8.674c0,0.479,0.389,0.867,0.868,0.867h17.349c0.479,0,0.867-0.389,0.867-0.867V5.664C19.542,5.184,19.153,4.795,18.675,4.795M1.76,5.664c0.24,0,0.434,0.193,0.434,0.434C2.193,6.336,2,6.531,1.76,6.531S1.326,6.336,1.326,6.097C1.326,5.857,1.52,5.664,1.76,5.664 M1.76,14.338c-0.24,0-0.434-0.195-0.434-0.434c0-0.24,0.194-0.434,0.434-0.434s0.434,0.193,0.434,0.434C2.193,14.143,2,14.338,1.76,14.338 M18.241,14.338c-0.24,0-0.435-0.195-0.435-0.434c0-0.24,0.194-0.434,0.435-0.434c0.239,0,0.434,0.193,0.434,0.434C18.675,14.143,18.48,14.338,18.241,14.338 M18.675,12.682c-0.137-0.049-0.281-0.08-0.434-0.08c-0.719,0-1.302,0.584-1.302,1.303c0,0.152,0.031,0.297,0.08,0.434H2.981c0.048-0.137,0.08-0.281,0.08-0.434c0-0.719-0.583-1.303-1.301-1.303c-0.153,0-0.297,0.031-0.434,0.08V7.318c0.136,0.049,0.28,0.08,0.434,0.08c0.718,0,1.301-0.583,1.301-1.301c0-0.153-0.032-0.298-0.08-0.434H17.02c-0.049,0.136-0.08,0.28-0.08,0.434c0,0.718,0.583,1.301,1.302,1.301c0.152,0,0.297-0.031,0.434-0.08V12.682z M18.241,6.531c-0.24,0-0.435-0.194-0.435-0.434c0-0.24,0.194-0.434,0.435-0.434c0.239,0,0.434,0.193,0.434,0.434C18.675,6.336,18.48,6.531,18.241,6.531 M9.22,8.896c0,0.095,0.019,0.175,0.058,0.242c0.039,0.066,0.088,0.124,0.148,0.171c0.061,0.047,0.13,0.086,0.21,0.115c0.079,0.028,0.11,0.055,0.192,0.073V8.319c-0.21,0-0.322,0.044-0.437,0.132C9.277,8.54,9.22,8.688,9.22,8.896 M15.639,12.602h-0.868c-0.239,0-0.434,0.195-0.434,0.434c0,0.24,0.194,0.436,0.434,0.436h0.868c0.24,0,0.434-0.195,0.434-0.436C16.072,12.797,15.879,12.602,15.639,12.602 M10.621,10.5c-0.068-0.052-0.145-0.093-0.23-0.124c-0.086-0.031-0.123-0.06-0.212-0.082v1.374c0.209-0.016,0.332-0.076,0.465-0.186c0.134-0.107,0.201-0.281,0.201-0.516c0-0.11-0.02-0.202-0.062-0.277C10.743,10.615,10.688,10.551,10.621,10.5"></path>
                                </svg> 
                                <input type="number" className="cost-input" placeholder="Costo" name="precio" onChange={handleChange} ></input>
                            </div>
                            <div className="iva">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="#999"d="M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"></path>
                                </svg>
                                <input type="number" className="iva-input" placeholder="IVA - 16%" readOnly></input>
                            </div>
                            {/* <div className="price" ><svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="#999"d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
                                </svg>
                                <input type="number" className="price-input" placeholder="Precio total" name="total"></input>
                            </div> */}
                        </div>
                        <button className="addButton" onClick={()=>{insertar(); abrirModalInsertar();}}>Agregar articulo</button>
                    </div>
                </div>
            </div>
            <div className="second container text-center">
                <table className="table table-dark table-borderless">
                    <thead className="">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((elementos)=>
                                    <tr>
                                        <td key={elementos.id}>{elementos.id}</td>
                                        <td>{elementos.nombre}</td>
                                        <td>{elementos.precio}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>seleccionarArticulo(elementos,'Editar')}>Editar</button> 
                                            <button className="btn btn-danger"  onClick={()=>seleccionarArticulo(elementos,'Eliminar')}>Eliminar</button>
                                        </td>
                                    </tr>
                                )}
                    </tbody>
                </table>
            </div>
            <Modal centered isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>
                            Editar articulo
                        </h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input 
                            className="form-control"
                            readOnly
                            type="text"
                            name="id"
                            value={articuloSeleccionado && articuloSeleccionado.id}
                        />
                        <br/>
                        <label>Nombre</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={articuloSeleccionado && articuloSeleccionado.nombre}
                            onChange={handleChange}
                        />
                        <br/>
                        <label>Precio</label>
                        <input 
                            className="form-control"
                            type="text"
                            name="precio"
                            value={articuloSeleccionado && articuloSeleccionado.precio}
                            onChange={handleChange}
                        />
                        <br/>   
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>editar()}>Actualizar</button>
                    <button className="btn btn-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    ¿Estás seguro que deseas eliminar el articulo? {articuloSeleccionado && articuloSeleccionado.nombre}
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>eliminar()}>
                        Si
                    </button>
                    <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>
                        No
                    </button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalInsertar}>
                <ModalBody>
                    Articulo {articuloSeleccionado && articuloSeleccionado.nombre} añadido con exito!
                </ModalBody>
                <ModalFooter>
                    
                    <button className="btn btn-secondary" onClick={()=>setModalInsertar(false)}>
                        Ok
                    </button>
                </ModalFooter>
            </Modal>
            
        </> 
    );
}
 
export default _app;