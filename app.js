document.getElementById('submit-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-field').value;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;
    const spin = document.getElementById('spinner');
    if (inputValue.length === 0) {
        
        alert('write item name on input field')
        main.textContent = '';
        return;
    } else {
        fetch(url)
            .then((res) => res.json())
            .then((data) => displayDrink(data.drinks)) 
    }
    
         spin.style.display = 'block';

        document.getElementById('input-field').value = '';
    
    
    
});

const displayDrink = (gotdrinks) => {
    document.getElementById('spinner').style.display = 'none';
    
    const main = document.getElementById('main');
    gotdrinks.forEach(drink => {
       
        const div = document.createElement('div');
        div.classList.add('col');
         console.log(drink)
       
        div.innerHTML = `
                 <div class="card mt-4" style="width: 18rem;">
                       <img src="${drink.strDrinkThumb}" class="mb-1 img-thumbnail" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${drink.strCategory}</h5>
                        <p>${drink.strAlcoholic}</p>
                        
                        <a onClick="single('${drink.idDrink}')" href="#" class="btn btn-outline-dark">Go somewhere</a>
                    </div>
              </div>        
    
        `;
        main.appendChild(div);
        
    });
   
}
const single = (id) => {
     main.textContent = '';

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data=>singleCard(data.drinks[0]))
    
}
const singleCard = (singleData) => {
    const singleDiv = document.getElementById('single-div');
    const div = document.createElement('div');
            div.innerHTML = `
             <div class="card mb-3" style="max-width: 1000px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${singleData.strDrinkThumb}" class="img-thumbnail rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body text-secondary">
                <h5 class="card-title">${singleData.strCategory}</h5>

                <p class="card-text">${singleData.strGlass}</p>
                <p class="card-text">${singleData.strInstructions}</p>
                <p class="card-text">${singleData.strInstructionsIT}</p>
                <p class="card-text">${singleData.strInstructionsDE}</p>
                <p class="card-text"><strong>Last Modified:${singleData.dateModified}</strong></p>
               
                </div>
            </div>
            </div>
        </div> 
            `;
    singleDiv.appendChild(div)
    

}
 




 