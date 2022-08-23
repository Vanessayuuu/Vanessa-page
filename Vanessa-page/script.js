
class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                      <img src="image/IMG_0781.jpg"/>
                    </a>
                    <button class="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="cat-nav" class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="about_me.html">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="education.html">Education</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="work_experience.html">Work</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a id="nav-link-parent" class="nav-link dropdown-toggle" href="accomlishments.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Accomplishments
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="acc_cs.html">Computer Science</a></li>
                            <li><a class="dropdown-item" href="acc_spanish.html">Spanish</a></li>
                            <li><a class="dropdown-item" href="acc_coffee.html">Specialty Coffee</a></li>
                            <li><a class="dropdown-item" href="acc_sas.html">Society Establishment</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact_me.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
      `;
    }
}
customElements.define('header-component', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
          <li class="nav-item"><a href="about_me.html" class="nav-link px-2 text-muted">About</a></li>
          <li class="nav-item"><a href="education.html" class="nav-link px-2 text-muted">Education</a></li>
          <li class="nav-item"><a href="work_experience.html" class="nav-link px-2 text-muted">Work</a></li>
          <li class="nav-item"><a href="accomlishments.html" class="nav-link px-2 text-muted">Accomplishments</a></li>
          <li class="nav-item"><a href="contact_me.html" class="nav-link px-2 text-muted">Contact</a></li>
          </ul>
          <p class="text-center text-muted">Vanessa YU, 2022</p>
      </footer>
    `;
  }
}
customElements.define('footer-component', Footer);

const scrollElements = document.querySelectorAll(".hideme");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

