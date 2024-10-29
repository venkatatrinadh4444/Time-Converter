let hoursInputEl=document.getElementById('hoursInput')
let minutesInputEl=document.getElementById('minutesInput')
let convertBtnEl=document.getElementById('convertBtn')
let errorMsgEl=document.getElementById('errorMsg')
let timeInSecondsEl=document.getElementById('timeInSeconds')

convertBtnEl.addEventListener('click',()=>{
    let hoursValue=hoursInputEl.value
    let minutesValue=minutesInputEl.value

    if(hoursValue==='') {
        errorMsgEl.textContent="Please Enter The Number Of 'Hours'"
    }
    else if(minutesValue==='') {
        errorMsgEl.textContent="Please Enter The Number Of 'Minutes'"
    }
    else {
        errorMsgEl.textContent="";
        let secondsValue=hoursValue*3600+minutesValue*60;
        let spanEl=document.createElement('span')
        spanEl.textContent=secondsValue;
        timeInSecondsEl.appendChild(spanEl);  
        hoursInputEl.value='';
        minutesInputEl.value='';
    }
})