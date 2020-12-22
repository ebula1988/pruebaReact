import React from 'react';
import BuscarTexto from './BuscarTexto'





const ListarCategorias = () => {



    const [istexto, setIsTexto] = React.useState(false)
    const [categorias, setCategorias]= React.useState([])
    const [cat, setCat] = React.useState([]);
    React.useEffect(( ) =>{
      obtenerCategorias()
       },[]) 

    const obtenerCategorias= async ()=>{
        const data =  await fetch('https://api.chucknorris.io/jokes/categories')
        const categoriasfetch = await data.json()
        setCategorias(categoriasfetch)
    }
    const selectCategoria = (event)=>{
        console.log(event.target.value)
        let catInfo= event.target.value
        infoCategorias(catInfo)
        setIsTexto(false)
    }

    const irText= ()=>{
        
            setIsTexto(true)
        
    }

       
    


    const infoCategorias= async (catInfo)=>{
        console.log(catInfo)
     
        const dataCat =  await fetch('https://api.chucknorris.io/jokes/random?category=' + catInfo)
        const categoriainfo = await dataCat.json()
    
        setCat(categoriainfo)
        
       
    }

    


    
    
    return (  
        
        <div className="container">
            {!istexto ?
            <div>

                <button 
                    className="btn btn-primary"
                    type="submit"
                    onClick={(e)=>{
                    e.preventDefault();
                    irText()
                    }}> Buscar Por Texto 
                </button>
                <br/>
                <br/>
                <br/>
                <label>Selecciones una categoria</label>
            
            
                       
            
        
            
                <select
                    onChange={selectCategoria}
                    className="form-control" 
                    id="exampleFormControlSelect1">
                    {
                        categorias.map((item, index ) => 
                        <option key={index}>{item}</option>
                        )
                    }
                </select>
            
            

            
            

                    {  <div className="container">
                            <div className="alert alert-success" role="alert">
                                {cat.categories}
                            </div>
                            <div className="alert alert-success" role="alert">
                                {cat.created_at}
                            </div>
                            <div className="alert alert-success" role="alert">
                                <img src={cat.icon_url}></img>
                            </div>
                            <div className="alert alert-success" role="alert">
                                {cat.updated_at}
                            </div>
                            <div className="alert alert-success" role="alert">
                            <a href={cat.url} target="_blank">ir a url</a>   
                            </div>
                            <div className="alert alert-success" role="alert">
                                {cat.value}
                            </div>
                        </div>         
                        
                    }

            </div>
            :<BuscarTexto/>
        }
            
    

        </div>






    );
}
 
export default ListarCategorias;


//{"categories":["animal"],
//"created_at":"2020-01-05 13:42:19.576875",
//"icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"xwjic1sws_yohsfefndaiw"
//,"updated_at":"2020-01-05 13:42:19.576875",
//"url":"https://api.chucknorris.io/jokes/xwjic1sws_yohsfefndaiw",
//"value":"Chuck Norris once kicked a horse in the chin. Its decendants are known today as Giraffes."}