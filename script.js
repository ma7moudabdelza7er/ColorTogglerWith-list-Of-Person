let result = document.getElementById("result");
let filter = document.getElementById("filter");
const listItem = [];
filter.addEventListener("input",function(e){
    
    filterData(e.target.value)
    // console.log(e.target.value)
})
async function getData(){  
    const res = await fetch("https://randomuser.me/api?results=50")
    const data = await res.json()
    result.innerHTML = "";
    data.results.forEach((user) => {
        console.log(user.name.first)
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city} ${user.location.country}</p>
        </div>
        <hr class="hr"> 
        `
        result.appendChild(li)
        // console.log(result)
    })
}
// console.log(listItem)
getData();

function filterData(val){
    
    listItem.forEach(function(el){
        
        if(el.innerText.toLowerCase().includes(val.toLowerCase())){
            
            // el.classList.remove("hide")
        }else{

            el.classList.add("hide");

        }
    })
}

// toggler
let toggler = document.getElementById("switch")

let header= document.querySelector(".header")

toggler.addEventListener("click",function(){
    
    if(toggler.checked == true){
        
        document.body.style.backgroundColor = "rgb(17,17,17)"
        
        header.style.backgroundColor = "darkred"
    
    }else{   
        
        document.body.style.backgroundColor = "#fff";
        
        header.style.backgroundColor = "black"
    }
})