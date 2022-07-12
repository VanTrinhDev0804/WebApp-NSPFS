import React from 'react'
import { useParams } from "react-router-dom"
import { IParams } from './types/index'


const generatePage = (name: string) => {

    if(name.indexOf('10') === -1){
        const page = () => require(`./pages/${name}`).default;

        try {
            return React.createElement(page());
        } catch (error) {
            return <h2> Not Found</h2>
        }
    
    }else{
        const page = () => require(`./pages/`).default;

        try {
            return React.createElement(page());
        } catch (error) {
            return <h2> Not Found</h2>
        }
    }
 
}

const PageRender = () => {
    const { page, id }: IParams = useParams();

    let name = '';
    if (page) {
        name = `${page}`;
    }

    return generatePage(name)


}


export default PageRender