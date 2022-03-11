import React, {Component} from "react"
import axios from "axios"

export default class AddArticles extends Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            title:"",
            content:"",
            thumbnailUrl:"",
            mediaType: "",
            mediaUrl: "",
           
            redirectToDisplayArticles:false
        }
    }


    componentDidMount()
    {
        this.inputToFocus.focus()
    }


    handleChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) =>
    {
        e.preventDefault()

        const articleObject = 
        {

            title: this.state.title,
            content: this.state.content,
            thumbnailUrl:this.state.thumbnailUrl,
            mediaType:this.state.mediaType,
            mediaUrl:this.state.mediaUrl
        }


         axios.post(`http://localhost:8000/articles`, articleObject)
        .then(res =>
        {
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    alert(res.data.errorMessage)
                }
                else
                {
                    console.log("Record added")
                    this.setState({redirectToDisplayArticles:true})
                }
            }
            else
            {
                console.log("Record not added")
            }
        })
    }


    render()
    {
        return(
            <div>
                <form>
                <input type = "text"
                       name="title"
                       placeholder="Add A New Article"
                       ref = {(input) => { this.inputToFocus = input }}
                       value={this.state.title} 
                       onChange={this.handleChange}
                /><br/>
                <input type = "text"
                       name="content"
                       placeholder="Add Content"
                       value={this.state.content} 
                       onChange={this.handleChange}
                /><br/>
                <input type = "text"
                       name="thumbnailUrl"
                       placeholder="Add A thumbnail"
                       value={this.state.thumbnailUrl} 
                       onChange={this.handleChange}
                /><br/>
                <input type = "text"
                       name="mediaType"
                       placeholder="Add A mediaType"
                       value={this.state.mediaType} 
                       onChange={this.handleChange}
                /><br/>
                <input type = "text"
                       name="mediaUrl"
                       placeholder="Add MediaUrl"
                       value={this.state.mediaUrl} 
                       onChange={this.handleChange}
                /><br/>
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )

    }
}