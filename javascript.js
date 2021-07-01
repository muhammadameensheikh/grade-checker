var submitBtn = document.getElementById('submitBtn');
var maths = document.getElementById('maths');
var eng = document.getElementById('eng');
var sci = document.getElementById('sci');
var his = document.getElementById('his');
var geo = document.getElementById('geo');
var result = document.getElementById('result');
var errorMath = document.getElementById('errorMath');
var errorEng = document.getElementById('errorEng');
var errorSci = document.getElementById('errorSci');
var errorHis = document.getElementById('errorHis');
var errorGeo = document.getElementById('errorGeo');


formVal = () =>{
    var returnVal = 1;

        if(maths.value > 100 || maths.value < 0){
            errorMath.innerText = 'The value should range between 0 and 100';
            returnVal = 0
        }
        else if(maths.value == ''){ 
            errorMath.innerText ='Field is empty';
            returnVal = 0
        }
        else if(maths.value < 100 || maths.value > 0){
            errorMath.innerText ='';
        }

   
        if(eng.value > 100 || eng.value < 0){
            errorEng.innerText = 'The value should range between 0 and 100';
            returnVal = 0
        }
        else if(eng.value == ''){
            errorEng.innerText ='Field is empty';
            returnVal = 0
        }
        else if(eng.value < 100 || eng.value > 0){
            errorEng.innerText ='';
        }

    
        if(sci.value > 100 || sci.value < 0){
            errorSci.innerText = 'The value should range between 0 and 100';
            returnVal = 0
        }
        else if(sci.value == ''){
            errorSci.innerText ='Field is empty';
            returnVal = 0
        }
        else if(sci.value < 100 || sci.value > 0){
            errorSci.innerText ='';
        }

    
        if(his.value > 100 || his.value < 0){
            errorHis.innerText = 'The value should range between 0 and 100';
            returnVal = 0
        }
        else if(his.value == ''){
            errorHis.innerText ='Field is empty';
            returnVal = 0
        }
        else if(his.value < 100 || his.value > 0){
            errorHis.innerText =''
        }

        
        if(geo.value > 100 || geo.value < 0){
            errorGeo.innerText = 'The value should range between 0 and 100';
            returnVal = 0
        }
        else if(geo.value == ''){
            errorGeo.innerText ='Field is empty';
            returnVal = 0
        }
        else if(geo.value < 100 || geo.value > 0){
            errorGeo.innerText ='';
        }
   return returnVal
}


gradeCal = () =>{
    var totalMarks = 500;
    var sum = 0;
    sum = parseFloat(maths.value) + parseFloat(eng.value) + parseFloat(sci.value) + parseFloat(his.value) + parseFloat(geo.value);
    var percent = Math.round((sum / totalMarks) * 100);
    var grade;
    if(percent <= 100 && percent >= 90){
        grade = 'A'
    }
    else if(percent <= 89 && percent >= 80){
        grade = 'B'
    }
    else if(percent <= 79 && percent >= 70){
        grade = 'C'
    }
    else if(percent <= 69 && percent >= 60){
        grade = 'D'
    }
    else if(percent <= 59){
        grade = 'F'
    }

    result.innerText = 'Your total score is ' + sum + ' / 500. You have received ' + percent + '% which is a grade ' + grade;
}


inputSubmit = () => {
    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault();
       if(formVal() != false){
           gradeCal()
       }
      
    })
}
inputSubmit()