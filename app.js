let count = 0;

const value =document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click",function (e) {
        let styles=(e.currentTarget.classList);
        if(styles.contains("decrease")) {
            count--;
        }else if(styles.contains("increase")) {
            count++;
        }
        else{
            count = 0;
        }
        if(count<0){
            value.style.color="#D70040";
        }
        if(count>0){
            value.style.color="#3CB371";
        }
        if(count==0){
            value.style.color="#36454F";
        }
        value.textContent=count;
    });
});