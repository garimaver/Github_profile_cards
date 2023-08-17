const container = document.getElementById('container');
console.log(container)
let elementsData=[]


async function getUsersData(){
const response=await fetch("https://api.github.com/users")
elementsData= await response.json()
  console.log(elementsData)
  showUserData();
}

getUsersData();

function showUserData(){
  // Get a reference to the container where you want to append the elements
  
  
  // Loop through the data and create elements
  elementsData.forEach(data => {
    const element = document.createElement('div');
    element.className = 'relative bg-white rounded-2xl dark:bg-gray-700';
  
    // Create the content of the element
    element.innerHTML = `
      <div class="w-full h-56 px-4 pt-4">
        <img src="${data.avatar_url}" alt="" class="object-cover w-full h-full rounded-lg">
      </div>
      <div>
        <div class="p-4">
          <div class="mb-3">
            <a href="#">
              <h2 class="text-2xl font-semibold dark:text-gray-300">${data.login}</h2>
            </a>
          </div>
          <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">${data.url}</p>
        </div>
        <div class="flex items-center justify-end">
          <a href="#" class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-black rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100">Learn more</a>
        </div>
      </div>
    `;
 
    // Append the element to the container
    container.appendChild(element);
  });
}
  