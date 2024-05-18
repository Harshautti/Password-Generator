

generatebtn = document.querySelector('.generatebtn')
generatebtn.addEventListener('click',()=>{
let password = ''
let upperCase =[]
let lowerCase =[]
let numbers = []
let specialChar = ['~','!','@','#','$','%','^','&','*','(',')']
for(let i=65;i<=90;i++)
    {
        upperCase.push(String.fromCharCode(i))
    } 
for(let i=97;i<=122;i++)
    {
        lowerCase.push(String.fromCharCode(i))
    }
for(let i=48;i<=57;i++)
    {
        numbers.push(String.fromCharCode(i))
    }
    while(password.length<=12)
        {
            password += upperCase[Math.floor(Math.random()*upperCase.length)]
            password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
            password += numbers[Math.floor(Math.random()*numbers.length)]
            password += specialChar[Math.floor(Math.random()*specialChar.length)]
           
        }
        let passwordGenerator = document.querySelector('.input')
        passwordGenerator.value = password
})

let copybtn = document.querySelector('.copybtn')
copybtn.addEventListener('click',()=>{
    let passwordGenerator = document.querySelector('.input').value
        if(passwordGenerator.length > 0)
            {
            navigator.clipboard.writeText(passwordGenerator)
            }
        })

