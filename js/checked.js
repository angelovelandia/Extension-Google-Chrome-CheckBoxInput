var inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
    if(inputs[index].type == 'checkbox'){
        if(inputs[index].checked == false){
            inputs[index].checked = true;
        } else if(inputs[index].checked == true){
            inputs[index].checked = false;
        }
    }
}