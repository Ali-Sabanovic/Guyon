// var container = document.querySelector("#fetch");
// var formaIme = document.querySelector("#ime");
// console.log(formaIme.value)

// function preuzmi() {
//     var url = "https://restapiexample.wrd.app.fit.ba/Ispit20210702/Get4Studenta";

//     fetch(url)
//         .then((r) => {
//             if (r.status != 200) {
//                 return;
//             }

//             r.json().then((x) => {
//                 for (let i = 0; i < 4; i++) {
//                     container.innerHTML += ubaci(x[i]);  
//                 }
//             });

//         })
        
//         .catch((error) => {
//             alert("GRESKA")
//         });
// }

// preuzmi();

// function ubaci(x) {
//     return `<div class="col-3" data-aos="fade-up">
//     <div class="testimonials-2__card">
//         <img src="${x.slikaPutanja}" alt="">
    
//         <div class="card-text">
//             <h3 class="h3-3">${x.imePrezime}</h3>
    
//             <h4 class="h4-1">${x.radnoMjesto}</h4>
    
//             <p class="par-7">
//                 ${x.opis}
//             </p>
    
//             <button class="btn-4" onclick="forma('${x.imePrezime}')" href="#">Pisi poruku</button>
//         </div>
//     </div>
//     </div>`
// }

// function forma(x) {
//     formaIme.value = x;
// }

