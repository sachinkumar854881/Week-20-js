// submit event
let getVal = document.getElementById('userForm')
getVal.addEventListener('submit',function(e){
    e.preventDefault();
    let uname = document.getElementById("getName")
    let upass = document.getElementById("getpwd")

    if (uname.value == "" || upass.value == "") {
        console.log("Please fill UserName and Password !");
    }else{
        console.log("This form has been successfully submitted!");
        console.log(`This form has a username of ${uname.value} and password of ${upass.value}`);
        uname.value = "";
        upass.value = "";
    }
})
// get values from input text
document.getElementById('firstname').addEventListener('change',function(event){
    console.log('this:',event.target)
    console.log(event.target.tagName)
    console.log(event.target.value)
    console.log('this.value',this.value)
})