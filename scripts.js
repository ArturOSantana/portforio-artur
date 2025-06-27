document.addEventListener("DOMContentLoaded", () => {
  // PROJETOS
  const projetos = [
    {
      titulo: "Projeto com Node",
      descricao: "Projeto com Node.js usando APIs REST.",
      link: "#"
    },
    {
      titulo: "API de Usuários",
      descricao: "API REST em Node.js com autenticação JWT e MongoDB.",
      link: "https://github.com/seuusuario/api-usuarios"
    },
    {
      titulo: "Landing Page Paróquia",
      descricao: "Site institucional da paróquia com formulário de inscrição e layout responsivo.",
      link: "https://github.com/seuusuario/site-paroquia"
    }
  ];

  const projetosContainer = document.querySelector('.projetos-container');

  if (projetosContainer) {
    projetos.forEach(projeto => {
      const card = document.createElement('div');
      card.classList.add('projeto-card');

      card.innerHTML = `
        <h4>${projeto.titulo}</h4>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
      `;
      projetosContainer.appendChild(card);
    });
  }

  // HABILIDADES
  const habilidades = [
    { nome: "JavaScript", icone: "fab fa-js-square" },
    { nome: "Node.js", icone: "fab fa-node-js" },
    { nome: "HTML5", icone: "fab fa-html5" },
    { nome: "CSS3", icone: "fab fa-css3-alt" },
    { nome: "MySQL", icone: "fas fa-database" },
    { nome: "Linux", icone: "fab fa-linux" },
    {nome: "React", icone: "fab fa-react" },
    {nome: "windows", icone: "fab fa-windows" },
    { nome: "TypeScript", icone: "fas fa-code" },
    { nome: "Git", icone: "fab fa-git-alt" },
    { nome: "Python", icone: "fab fa-python" },
  ];

  const habilidadesContainer = document.querySelector(".habilidades-container");

  if (habilidadesContainer) {
    habilidades.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skill");
      skillDiv.innerHTML = `
        <i class="${skill.icone} skill-icon"></i>
        <div class="skill-name">${skill.nome}</div>
      `;
      habilidadesContainer.appendChild(skillDiv);
    });
  }

  // SCROLL REVEAL (IntersectionObserver)
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.8s ease-out";
    observer.observe(sec);
  });

  // MODO ESCURO
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Carrega o tema salvo (se houver)
  const temaSalvo = localStorage.getItem("theme");
  if (temaSalvo) html.setAttribute("data-theme", temaSalvo);

  // Define ícone ao carregar
  toggleBtn.innerHTML =
    html.getAttribute("data-theme") === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

  // Alterna tema
  toggleBtn.addEventListener("click", () => {
    const temaAtual = html.getAttribute("data-theme");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", novoTema);
    localStorage.setItem("theme", novoTema);

    // Atualiza ícone
    toggleBtn.innerHTML =
      novoTema === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  });
});
// Revelar timeline ao rolar
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

timelineItems.forEach(item => timelineObserver.observe(item));

particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00b894"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#00b894",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  }
);

document.querySelectorAll('.btn-vermais').forEach(btn => {
  btn.addEventListener('click', () => {
    const info = btn.nextElementSibling;
    const isOpen = info.style.display === 'block';

    info.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? 'Ver mais' : 'Ver menos';
  });
});


//Certificações
document.addEventListener("DOMContentLoaded", function() {
  const certificacoes = [
    {
      titulo: "Linux Unhatched",
      emissor: "Cisco Networking Academy",
      ano: 2024,
      icone: "fab fa-linux",
      descricao: "Introdução ao sistema Linux: comandos, permissões, diretórios e administração.",
      link: "https://www.example.com/linux-cert",
      imagem: "img/certificados/linux.png"
    },
    {
      titulo: "JavaScript Moderno",
      emissor: "Alura",
      ano: 2023,
      icone: "fab fa-js",
      descricao: "JavaScript ES6+, DOM, eventos e programação assíncrona.",
      link: "https://www.example.com/js-cert"
    },
    {
      titulo: "Node.js Backend",
      emissor: "DIO",
      ano: 2024,
      icone: "fab fa-node-js",
      descricao: "Desenvolvimento de APIs REST, Express.js, autenticação JWT.",
      link: "https://www.example.com/node-cert"
    }
  ];

  const container = document.getElementById("certificacoes-container");

  certificacoes.forEach(cert => {
    const card = document.createElement("div");
    card.classList.add("certificacao-card");

    card.innerHTML = `
      <h4>${cert.icone ? `<i class="${cert.icone}" style="color:#00b894;font-size:2rem"></i> ` : ""}${cert.titulo}</h4>
      <small><strong>${cert.emissor}</strong> - ${cert.ano}</small>
      ${cert.imagem ? `<img src="${cert.imagem}" alt="Certificado de ${cert.titulo}">` : ""}
      <button class="btn-vermais">Ver mais</button>
      <div class="cert-info">
        <p>${cert.descricao}</p>
        <a href="${cert.link}" target="_blank" rel="noopener noreferrer">🔗 Ver Certificado</a>
      </div>
    `;
    container.appendChild(card);
  });

  // Interação "Ver mais"
  container.querySelectorAll('.btn-vermais').forEach(btn => {
    btn.addEventListener('click', () => {
      const info = btn.nextElementSibling;
      const isOpen = info.style.display === 'block';
      info.style.display = isOpen ? 'none' : 'block';
      btn.textContent = isOpen ? 'Ver mais' : 'Ver menos';
    });
  });
});