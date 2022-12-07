const API = 'https://pokeapi.co/api/v2/evolution-chain/7/';

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9,
		'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi,options)
    const data = await response.json();
    return data;
}

(async ()=> {
    try{
        const profile = await fetchData(API);
        let view = `
        ${profile}
            <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    title
            </h3>
            </div>
            </div>
        `;
        `${content.innerHTML = view}`;
    } catch (e) {
        alert('Error, not available')
    }
})();
