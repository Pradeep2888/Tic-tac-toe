import React from 'react'
import { useState } from 'react'
import "./Home.css"

function Home() {
    const [player,setPlayer]=useState("X")
    const [bag1,setBag1]=useState("")
    const [bag2,setBag2]=useState("")
    const [bag3,setBag3]=useState("")
    const [bag4,setBag4]=useState("")
    const [bag5,setBag5]=useState("")
    const [bag6,setBag6]=useState("")
    const [bag7,setBag7]=useState("")
    const [bag8,setBag8]=useState("")
    // console.log(bag1,bag2,bag3,bag4,bag5,bag6,bag7,bag8)
    function winner(){
        if(bag1==="XXX" || bag2==="XXX" || bag3==="XXX" || bag4==="XXX" || bag5==="XXX" || bag6==="XXX" || bag7==="XXX" || bag8==="XXX"){
            alert(`player 1 win` )
            document.getElementById("box1").innerHTML=null
            document.getElementById("box2").innerHTML=null
            document.getElementById("box3").innerHTML=null
            document.getElementById("box4").innerHTML=null
            document.getElementById("box5").innerHTML=null
            document.getElementById("box6").innerHTML=null
            document.getElementById("box7").innerHTML=null
            document.getElementById("box8").innerHTML=null
            document.getElementById("box9").innerHTML=null
            setPlayer("X")
            setBag1("")
            setBag2("")
            setBag3("")
            setBag4("")
            setBag5("")
            setBag6("")
            setBag7("")
            setBag8("")

            

        }
        else if(bag1==="OOO" || bag2==="OOO" || bag3==="OOO" || bag4==="OOO" || bag5==="OOO" || bag6==="OOO" || bag7==="OOO" || bag8==="OOO"){
            alert("player 2 win")
            document.getElementById("box1").innerHTML=null
            document.getElementById("box2").innerHTML=null
            document.getElementById("box3").innerHTML=null
            document.getElementById("box4").innerHTML=null
            document.getElementById("box5").innerHTML=null
            document.getElementById("box6").innerHTML=null
            document.getElementById("box7").innerHTML=null
            document.getElementById("box8").innerHTML=null
            document.getElementById("box9").innerHTML=null
            setPlayer("X")
            setBag1("")
            setBag2("")
            setBag3("")
            setBag4("")
            setBag5("")
            setBag6("")
            setBag7("")
            setBag8("")
            
        }
    }

    const handelClick1=()=>{
        winner()
        let a=document.getElementById("box1").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box1").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box1").innerText="X"
                setBag1((pre)=>pre+"X")
                setBag2((pre)=>pre+"X")
                setBag7((pre)=>pre+"X")
                setPlayer("O")
               
            }
            else if(player==="O"){
                document.getElementById("box1").innerText="O"
                setBag1((pre)=>pre+"O")
                setBag2((pre)=>pre+"O")
                setBag7((pre)=>pre+"O")
                setPlayer("X")
               
            }
        }
       
        
    }
    const handelClick2=()=>{
        let a=document.getElementById("box2").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box2").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box2").innerText="X"
                setBag1((pre)=>pre+"X")
                setBag3((pre)=>pre+"X")
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box2").innerText="O"
                setBag1((pre)=>pre+"O")
                setBag3((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }
    const handelClick3=()=>{
        let a=document.getElementById("box3").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box3").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box3").innerText="X"
                setBag1((pre)=>pre+"X")
                setBag4((pre)=>pre+"X")
                setBag8((pre)=>pre+"X")
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box3").innerText="O"
                setBag1((pre)=>pre+"O")
                setBag4((pre)=>pre+"O")
                setBag8((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }

    // qwerty

    const handelClick4=()=>{
        let a=document.getElementById("box4").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box4").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box4").innerText="X"
                setBag2((pre)=>pre+"X")
                setBag5((pre)=>pre+"X")
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box4").innerText="O"
                setBag2((pre)=>pre+"O")
                setBag5((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }
    const handelClick5=()=>{
        let a=document.getElementById("box5").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box5").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box5").innerText="X"
                setBag3((pre)=>pre+"X")
                setBag5((pre)=>pre+"X")
                setBag7((pre)=>pre+"X")
                setBag8((pre)=>pre+"X")
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box5").innerText="O"
                setBag8((pre)=>pre+"O")
                setBag3((pre)=>pre+"O")
                setBag5((pre)=>pre+"O")
                setBag7((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }
    const handelClick6=()=>{
        let a=document.getElementById("box6").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box6").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box6").innerText="X"
                setBag4((pre)=>pre+"X")
                setBag5((pre)=>pre+"X")
               
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box6").innerText="O"
                setBag4((pre)=>pre+"O")
                setBag5((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }

    // qerty

    const handelClick7=()=>{
        let a=document.getElementById("box7").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box7").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box7").innerText="X"
                setBag2((pre)=>pre+"X")
                setBag6((pre)=>pre+"X")
                setBag8((pre)=>pre+"X")
                
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box7").innerText="O"
                setBag2((pre)=>pre+"O")
                setBag6((pre)=>pre+"O")
                setBag8((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }
    const handelClick8=()=>{
        let a=document.getElementById("box8").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box8").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box8").innerText="X"
                setBag3((pre)=>pre+"X")
                setBag6((pre)=>pre+"X")
                
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box8").innerText="O"
                setBag3((pre)=>pre+"O")
                setBag6((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }
    const handelClick9=()=>{
        let a=document.getElementById("box9").innerText
        if(a==="X" || a==="O"){
            document.getElementById("box9").innerText=a
        }
        else{

            if(player==="X"){
                document.getElementById("box9").innerText="X"
                setBag4((pre)=>pre+"X")
                setBag6((pre)=>pre+"X")
                setBag7((pre)=>pre+"X")
                setPlayer("O")
                winner()
            }
            else if(player==="O"){
                document.getElementById("box9").innerText="O"
                setBag4((pre)=>pre+"O")
                setBag6((pre)=>pre+"O")
                setBag7((pre)=>pre+"O")
                setPlayer("X")
                winner()
            }
        }
        
    }

  return (
    
    <div>
        
        <div>
        {/* <button onClick={handelButtom}>Player 1 = X</button>
        <button onClick={s}>Player 2=O</button> */}
        </div>
       
        <div className='row1'>
            <div onClick={handelClick1} id='box1'></div>
            <div onClick={handelClick2} id='box2'></div>
            <div onClick={handelClick3} id='box3'></div>
        </div>
        <div className='row2'>
            <div onClick={handelClick4} id='box4'></div>
            <div onClick={handelClick5} id='box5'></div>
            <div onClick={handelClick6} id='box6'></div>
        </div>
        <div className='row3'>
            <div onClick={handelClick7} id='box7'></div>
            <div onClick={handelClick8} id='box8'></div>
            <div onClick={handelClick9} id='box9'></div>
        </div>
    </div>
  )
}

export default Home