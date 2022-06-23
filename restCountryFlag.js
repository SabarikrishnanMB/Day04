let restCountry = new XMLHttpRequest();
restCountry.open ("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

restCountry.send();

restCountry.onload=function() {
    let data=JSON.parse(restCountry.response);
    console.log(data);
    
   // console.log(data[0].flag);
    for(let restCountry of data){
        console.log(`CountryFlag: ${restCountry.flag}`);
    }
    console.log(restCountry.status);
    
};










//    let data
//     data = JSON.parse(request.response);
//     for (let contry of data){
//         console.log(contry);
//     }
//    // console.log(data);
//    }

    //console.log(request.responseText);
    //console.log(request.status);
    //console.log(data[1].name);
    // console.log(data[2].name);
    // console.log(data[1].avatar);