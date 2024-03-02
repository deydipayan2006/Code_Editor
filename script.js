//  function run() {
//     let htmlcode = document.getElementById("html-code").value;
//    let csscode = document.getElementById("css-code");  
//     let jscode = document.getElementById("js-code");

//     let output = document.getElementById("output");

//  output.contentDocument.body.innerHTML = htmlcode.value;

//  console.log(htmlcode);

//  }

let allCode = document.querySelectorAll(".left textarea");

let display = document.querySelector("#Output");

let htmlcode, css,js = " ";

allCode.forEach((el, index)=>{
    el.addEventListener("keyup",() =>{
        if(index == 0){
            htmlcode = el.value;
        }
        if(index == 1) {
            css = el.value;
        }
        if(index == 2) {
            js = el.value;
        }
        display.contentDocument.body.innerHTML = htmlcode;
        display.contentDocument.head.innerHTML = `<style>${css}</style>`;
        output.contentWindow.document.eval(alert("js"))
    })
})




console.log(allCode)
// console.log(allCode[1])
// console.log(allCode[2])
// console.log(output)



