function run()
{
    let html_c=document.querySelector("#html-code").val;
let css_c=document.querySelector("#css-code").val;
let js_c=document.querySelector("#js-code").val;
let output=document.querySelectorAll("#output");
output.contentDocument.body.innerHTML=html_c+css_c+js_c;

}