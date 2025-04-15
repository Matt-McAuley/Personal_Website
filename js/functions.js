function createCard(cards) {
  const cardsContainer = document.querySelector('.cards');
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <div class="top">
        <img src="${card.image}" alt="${card.title}" class="card-image" />
        <div class="card-info">
          <div class="card-text">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        </div>
      </div>
      <div class="info-bar">
            <div class="tech"></div>
            <div class="links"></div>
      </div>
    `;
    if (card.has_github) {
      const githubLink = document.createElement('a');
      githubLink.href = card.github_link;
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      const githubIcon = document.createElement('img');
      githubIcon.src = '../assets/icons/github.svg';
      githubLink.className = 'github-link';
      githubLink.appendChild(githubIcon);
      githubLink.onclick = (e) => e.stopPropagation();
      cardElement.querySelector('.links').appendChild(githubLink);
    }

    if (card.has_demo) {
      const demoLink = document.createElement('a');
      demoLink.href = card.demo_link;
      demoLink.target = '_blank';
      demoLink.rel = 'noopener noreferrer';
      const demoIcon = document.createElement('img');
      demoIcon.src = '../assets/icons/link.svg';
      demoLink.className = 'demo-link';
      demoLink.appendChild(demoIcon);
      demoLink.onclick = (e) => e.stopPropagation();
      cardElement.querySelector('.links').appendChild(demoLink);
    }

    if (!card.has_github && !card.has_demo) {
      cardElement.querySelector('.links').style.display = 'none';
    }

    const techContainer = cardElement.querySelector('.tech');
    card.icons.forEach(tech_icon => {
      const techIcon = document.createElement('img');
      techIcon.src = tech_icon;
      techIcon.alt = "Icon";
      techIcon.className = 'tech-icon';
      techContainer.appendChild(techIcon);
    });
    cardElement.onclick = () => {
      window.open(card.card_click_link, card.new_tab ? '_blank' : '_self');
    };
    cardsContainer.appendChild(cardElement);
  });
}

export { createCard };
