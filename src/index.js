async function replaceContent(container, urlPage) {
  try {
    const response = await fetch(urlPage);
    const content = await response.text();
    container.innerHTML = content;
  } catch (error) {
    console.error("¡Upss, algo salió mal al cargar la página!", error);
  }
}

async function loadStyles(urlPage) {
  try {
    const response = await fetch(urlPage);
    if (!response.ok) {
      throw new Error("¡Upss, algo salió mal!");
    }
    const content = await response.text();
    const style = document.getElementById("page");
    style.textContent = content;
  } catch (error) {
    console.error("¡Upss, algo salió mal al estilizar!", error);
  }
}

async function loadJs(urlPage) {
  try {
    const response = await fetch(urlPage);
    if (!response.ok) {
      throw new Error("¡Upss, algo salió mal!");
    }
    const content = await response.text();
    const script = document.getElementById("pageScript");
    script.textContent = content;
  } catch (error) {
    console.error("¡Upss, algo salió mal con el js!", error);
  }
}

let root = document.getElementById("root");
let header = document.getElementById("header");
let footer = document.getElementById("footer");

function navigateTo(page) {
  let defaultPage = ROUTES.find((route) => route.name === page);

  if (defaultPage) {
    replaceContent(root, defaultPage?.htmlUrl);
    loadStyles(defaultPage?.cssUrl);
    loadJs(defaultPage?.jsUrl);
    history.pushState({ page: page }, "", page);
  }
}
replaceContent(header, "/src/layout/header/header.html");
replaceContent(footer, "/src/layout/footer/footer.html");

//header
function closeNavbar() {
  const navBarCollapse = document.getElementById("navbarSupportedContent");
  if (navBarCollapse.classList.contains("show")) {
    navBarCollapse.classList.remove("show");
  }
}
