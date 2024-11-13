 function run()
{
    let html_c=document.getElementById("html-code").value;
let css_c=document.getElementById("css-code").value;
let js_c=document.getElementById("js-code").value;
let output=document.getElementById("output");
output.contentDocument.body.innerHTML=html_c+"<style>"+css_c+"</style>";
output.contentWindow.eval(js_c);
}
