import React from 'react'
 import Blogs from './Blog'
import { Button } from '@material-ui/core';

export default  class BlogContainer extends React.Component {

    blogs = [1,2,3,4,5,6]
    constructor(){
        super()

    }
    render (){
        return <div>
            <Button>Add post</Button>
            <table>
                <tbody>
                {this.blogs.map((ele,index) => {
                    if(index % 3 ==0 ) {
                        return  <tr key={index}>
                        <td>
                        <Blogs></Blogs>
                        </td>
                        <td>
                        <Blogs></Blogs>
                        </td>
                        <td>
                        <Blogs></Blogs>
                        </td>
                    </tr>
                    }

                })}
               </tbody>
            </table>
           
            
        </div>
    }
}