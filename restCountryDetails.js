let restCountry = new XMLHttpRequest();
restCountry.open ("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

restCountry.send();

restCountry.onload=function() {

    let data=JSON.parse(restCountry.response);
    console.log(data);

    // for (let i=0; i<=data.length; i++){
    //     console.log(`Name : ${data[i].name} Region : ${data[i].region}`);
    //     console.log(`SubRegion: ${data[i].subregion}  Population:  ${data[i].population}`);
    // }
          
    for(let restCountry of data){

        console.log(`CountryName: ${restCountry.name}`);

        console.log(`CountryRegion: ${restCountry.region}`);

        console.log(`CountrySubRegion: ${restCountry.subregion}`);

        console.log(`CountryPopulation: ${restCountry.population}`);
    }
        
};