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
    const name = document.createElement('p');
    name.innerText = data.name;

    const street = document.createElement('p');
    street.innerText = data.street;

    const city = document.createElement('p')
    city.innerText = data.city;

    const zipCode = document.createElement('p');
    zipCode.innerText = data.postal_code;

    const website = document.createElement('p');
    website.innerHTML = data.website_url;

    const phone = document.createElement('p');
    phone.innerText = data.phone;

    brewList.append(name, street, city, zipCode, website, phone);
  })

}

function removeSearch() {
  const removeCurrent = document.querySelector('.brewery')
  while (removeCurrent.lastChild) {
    removeCurrent.removeChild(removeCurrent.lastChild)
  }
}