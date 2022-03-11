import React, {Component} from "react"
import axios from "axios"


export default class DeleteArticles extends Component 
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            redirectToDisplayAllArticles:false
        }
    }
    
    
    componentDidMount() 
    {   
        axios.delete(`/articles/${this.props.match.params.id}`)
        .then(res => 
        {
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else // success
                { 
                    console.log("Record deleted")
                }
                this.setState({redirectToDisplayAllArticles:true})
            }
            else 
            {
                console.log("Record not deleted")
            }
        })
    }
  
  
    render() 
    {
        return (
            <div>   
                <p>hi</p>                 
            </div>
        )
    }
}