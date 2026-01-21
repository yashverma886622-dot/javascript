// let name="yash"
// console.log(name)

// console.log(document)
// const para=document.querySelector('p')
// para.innerText="this is updated paragraph"


// const para=document.getElementsByClassName('para')
// para[0].innerText="this is updated paragraph"
// para[0].style.color="green"
// console.log(para)


// const para=document.querySelector('.para')
// para.innerText="hey guys i am using js ha ha ha....."
// para.style.color='magenta'
// console.log(para)



// const para=document.querySelectorAll('.para')
// para[1].innerText="ali dost "
// para[0].style.color="blue"
// console.log(para)



// let arr=[343,34,3,23,3434,45,45]
// arr.forEach((ele)=>console.log(ele))



// const container=document.querySelector(".container")
// container.innerHTML="<h1>this is a heading"
// console.log(container)



// const btn=document.querySelector("button")
// btn.classList.add("btn")

// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     alert("button clicked")
// });

const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log("Form submitted!!!!")
})


