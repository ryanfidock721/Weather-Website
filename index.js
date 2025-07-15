document.getElementById('searchbutton').addEventListener('click', fetchData);

async function fetchData() {

    try{
        let userinput = document.getElementById('userinput').value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput},uk&units=metric&APPID=837fdf4a1058954e0a74705a4cedd8a1`);

        if(!response.ok){
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        console.log(data);

        const temp = data.main.temp +'°C';
        const feelslike = data.main.feels_like + '°C';
        const locationname = data.name;

        console.log(temp);
        console.log(feelslike);
        console.log(locationname);

        document.getElementById('location').textContent = locationname;
        document.getElementById('temperature').textContent = temp;
        document.getElementById('feels-like').textContent = feelslike;

        document.getElementById('weathercontainer').classList.remove('hidden');
    }
    catch(error){
        console.error(error);
    }
}
