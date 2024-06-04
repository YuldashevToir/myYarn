import { styled } from 'styled-components';
import Picture from '../katakana-hiragana.png'



export function Card(){
    return(
        
            <CardG>
            <img src={Picture} alt="picture" />
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro! Officiis dolores voluptatum sint molestiae autem iusto officia et aperiam. Magni iste optio reiciendis quod fuga doloremque nemo praesentium. Exercitationem.</p>
            <nav>
            <button>Click</button>
            <button>Click</button>
            <button>Click</button>
            </nav>
                
            </CardG>

    )
} 



const CardG= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
height: 80vh;
width: 70vw;
border-radius: 5px;
padding: 10px;
background-color: #706b6b;
img{
    height: 50vh;
    width: 70vw;
    border-radius: 20px;
    margin: 5px;
    padding: 10px;
}
p{
    color: #fff;
}
button{
    border: solid 1px #fff;
    font-size: 15px;
    font-weight: 600;
    background-color: red;
}
nav{
    button{
        margin: 20px;
        padding: 10px;
    }
}

`