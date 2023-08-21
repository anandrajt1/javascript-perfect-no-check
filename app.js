function perfect() {
    let number, remainder, addition = 0, i;

    number = document.getElementById('inp').value
    for (let i = 0; i < number; i++) {
        remainder = number % i

        if (remainder == 0) {
            addition += i;
        }
    }

    if(addition == number){
        document.getElementById('result').innerText="Its a perfect number"
    }
    else{
        document.getElementById('result').innerText="oops! Its not a perfect number"
    }
    
if(number<=0){
    document.getElementById('result').innerText="Enter a positive number !!"

}

    document.getElementById('inp').value=" "
}