const API = 'https://friends-quotes-api.herokuapp.com/quotes/4';
const content = null || document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);

        let view = `
                ${videos.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md 
                        overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        ${video.quote}
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.character}
                        </h3>
                    </div>
                </div>
                `)
                .slice(0, 4)
                .join('')
            }
    `;

        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
