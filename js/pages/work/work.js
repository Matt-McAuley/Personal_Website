import experiences from './work-data.js';

const cardsContainer = document.querySelector('.cards');
const companyNameContainer = document.querySelector('.companies');

experiences.reverse().forEach((experience, idx) => {
  const companyName = document.createElement('li');
  companyName.textContent = experience.title;
  if (idx === 0)
    companyName.classList.add('active');
  companyNameContainer.appendChild(companyName);

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <h2>${experience.title}</h2>
  <div class="role">${experience.role}</div>
  <div class="date-range"><span class="date-start">${experience.startDate}</span><span class="date-dash"> – </span><span class="date-end">${experience.endDate}</span></div>
  <p class="description">${experience.description}</p>
  <div class="icons">
    ${experience.icons.map(icon => `
  <div class="icon">
    <img src="${icon[0]}" alt="${icon[1]} icon" />
    <span class="icon-name">${icon[1]}</span>
  </div>
`).join('')}
  `;
  if (idx === 0)
    card.classList.add('active');
  cardsContainer.appendChild(card);
});

const items = document.querySelectorAll('.experiences ul li');
const cards = document.querySelectorAll('.cards .card');

items.forEach((item, idx) => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    cards.forEach(c => c.classList.remove('active'));

    item.classList.add('active');
    cards[idx].classList.add('active');
  });
});

