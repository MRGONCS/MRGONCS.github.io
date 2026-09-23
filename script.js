document.addEventListener("DOMContentLoaded", () => {
  const naPaginaInicial = document.title.includes("Sobre mim");

  if (naPaginaInicial && !sessionStorage.getItem("jaCumprimentado")) {
    alert("Olá! Bem-vindo ao meu perfil");
    sessionStorage.setItem("jaCumprimentado", "true");
  }
});

const btnContador = document.getElementById("btnContador");
const contadorEl = document.getElementById("contador");

if (btnContador && contadorEl) {
let contador = 0;
const btn = document.getElementById('btnContador');
const elementoContador = document.getElementById('contador');

if (btn && elementoContador) {
  btn.addEventListener('click', () => {
    contador++;
    elementoContador.textContent = contador;
  });
}
}


document.addEventListener("DOMContentLoaded", function () {
  const containerProjetos = document.getElementById("github-projects");

  if (containerProjetos) {
    const githubUser = "MRGONCS";

    fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated`)
      .then((response) => response.json())
      .then((repos) => {
        containerProjetos.innerHTML = "";

        if (!Array.isArray(repos) || repos.length === 0) {
          containerProjetos.innerHTML =
            '<p class="text-muted">Nenhum repositório público encontrado.</p>';
          return;
        }

        repos.slice(0, 6).forEach((repo) => {
          const col = document.createElement("div");
          col.className = "col-md-6";

          col.innerHTML = `
            <div class="card h-100 p-3 border shadow-sm">
              <h5 class="fw-bold text-success">${repo.name}</h5>
              <p class="text-muted small mb-2">${repo.description || "Sem descrição disponível."}</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary">${repo.language || "Código"}</span>
                <a href="${repo.html_url}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-success">
                  Ver no GitHub 🔗
                </a>
              </div>
            </div>
          `;
          containerProjetos.appendChild(col);
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar do GitHub:", error);
        containerProjetos.innerHTML =
          '<p class="text-danger">Não foi possível carregar os projetos do GitHub de momento.</p>';
      });
  }
});
