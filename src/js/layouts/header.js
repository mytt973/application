import nav from "../components/nav.js";

function header(user) {
  return `<section class="nav-header"> ${nav()}</section><div class="info-header">
<h1>Restaurant Le Délicieux</h1>
<p>Une expérience culinaire exceptionnelle</p><div class"connection-header">
${user ? `<p>Salut ${user}` : '<p>connection <i class="fa-solid fa-house"></i></p><div>'}
`;
}

export default header;
