let fromCode6 = document.querySelector('#fromCode6');
let toCode6 = document.querySelector('#toCode6');


let tableAppend6= document.querySelector('#tableAppend6');
let submitbtn6 = document.querySelector('.submit-btn6');

let flag6 = true;
let resultBox6 = document.querySelector('.resultBox6');

submitbtn6.addEventListener('click',()=>{
    event.preventDefault(); // Stops webpage from reloading automatically after form submission

        if(fromCode2=="code" || toCode2=="code"){
            alert("Please fill all the details");
            return;
        }

        // API Call
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3c643db7cfmshac142d430fa60e8p1c9a69jsnabd27fb5a160', // Change rapidapi key here
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        };
        
        

        fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${fromCode6.value}&toStationCode=${toCode6.value}`, options)
            .then(response => response.json())
            .then(response => {
            console.log(response);
            for(let i=0; i<response.data.length-1; i++){
                let tr6 = document.createElement('tr');
                tr6.innerHTML = `<td><a href="#">${response.data[i].train_number}</a></td><td class="amount">${response.data[i].train_name}</td>`;
                tableAppend6.appendChild(tr6);
            }
            })
            .catch(err => console.error(err));



            // Show resultBox
            if(flag6){
                resultBox6.style.display = 'grid';
                flag6 = false;
            }


});

