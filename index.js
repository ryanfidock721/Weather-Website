document.getElementById('searchbutton').addEventListener('click', fetchData);

async function fetchData() {

    try{
        let userinput = document.getElementById('userinput').value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput},uk&units=metric&APPID=---API KEY HERE---`);

        if(!response.ok){
            throw new Error('Could not fetch resource');
        }

        const data = await response.json();
        const weather = data.weather[0].icon;
        let icon = '';

        switch (weather) {
            case '01d':
                icon = 'https://openweathermap.org/img/wn/01d@2x.png';
                break;
            case '02d':
                icon = 'https://openweathermap.org/img/wn/02d@2x.png'
                break;
            case '03d':
                icon = 'https://openweathermap.org/img/wn/03d@2x.png';
                break;
            case '04d':
                icon = 'https://openweathermap.org/img/wn/04d@2x.png';
                break;
            case '09d':
                icon = 'https://openweathermap.org/img/wn/09d@2x.png';
                break;
            case '10d':
                icon = 'https://openweathermap.org/img/wn/10d@2x.png';
                break;
            case '11d':
                icon = 'https://openweathermap.org/img/wn/11d@2x.png';
                break;
            case '13d':
                icon = 'https://openweathermap.org/img/wn/13d@2x.png';
                break;
            case '50d':
                icon = 'https://openweathermap.org/img/wn/50d@2x.png';
                break;
        }

        console.log(data);
        console.log(weathericon);

        const temp_max = Math.floor(data.main.temp_max) +'°C';
        const temp_min = Math.floor(data.main.temp_min) + '°C';
        const temp_current = Math.floor(data.main.temp) + '°C';
        const locationname = data.name;

        document.getElementById('location').textContent = locationname;
        document.getElementById('temp_current').textContent = temp_current;
        document.getElementById('temp_max').textContent = temp_max;
        document.getElementById('temp_min').textContent = temp_min;
        document.getElementById('weathericon').src = icon;

        document.getElementById('weathercontainer').classList.remove('hidden');
    }
    catch(error){
        console.error(error);
    }
}
