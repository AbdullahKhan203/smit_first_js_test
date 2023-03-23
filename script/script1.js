// clear output function
function clearOutput(){
    document.getElementById('output_div').innerHTML="";
}









let cities = ["Lahore","Karachi","Queta","Peshawar"];
let city="faisalabad";
//  console.log(city.length);
//    cities=cities[0];
function printCities(){
    document.getElementById('output_div').innerHTML="";

    for(i=0;i<cities.length;i++){
        num=i+1;
        document.getElementById("output_div").innerHTML += num +")"+" "+cities[i]+"<br>"
    }
}




// function addCity(){

//     let city=document.getElementById('input').value;
//     if(city.length<3){
//         Toastify({
//             text: "enter proper city name",
             
//               duration: 3000
             
//               }).showToast();
//               return;
//     }

//     let cityFirstLetter = city.slice(0,1).toUpperCase();
//     let cityAllLetters=city.slice(1).toLowerCase();

//     let cityFullName = cityFirstLetter + cityAllLetters;
//     console.log(cityFullName);

//     let cityFound=false;

//     for(i=0;i<cities.length;i++){
//         if(cities[i]===cityFullName){

//             cityFound=true;
//             message=
//         }
//     }




// }
     




function logout(){
    window.location.assign("index.html");
}




// Add city
// function addCity(){
//    let city=document.getElementById("input_type").value;


// }

function addCity(){

    let city = document.getElementById("input").value;

    if (city.length < 3) {
        alert("Please type correct city name")
        return;
    }

    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityFullName = cityFirstLetter + cityAllLetters;
    console.log(cityFullName)

    let cityFound = false;


    for (i = 0; i < cities.length; i++) {
        if (cities[i] === cityFullName) {

            cityFound = true;
            messege = '<span style="color:red;">"' + cityFullName + '" <span style="color:green;" class="pt-5">Is Already added in list</span>' + '</span>'
            document.getElementById('output_div').innerHTML = messege;
        }
    }

    if (cityFound === false) {

        cities.push(city);
        document.getElementById("output_div").innerHTML = "<p class='pt-5' style='color:green;font-size:20px;'>" + "'" + cityFullName + "'" + " " + "Is Successfull Added In List" + "</p>"
        console.log(cities)
    }
}
