import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect,} from 'react'
import '../styles/repositories.scss'

interface Repository{
    
      name : String;  
      description : string;
      html_url : string;
    }



export function RepositoryList(){


    const [repositories, setRepositories] = useState <Repository[]>([]);

    

    useEffect(()=>{
        fetch ('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))           
    },[]);

    console.log(repositories)

    return(


 
        <section className= "repository-list">

        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository= {repository}/>

            })}
            
        </ul>

            
        </section>
    );

}