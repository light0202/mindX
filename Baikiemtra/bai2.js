
const a=document.getElementById("Number")
const sumit=document.getElementById("sumit")
const newWindow= window.open()

function numberOneTriangle(a) {
    
    const newWindow= window.open()
    for (let i = 1; i <= a; i++) {
        
            for (let j =1; j<=i;j++) {
                newWindow.document.write("*")
                
            }
            newWindow.document.write("<br />")
        }
        
    }



sumit.onclick = ()=> {
    numberOneTriangle(a.value)
}

