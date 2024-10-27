import { useState } from "react";
import Form from "./Form";
import Task from "./Task";

function App() {
  // function click (){
  //  let h1 = document.getElementById('h1')
  //  h1.style.backgroundColor="red"
  //  h1.textContent="user info"

  // }

  // without event use  but this give react Uncaught TypeError: Cannot set properties of null (setting 'textContent')
  // let h1 = document.getElementById('h1')
  // h1.textContent="user info"

  // click par humko data print karna hai ye console me print ho jayega but ui pr nahi hoga iske liye react ke anadar hooks useState ka use karenge
  // let data = "hhhsihchkshih"
  //   function click(){
  //     data= 'user name'
  //     console.log(data)
  //   }

  // useState hooks
  // const [data , setData]=useState('hello')
  // function click(){
  //   setData('hi bro..')
  //      }

  // usestate se hum css bhi change kar sakte hai
  // const [data , setData]=useState()
  // function click(){
  //   setData('blue')
  //      }

  // react ke andar element ko read kaise karte hai

  // function haldaledata(e){
  // console.log(e.target.value)
  // }

  // ui pr data print kaise karenge
  // const [input, setInput] = useState({
  //   name: "",
  //   pass: "",
  //   email: "",
  // });

  // function haldalesubmit() {

  // }

  // count
  // const initial= 0;
  // const [count, setCount] = useState(initial)

  // function increase(){
  //   setCount((prev)=>prev+1)
  // }
  // function reset(){
  //   setCount(0)
  // }
  // function dcrease(){
  //   setCount((prev)=>prev-1)
  // }

  // object se key value ko delete and change

  // const [data, setData] = useState({
  //   item1: "car1",
  //   item2: "car2",
  //   item3: "car3",
  //   item4: "car4",
  //   item5: "car5",
  // });

  //change value first method
  // function click(){
  //   setData((prev)=>({...prev,item1:"hi"}))
  // }

  // second method delete key
  //  function click(){
  //     setData((prev)=>{
  //       const {item2 ,...ab}=prev;
  //       return ab
  //     })
  //   }

  // function click() {
  //   setData((prev) => {
  //     const { item2, ...ab } = prev;
  //     // return item2

  //     //rename key
  //     return {
  //       ...ab,
  //       hii: item2,
  //     };
  //   });
  // }

  // value blank ke liye

  // function click(){
  //     setData((prev)=>({...prev,item1:""}))
  //   }

  return (
    <div
      style={{ textAlign: "center", height: "100vh", alignContent: "center" }}
    >
      {/* <h1 id='h1' >{data}</h1> */}

      {/* change css using usestate */}
      {/* <h1 style={{backgroundColor:data}} >{data}</h1> */}

      {/* turnary opertator */}
      {/* <h1 style={{backgroundColor:data ? 'red' : 'aqua'}} >hello data</h1> 
      <button onClick={click}>click me</button> */}

      {/* value read */}
      {/* <form action="" onSubmit={haldalesubmit} >
    <center>
    <input type="text"placeholder='Enter name ' Name='hello' onChange={(e)=>setData(e.target.value)}  />
    <br />
    <br />
    <br />
    <input type="password"placeholder='Enter pass ' onChange={(e)=>setData(e.target.value)} />
    <br />
    <br />
    <br />

    <input type="email"placeholder='Enter email ' onChange={(e)=>setData(e.target.value)} />
    <br />
    <br />

   <button>submit</button>
   <button type='reset'>clear</button>
    </center>
   </form> */}

      {/* <h1>{data}</h1> */}

      {/* props use */}
      {/* <Form
        input={input}
        haldalesubmit={haldalesubmit}
        setInput={setInput}
      /> */}

      {/* <form action="" onSubmit={haldalesubmit}>
        <center>
          <input
            type="text"
            placeholder="Enter name "
            Name="hello"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <br />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter pass "
            onChange={(e) =>
              setInput((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
          <br />
          <br />
          <br />

          <input
            type="email"
            placeholder="Enter email "
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <br />
          <br />

          <button>submit</button>
          <button type="reset">clear</button>
        </center>
      </form>
      <h1>{input.name}</h1>
      <h1>{input.pass}</h1>
      <h1>{input.email}</h1> */}

      {/* count */}

      {/* <h1>Count usestate</h1>
       <h2>{count} </h2>
       <button onClick={increase}>Increase</button>
       <button onClick={reset}>reset</button>
       <button onClick={dcrease}>dcrease</button> */}

      {/* object se key value ko delete and change  */}

      {/* <h1>{JSON.stringify(data)}</h1>

      <button onClick={click}>click me</button> */}


      {/* // task */}

      <Task/>
    </div>
  );
}

export default App;
