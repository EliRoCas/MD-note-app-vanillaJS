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
    let style = document.getElementById("page");
    if (style) {
      document.head.removeChild(style);
    }

    style = document.createElement("style");
    style.id = "page";
    style.textContent = content;
    document.head.appendChild(style);
  } catch (error) {
    console.error("¡Upss, algo salió mal al estilizar!", error);
  }
}

async function loadJs(urlPage) {
  try {
    let script = document.getElementById("pageScript");
    if (script) {
      document.body.removeChild(script);
    }

    script = document.createElement("script");
    script.id = "pageScript";
    script.src = urlPage;
    document.body.appendChild(script);
  } catch (error) {
    console.error("¡Upss, algo salió mal con el js!", error);
  }
}

let root = document.getElementById("root");
let header = document.getElementById("header");
let footer = document.getElementById("footer");

let params = undefined;

async function navigateTo(page, params1) {
  let defaultPage = ROUTES.find((route) => route.name === page);
  params = params1;

  if (defaultPage) {
    await replaceContent(root, defaultPage?.htmlUrl);
    await loadStyles(defaultPage?.cssUrl);
    await loadJs(defaultPage?.jsUrl);
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
