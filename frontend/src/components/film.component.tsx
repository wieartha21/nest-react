import React, { Component } from "react";
import axios from "axios";

const omdbKey : String = "e2f83780";

export type MyProps = {
    // using `interface` is also ok
    name?: string;
    movieLoad? : movieStruct[]
};

export type Mystate = {
    // using `interface` is also ok
    FilmTitle: string;
    listFilm : movieStruct[]
};

type movieStruct = {
    Title : string,
    Poster : string,
    Type : string,
    Year : number,
    imdbID : string
}
 
class Film extends Component <MyProps, Mystate >
{
 
    constructor(props : MyProps = {name : ""}, listFilmProps : movieStruct[] = []) { 
        super(props);  
        this.state = {
            FilmTitle : "Belum Ada Title Wokwok",
            listFilm : listFilmProps
        } 
    }

    componentDidMount(){
        this.getMovie()
        return null;
    }

    componentDidUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<Mystate>, snapshot?: any): void {
         return;
    }

    getSearchVal() : string{
        const searchVal = document.getElementById('inpKeyword')! as HTMLInputElement;
        if(searchVal !== null){
            if(searchVal.value !== ""){
                return searchVal.value
            }
        }
        return ""; 
    }
     
    getMovie = (keyword:string = "rock") => { 
       
        const omdbServer = axios.create({
            baseURL: "https://www.omdbapi.com/?apikey=" + omdbKey + "&s="+keyword
        });

        console.log(omdbServer);

        omdbServer.get('').then((response) => { 
            this.setState({listFilm : response.data.Search}); 
        }).catch((error) => {
            console.log(error.error);
        });

    }; 
 
    mapMovie = () => {  
        const lstmv = this.state.listFilm;   
        if(Array.isArray(lstmv) && lstmv.length > 0){ 
            return ( <>
                {this.formCari()}
                <div className="row"> 
                {  lstmv.map((mv,idx) => {   
                    return (
                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title text-center">
                                        <h5>{  mv.Title  } </h5> 
                                    </div>
                                </div>
                                <div className="card-body">
                                    <img src={mv.Poster} className="w-100 rounded" alt="" />
                                </div>
                                <div className="card-footer text-center">
                                    <small>
                                        <i> {mv.Year} </i>
                                    </small>
                                </div>
                            </div>
                        </div> 
                        ) 
                    })
                } 
                </div> 
            </> )
        }else{
            return (
                <>
                    { this.formCari()  }
                    <label htmlFor=""> No Movie Found </label>
                </> 

            )
        } 
    } 

    formCari() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-info">
                        <form className="form-inline" onSubmit={ (e: React.SyntheticEvent) => {
                                    e.preventDefault();
                                    this.getMovie(this.getSearchVal());
                                }} >
                            <div className="form-group mb-2">
                                <label htmlFor=""> Keyword </label>
                                <input type="text" name="keyword" id="inpKeyword" className="form-control"/>
                            </div> 
                            <div className="form-group">
                                <button className="btn btn-primary" type="button" onClick={() => { 
                                    this.getMovie(this.getSearchVal()) 
                                }}> Cari </button>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    render(){  
        return ( 
            <div className="container">
                {
                    this.mapMovie()
                }
            </div> 
        )
    }
    
}

export default Film; 