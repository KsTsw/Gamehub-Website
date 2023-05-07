const apiUrl = 'https://api.noroff.dev/api/v1/gamehub';

async function getData(url) {
    console.log('getData called', url);

    try {
        const response = await fetch(url);
        const json = await response.json(); 
        console.log(json);
    } catch (error) {
        //
    }
}



getData(apiUrl)