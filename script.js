const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("mobileMenu");
toggle.addEventListener("click", function () {
  let open = menu.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
});

menu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
window.addEventListener("scroll", () => {
  if (scrollY) {
    menu.classList.remove("open");

    toggle.classList.remove("open");

    toggle.setAttribute("aria-expanded", "false");
  }
});
let ultimaPosicao = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const posicaoAtual = window.scrollY;

  if (ultimaPosicao < posicaoAtual) {
    navbar.style.display = "none";
  } else if (ultimaPosicao > posicaoAtual) {
    navbar.style.display = "flex";
  }
  ultimaPosicao = posicaoAtual;
});

document.getElementById("ano").textContent = new Date().getFullYear();

document.getElementById("agendaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let f = e.target;
  if (!f.nome.value.trim() || !f.tel.value.trim()) {
    alert("Preencha seu nome e WhatsApp.");
    return;
  }
  const mensagem = (f.msg.value || "-").slice(0, 500);

  const texto =
    "Olá, Name Empresa!%0A" +
    "Nome: " +
    encodeURIComponent(f.nome.value) +
    "%0A" +
    "WhatsApp: " +
    encodeURIComponent(f.tel.value) +
    "%0A" +
    "Serviço: " +
    encodeURIComponent(f.servico.value) +
    "%0A" +
    "Mensagem: " +
    encodeURIComponent(mensagem);

  window.open("https://wa.me/5561999999999?text=" + texto, "_blank");
});

document.querySelectorAll(".moment-card").forEach((card) => {
  const video = card.querySelector("video");
  const button = card.querySelector(".play");

  button.addEventListener("click", () => {
    if (video.paused) {
      // Pausa todos os outros vídeos
      document.querySelectorAll(".moment-card video").forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });

      // Volta o botão dos outros cards para play
      document.querySelectorAll(".moment-card .play").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.textContent = "▶";
        }
      });

      video.muted = false;
      video.play();
      button.textContent = "❚❚";
    } else {
      video.pause();
      button.textContent = "▶";
    }
  });
});
