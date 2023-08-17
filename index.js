// Sample data for the elements
const elementsData = [
    {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    
    },
    {
        "login": "defunkt",
        "id": 2,
        "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
    },
    {
        "login": "pjhyett",
        "id": 3,
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "url": "https://api.github.com/users/pjhyett",
        "html_url": "https://github.com/pjhyett",
        "followers_url": "https://api.github.com/users/pjhyett/followers",
        "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
    },
    // Add more objects for additional elements
  ];
  
  // Get a reference to the container where you want to append the elements
  const container = document.getElementById('div');
  
  // Loop through the data and create elements
  elementsData.forEach(data => {
    const element = document.createElement('div');
    element.className = 'relative bg-white rounded-2xl dark:bg-gray-700';
  
    // Create the content of the element
    element.innerHTML = `
      <div class="w-full h-56 px-4 pt-4">
        <img src="${data.imgSrc}" alt="" class="object-cover w-full h-full rounded-lg">
      </div>
      <div>
        <div class="p-4">
          <div class="mb-3">
            <a href="#">
              <h2 class="text-2xl font-semibold dark:text-gray-300">${data.title}</h2>
            </a>
          </div>
          <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">${data.description}</p>
        </div>
        <div class="flex items-center justify-end">
          <a href="#" class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-black rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100">Learn more</a>
        </div>
      </div>
    `;
 
    // Append the element to the container
    container.appendChild(div);
  });
  