import React from 'react';


const BuscarTexto = () => {
    const [buscar, setBuscar]=React.useState([])
    const [total, setTotal]=React.useState()
    const [inputb, setInputB]=React.useState([])
    const [istexto, setIsTexto] = React.useState(true)
    

    const handleInputChange= (event)=>{
        console.log(event.target.value)
        let inputB = event.target.value
        setInputB(inputB)
        

    }

    const buscarTextBtn = async(e)=>{
        e.preventDefault();
        


        const dataBus =  await fetch('https://api.chucknorris.io/jokes/search?query=' + inputb)
       

        const buscado = await dataBus.json()
        console.log(buscado.result)
        setBuscar(buscado.result)
        setTotal(buscado.total)
        console.log(buscado.total)

        

    }
    const irTextcat=()=>{
        setIsTexto(false)
    }



    return ( 
        <div className="container">
             <button 
                    className="btn btn-primary"
                    type="submit"
                    onClick={(e)=>{
                    e.preventDefault();
                    irTextcat()
                    }}> Buscar Por Texto 
                </button>
                <br/>
                <br/>
                <br/>
                <label>Selecciones una categoria</label>
            <nav className="navbar navbar-light bg-light">
      
            <form className="form-inline">
                
                <input
                className="form-control mr-sm-2"
                    type="search" 
                    placeholder="Ingrese un Texto" 
                    aria-label="Search"
                    onChange={handleInputChange}
                    id="inputBuscar" />

                <button 
                className= "btn btn-outline-success my-2 my-sm-0" 
                type="submit"
                onClick={buscarTextBtn}> Buscar</button>
                
            </form>
            <div>
               No de resultados: {total}- 
               
            </div>

           

             </nav>

             <div className="container">
           
            {

                
                    buscar.map((item, index)=> (
                        
               <div className="alert alert-primary" role="alert" key={index} >
                   
                   
                   ____________________________
                   Created_at :{item.created_at}<br/>
                   ____________________________
                   icon_url   :<img src={item.icon_url}/><br/>
                   ____________________________
                   Updated_at :{item.updated_at} <br/>
                   ____________________________
                   url        :<a href={item.url}>ir a pagina web</a><br/>
                   ____________________________
                   value      :{item.value}<br/>
                   ____________________________
                   
                 
                   <button 
                   className="btn btn-primary"
                   
                   >Añadir a favoritos</button>
                
               </div>  
                ))

              
                
            }

         


        </div>
            
            



        </div>
     );
}
 
export default BuscarTexto;