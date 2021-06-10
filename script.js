const list = document.querySelector('#show-brew');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
  e.preventDefault()
  removeSearch();
  let input = document.querySelector('input').value
  console.log(input);
  getBrew(input);
})



const getBrew = async (input) => {
  try {
    const res = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
    let results = res.data;
    console.log(results.slice(0, 3));
    showBrews(results.slice(0, 3));
  } catch (error) {
    console.log(error.message);
  }
}
getBrew();

const showBrews = (results) => {
  const brewList = document.querySelector('.brewery');
  results.forEach(data => {
    const name = document.createElement('h3');
    name.innerText = data.name;

    const street = document.createElement('p');
    street.innerText = data.street;

    const city = document.createElement('p')
    city.innerText = data.city;

    const state = document.createElement('p');
    state.innerText = data.state;

    const zipCode = document.createElement('p');
    zipCode.innerText = data.postal_code;

    const website = document.createElement('a');
    website.innerHTML = data.website_url;
    website.setAttribute('href', `${data.website_url}`);
    
    const phone = document.createElement('p');
    phone.innerHTML = data.phone;
    // phone.setAttribute('href', `${data.phone}`);

    brewList.append(name, street, city, state, zipCode, website, phone);
  })

}

function removeSearch() {
  const removeCurrent = document.querySelector('.brewery')
  while (removeCurrent.lastChild) {
    removeCurrent.removeChild(removeCurrent.lastChild)
  }
}