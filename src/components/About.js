import React,{useState} from 'react'

export default function About() {
 
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleMode = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white' ,
                backgroundColor : 'black',
                border:'1px solid white'
            })
            setBtnText('Enable white mode');  
        }
        else{
            setMyStyle({
                color:'black' ,
                backgroundColor : 'white'
            })
            setBtnText('Enable Dark Mode');  
        }
    }
  return (
    <div className='container' style={myStyle}>
        <div>
        <h1>About Us</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis enim a libero eaque nisi officia eligendi aspernatur blanditiis cumque asperiores fugit aut tenetur accusantium dolorum, tempore adipisci molestiae excepturi aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus consectetur inventore, impedit, sapiente reiciendis quos maxime unde voluptas laborum possimus quasi mollitia eaque facilis perferendis molestias fuga tenetur suscipit voluptatem?</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis enim a libero eaque nisi officia eligendi aspernatur blanditiis cumque asperiores fugit aut tenetur accusantium dolorum, tempore adipisci molestiae excepturi aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus consectetur inventore, impedit, sapiente reiciendis quos maxime unde voluptas laborum possimus quasi mollitia eaque facilis perferendis molestias fuga tenetur suscipit voluptatem?</p>

        </div>

        <button onClick={toggleMode}  type='button'  className='btn btn-success'>{btnText}</button>
    </div>
  )
}
