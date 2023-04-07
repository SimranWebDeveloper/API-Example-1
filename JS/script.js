
let min=0;
let max=252;
const nums=[[1,50],[51,100],[101,150],[151,200],[201,252]]


btn=document.querySelectorAll('.bttn');
for (let i = 0; i < nums.length; i++) {
    btn[i].onclick=function myInterval() {
        min=nums[i][0];
        max=nums[i][1];
        runFetch();
    }
}

// btn[0].onclick =function myInterval(){
//     min=0;
//     max=10;
//     runFetch()
// }

function runFetch() {
    console.log(min);
    console.log(max);
    fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then((data)=>{

    let box='';
    data.slice(min,max).map(element=>{
 
        box+=` 
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
         <div class="bg-dark text-white p-2 border">

            Flag: <br>
            <img src=" ${element.flags.png}"  width="100">     <br> 
            Country:  ${element.name.common}   <br>
            Capital:  ${element.capital}     

         </div>
        </div>


        `

    })
    document.querySelector("#div").innerHTML=box;
   
})

.catch(err=> console.log('Error'))
}

runFetch();
