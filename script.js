const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML = 0;




    const updateCounter =()=>{
        const targetCount = +counter.getAttribute('data-target');
        

        const startCount = Number(counter.innerHTML);


        const increament = targetCount/10;

        if(startCount < targetCount){
            counter.innerHTML = `${Math.round(startCount+increament)}`
            setTimeout(updateCounter,100)
        }
        else{
            counter.innerHTML = targetCount;
        }

    }


    updateCounter();
})

