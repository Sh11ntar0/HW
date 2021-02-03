const lesult = document.querySelector('#result')//get result element
const filter = document.querySelector('#filter')//get input filter element  
const listItems = [];//define an array variable

//add an event listener to filter element
filter.addEventListener('input', function (e) {
    filterData(e.target.value)
    // filterData(e.???.???);
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    console.log('response: ',results);

    // Clear result
    result.innerHTML = ''


    result. forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
        <img suc="${user.picture.thumbnail}" alt="${user.name.first}"/>
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city},${user.location.country}</p>
        </div>
    `;

    resultUL.appendChild(li);

    });

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
    //h4 --- name
    //p -- any info you wanna put
    // </div

}

function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        if (item.innerText.toLowerCase().includes(serchTerm.toLowerCase())) {
            item.classList.remove('hide')
            //remove the class of .hide
        } else {
            item.classList.add('hide')
            //add the class of .hide
        }
    })
}