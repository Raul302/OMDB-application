import React , {Fragment} from 'react';

import Card from '../components/Card/Card';

const api = 'http://www.omdbapi.com/?apikey=efc9f4f5&';
// const List = () => <Card></Card>
class List extends React.Component{

    constructor(){
        super();
        this.state ={
            data:[],
            searchTerm:'',
            error:'',
        }
    }

    async componentDidMount(){
        // const res = await fetch('../../assets/data.json');
        const res = await fetch(`${api}&s=batman`)
        const resJSON = await res.json();
        this.setState({data:resJSON.Search})
        console.log(resJSON);
    }

    async handlerSubmit(e){
        e.preventDefault();
        if(!this.state.searchTerm){
            return this.setState({ error: 'Por favor escribe un texto valido'})
        }

        const res = await fetch(`${api}&s=${this.state.searchTerm}`)
        const data = await res.json();
        console.log(data);
    }

    render(){
       return( 
       <Fragment>
       <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handlerSubmit(e)}>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search"
                onChange={e => this.setState({searchTerm: e.target.value})}
                autoFocus
                 /> 
            </form>
            <p className="text-white">{this.state.error ? this.state.error : ''}</p>
        </div>
       </div> 
       <div className="row">
            {
                 this.state.data.map(movie => {
                 return <Card movie={movie}></Card>
                 })
            }
        </div>
       </Fragment>
       );
    }
}

export default List