const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const btn = document.getElementById('arrow')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
    }
}

function addLoadingAnimation() {
    const loadingHTML = `
    <div class="loading">
        <img src="./loading.svg" alt="">
    </div>`

    main.innerHTML = loadingHTML;
}

function convertDate(d) {
        let today = new Date();

        const dd = Math.abs(String(today.getDate()).padStart(2, '0') - d.slice(8, 10));
        const mm = Math.abs(String(today.getMonth() + 1) - d.slice(5,7));
        const yyyy = Math.abs(today.getFullYear() - d.slice(0, 4));

        const totalDays = yyyy * 365 + mm * 12 + dd * 30;

        return `Joined ${totalDays} days ago`;    
}

function createUserCard(user) {
    const joinedDate = user.created_at ? convertDate(user.created_at) : '';
    const location = user.location ? `From: ${user.location}` : '';
    const userBio = user.bio ? `${user.bio}` : '';
    const company = user.company ? `Company: ${user.company}` : '';

    const cardHTML = `
    <div class="card">
    <div>
    <a class="user-link" target="_blank" href="${user.html_url}">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </a>
    </div>
    <div class="user-info">
      <h2>
        <a class="user-link" target="_blank" href="${user.html_url}">${user.login}</a>
      </h2>
      <p>${joinedDate}</p>
      <p>${location}</p>
      <p>${userBio}</p>
      <p>${company}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, repos.length)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value
    addLoadingAnimation();
    if(user) {
        getUser(user)

        search.value = ''
    }
})
btn.addEventListener('click', (e) => {
    e.preventDefault()

    const user = search.value
    addLoadingAnimation();
    if(user) {
        getUser(user)

        search.value = ''
    }
})