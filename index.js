fetchData();

async function fetchData() {

    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=837fdf4a1058954e0a74705a4cedd8a1');

        if(!response.ok){
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        console.log(data);

        const temp = data.main.temp;
        const feelslike = data.main.feels_like;
        const locationname = data.name;

        console.log(temp);
        console.log(feelslike);
        console.log(locationname);

        document.getElementById('location').textContent = locationname;
        document.getElementById('temperature').textContent = temp;
        document.getElementById('feels-like').textContent = feelslike;
    }
    catch(error){
        console.error(error);
    }
}
