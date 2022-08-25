const loadSeiyuu =   async () => {
    // fetch('asset/data/seiyuu.json')
    // .then(response => response.json())
    // .then(data => {
    //     document.getElementById('data-seiyuu').innerHTML = ""
    //     const json = JSON.stringify(data.seiyuu);
    //     const result = JSON.parse(json);

    //     for (let i = 0; i < result.length; i++) {
    //         document.getElementById('data-seiyuu').innerHTML += `
    //         <div class="card">
    //             <img src="${result[i].img}" alt="">
    //             <div class="card-body">
    //                 <h4>${result[i].name}</h4>
    //                 <p>${result[i].detail}</p>
    //             </div>
    //         </div>`
    //     }
    // }).catch(err => {
    //     console.log(err);
    // })
    const data = await fetch('asset/data/seiyuu.json');

    const dataAnime = await data.json();

    const container = document.getElementById('data-seiyuu');

    for (let i = 0; i < dataAnime.seiyuu.length; i++) {
        container.innerHTML +=`
          <div class="card">
            <img src="${dataAnime.seiyuu[i].img}"
              alt="">
            <div class="card-body">
              <h4>${dataAnime.seiyuu[i].name}</h4>
              <p>${dataAnime.seiyuu[i].detail}</p>
            </div>
          </div>
        `
    }
   
}