//NavBar constructor:
function Navbar(obj) {
    this.class = obj.class;
    this.text = obj.text;
}

//myNavBar with appropriate text for links:
const myNavBar = new Navbar({
    class: 'links',
    text: ['Home', 'Team', 'Login', 'Contact Us']
});


//Building navbar as objects to fulfill MVP:
const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => link.classList.add(myNavBar.class));
navLinks[0].textContent = myNavBar.text[0];
navLinks[1].textContent = myNavBar.text[1];
navLinks[2].textContent = myNavBar.text[2];
navLinks[3].textContent = myNavBar.text[3];


//Dev Team construction for pop-up div (teamDiv):
class DevTeam {
    constructor(devObj) {
        this.devObj = devObj;
        this.innerText = devObj.innerText;
        this.github = devObj.github;
        this.devDiv = document.createElement('div');
        this.devDiv.classList.add('dev-team');
        this.img = document.createElement('img');
        this.img.classList.add('dev-img');
        this.img.src = devObj.imgSrc;
        this.text = document.createElement('p');
        this.text.classList.add('dev-text');
        this.text.innerHTML = this.innerText;
        this.link = document.createElement('a');
        this.ghImg = document.createElement('img');
        this.ghImg.classList.add('github-link');
        this.ghImg.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
        this.link.href = this.github;
        this.link.setAttribute('target', '_blank');
        this.link.appendChild(this.ghImg);
        this.devDiv.appendChild(this.img);
        this.devDiv.appendChild(this.text);
        this.devDiv.appendChild(this.link);
    }
}

//DevTeam class objects:
const jakeDev = new DevTeam({
    imgSrc: 'https://avatars1.githubusercontent.com/u/47545988?s=460&v=4',
    innerText: 'Jake Anderson:<br>Web UI Developer',
    github: 'https://github.com/jzanderson09'
});

const arthurDev = new DevTeam({
    imgSrc: 'https://avatars0.githubusercontent.com/u/4889231?s=460&v=4',
    innerText: 'Arthur Lei:<br>Web UI Developer',
    github: 'https://github.com/arturolei'
});

const ihabDev = new DevTeam({
    imgSrc: 'https://avatars2.githubusercontent.com/u/47971028?s=460&v=4',
    innerText: 'Ihab Ali<br>Web UI Developer',
    github: 'https://github.com/h0o0bA'
});

const jimDev = new DevTeam({
    imgSrc: 'https://avatars0.githubusercontent.com/u/37811129?s=460&v=4',
    innerText: 'James Blazer:<br>Front-End Architect',
    github: 'https://github.com/jblazer1'
});

const tonyDev = new DevTeam({
    imgSrc: 'https://avatars2.githubusercontent.com/u/42055232?s=460&v=4',
    innerText: 'Tony Nyagah:<br>Front-End Architect',
    github: 'https://github.com/antonynyagah'
});

const jonDev = new DevTeam({
    imgSrc: 'https://avatars3.githubusercontent.com/u/36145101?s=460&v=4',
    innerText: 'Jonathan Dorety:<br>Back-End Architect',
    github: 'https://github.com/kyullog'
});

const jeffDev = new DevTeam({
    imgSrc: 'https://avatars2.githubusercontent.com/u/38268820?s=460&v=4',
    innerText: 'Jeffrey Kang:<br>Team Lead',
    github: 'https://github.com/jeffyjkang'
});


//establishes team of developers as DevTeam class objects:
const devTeam = [jakeDev, arthurDev, ihabDev, jimDev, tonyDev, jonDev, jeffDev];

//body selection:
const bodyDiv = document.querySelector('body');

//popUpDiv:
const popUpDiv = document.createElement('div');

//container selection:
const containerDiv = document.querySelector('.container');

//gallery link selection (nav):
const contactUs = navLinks[3];

//team link in navigation:
const teamLink = navLinks[1];
teamLink.addEventListener('click', (event) => {
    event.stopPropagation(containerDiv);

    if (popUpDiv.classList.contains('teamDiv') === false) {
        popUpDiv.classList.toggle('teamDiv');
    }
    devTeam.forEach(dev => popUpDiv.appendChild(dev.devDiv));
    bodyDiv.prepend(popUpDiv);
});

//home link to reset page:
const homeLink = navLinks[0];
homeLink.addEventListener('click', () => {
    const header = document.querySelector('.banner');
    const mainContent = document.querySelector('.main');
    header.style.display = 'flex';
    mainContent.style.display = 'flex';
});

//click to gallery link in nav, prepends pop-up gallery div:
contactUs.addEventListener('click', (event) => {
    event.stopPropagation(containerDiv);
    window.scrollTo({
        top: 2100,
        behavior: 'smooth'
      });
});

//general click to the body, removes pop-up gallery div:
containerDiv.addEventListener('click', () => {
    if (bodyDiv.contains(popUpDiv) === false) {
        return;
    }
    while (popUpDiv.firstChild) {
        popUpDiv.removeChild(popUpDiv.firstChild);
    }
    bodyDiv.removeChild(popUpDiv);

});

