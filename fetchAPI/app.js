const sortButton=document.querySelector("#sortButton")
const sortDButton=document.querySelector("#sortDButton")
const refreshBtn=document.querySelector("#refresh")
container=document.querySelector('#container')
const displayData=(data)=>{
    // container.innerHTML=''
    data.map((item,index)=>{
        container.innerHTML+=`<div>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <p id="price">$${item.price}</p>
         </div>
        `
    })
}
container.style.display='grid'
container.style.gridTemplateColumns='repeat(4,1fr)'

const unSortPrice=async()=>{
    const response= await fetch(`https://fakestoreapi.com/products`)
    const result=await response.json()
    console.log(result)
    displayData(result)
}
unSortPrice()


const sortPrice=async()=>{
    const response= await fetch(`https://fakestoreapi.com/products`)
    const result=await response.json()
    result.sort((a,b) =>{
        return a.price - b.price
    })
    console.log(result)
    displayData(result)
}
sortPrice()

const sortDPrice=async()=>{
    const response= await fetch(`https://fakestoreapi.com/products`)
    const result=await response.json()
    result.sort((a,b) =>{
        return a.price - b.price
    })
    console.log(result.reverse())
    displayData(result)
}
sortDPrice()


let sortBool=false
sortBool?sortDButton.addEventListener('click',unSortPrice):sortButton.addEventListener('click',sortPrice)
sortButton.addEventListener('click', () =>{
    sortBool=!sortBool
    container.innerHTML=""
    displayData()

})

refreshBtn.addEventListener('click',unSortPrice)
refreshBtn.addEventListener('click', () =>{
    container.innerHTML=""
    displayData()

})

sortDButton.addEventListener("click",sortDPrice)
sortDButton.addEventListener('click', () =>{
    container.innerHTML=""
    displayData()

})


