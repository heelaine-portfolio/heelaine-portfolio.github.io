<script>
  const bio = `I am a journalist who tells stories by showing. Data are the raw materials I use to uncover patterns that shape our understanding of ourselves, our communities and our world.<br><br>My career began in education technology, producing nationally-recognized reading intervention software for children in homes and schools. Then I went to graduate school and fell in love with data visualization. I have partnered with award-winning reporters and best-selling authors to cover key events in markets, politics, energy, climate, culture, sports and technology. My multidisciplinary journalism has appeared in <i><a href="https://www.bloomberg.com/authors/AS0eH95IwdI/elaine-he" target="_blank" rel="noopener noreferrer">Bloomberg</a></i>, <i>The Wall Street Journal</i> and <i>The New York Times</i>, as well as Michael Lewis’s <i>The Premonition</i>.<br><br>I work with data, but I think about design a lot, and how well-designed information (or products, experiences, spaces, systems) can make a real difference to people’s lives. My intention is to connect people with thoughtful designs that serve their needs and make their lives more manageable and joyful.`;
</script>

<section id="about">
  <div class="container">

      <div class="bio">
        <p>{@html bio}</p>
      </div>

  </div>
</section>

<style>
  section {
    background: var(--milk);
    padding: clamp(3rem, 6vw, 6rem) 0;
  }

  .bio {
    flex: 1;
  }

  .bio p {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    text-align: justify;
    line-height: 1.7;
    gap: 20px;
    max-width: 50ch;
    margin: 0 auto;
  }

  .bio p i {
    color: white;
    font-style: italic;
  }

  .bio p :global(a) {
    display: inline;
    background: none;
    color: var(--lime);
    text-transform: none;
    font-size: inherit;
    transition: color 0.2s ease;
  }

  .bio p :global(a:hover) {
    background: none;
    color: var(--sky);
  }

  /* ── Mobile ── */
  @media (max-width: 520px) {
    .bio p {
      padding: 0 var(--space-md);
    }
  }
</style>
