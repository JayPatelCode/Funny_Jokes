//using promise
// GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#jokeBtn');
const generateJokes=()=>{

    const setHeader = {
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/',setHeader) //this api is called using fetch method
    .then((res)=> res.json()    //if it recieves data sccessfully then it goes inside then blockres.json()
    //   console.log(res.json())
)
    .then((data)=>{
        jokes.innerHTML=data.joke

    }) .catch((error)=>{  //if data is not recieved then it goes inside catch block 
        console.log(error);

    })
}


jokeBtn.addEventListener('click',generateJokes);
generateJokes();
