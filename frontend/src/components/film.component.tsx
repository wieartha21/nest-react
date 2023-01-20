import React, { Component } from "react";
import axios from "axios";

const omdbKey : String = "e2f83780";

export type MyProps = {
    // using `interface` is also ok
    name?: string;
    movieLoad? : movieStruct[],
    keyword : string,
    setKeyword : (keyword : string) => void
};

export type Mystate = {
    // using `interface` is also ok
    FilmTitle: string;
    listFilm : movieStruct[], 
};

export type movieStruct = {
    Title : string,
    Poster : string,
    Type : string,
    Year : number,
    imdbID : string
}
 
class Film extends Component <MyProps, Mystate>
{   
    //default constructor
    constructor(props : MyProps){
        super(props);
    }
 
    state = {
        FilmTitle : "Belum Ada Title Wokwok", 
        listFilm : [], 
    }
 
    componentDidMount(){
        this.getMovie(this.props.keyword)
        return;
    }

    componentDidUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<Mystate>, snapshot?: any): void {
        return;
    }
 
    private getMovie = (keyword:string = "the rock") => {  
        console.log("getMovie Called");
        const omdbServer = axios.create({
            baseURL: "https://www.omdbapi.com/?apikey=" + omdbKey + "&s="+keyword
        }); 
        omdbServer.get('').then((response) => {
            this.setState({listFilm : response.data.Search}); 
        }).catch((error) => {
            console.log(error.error);
        }); 
    }; 
 
    //map the movie
    private mapMovie = () => {  
        const lstmv = this.state.listFilm;   
        if(Array.isArray(lstmv) && lstmv.length > 0){ 
            return (
                <>{this.createMvElement(lstmv)}</>
            );
        }else{
            return (  
                <label htmlFor=""> No Movie Found </label> 
            )
        } 
    } 

    //movie list element
    private createMvElement(mvlist : movieStruct[]){
        return (
            <div className="row"> 
            {  mvlist.map((mv) => {   
                return (
                    <div className="col-md-3 mb-2">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title text-center">
                                    <h5>{mv.Title} </h5> 
                                </div>
                            </div>
                            <div className="card-body">
                                <img src={mv.Poster === "N/A" ? "https://picsum.photos/271/383" : mv.Poster} className="w-100 rounded" alt="" />
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
        )
    }

    //search form element 
    private formCari = () => {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-info">
                        <form className="form-inline" onSubmit={ (e: React.SyntheticEvent) => {
                                    e.preventDefault();
                                    this.getMovie(this.props.keyword);
                                }} >
                            <div className="form-group mb-2">
                                <label htmlFor=""> Keyword </label>
                                <input type="text" onChange={ (e) => { this.props.setKeyword(e.target.value)} } name="keyword" id="inpKeyword" 
                                    className="form-control" value={this.props.keyword} />
                            </div> 
                            <div className="form-group">
                                <button className="btn btn-primary" type="button" onClick={() => { 
                                    this.getMovie(this.props.keyword) 
                                }}> Cari </button>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    //main render function
    render(){  
        return ( 
            <div className="container"> 
                {this.formCari()}
                {this.mapMovie()}
            </div> 
        )
    }
    
}

export default Film; 