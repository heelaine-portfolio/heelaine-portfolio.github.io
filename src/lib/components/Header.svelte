<script>
  import { onMount } from "svelte";

  export let title    = "Elaine He";
  export let subtitle = "Data Journalist & Visual Storyteller";

  export let steps = [
    {
      sources: {
        mobile:  "/assets/images/bbo-ev-energy-livermore-680.webp",
        desktop: "/assets/images/bbo-ev-energy-livermore.webp"
      },
      alt:     "Raw data from source",
      caption: "data"
    },
    {
      sources: {
        mobile:  "/assets/images/bbo-ev-energy-sketch1-680.webp",
        desktop: "/assets/images/bbo-ev-energy-sketch1.webp"
      },
      alt:     "Sketching and iterating process",
      caption: "bake"
    },
    {
      sources: {
        mobile:  "/assets/images/bbo-ev-energy-2030-680.webp",
        desktop: "/assets/images/bbo-ev-energy-2030.webp"
      },
      alt:     "Published graphic",
      caption: "nom!"
    }
  ];

  let isMobile = typeof window !== "undefined" && window.innerWidth <= 520;
  let activeIndex = null;

  $: activeImage = activeIndex !== null ? steps[activeIndex] : null;
  $: hasPrev     = activeIndex !== null && activeIndex > 0;
  $: hasNext     = activeIndex !== null && activeIndex < steps.length - 1;

  onMount(() => {
    const onResize = () => { isMobile = window.innerWidth <= 520; };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  });

  // Card displays mobile src on narrow screens, desktop on wider.
  // Lightbox always shows desktop (full res, loaded on demand only).
  function lightboxSrc(step) {
    return step.sources.desktop;
  }

  function open(index)  { activeIndex = index; }
  function close()      { activeIndex = null; }
  function prev()       { if (hasPrev) activeIndex -= 1; }
  function next()       { if (hasNext) activeIndex += 1; }

  function handleKeydown(e) {
    if (activeIndex === null) return;
    if (e.key === "Escape")     close();
    if (e.key === "ArrowLeft")  prev();
    if (e.key === "ArrowRight") next();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<header id="home">
  <h1>{title}</h1>
  <h4>{subtitle}</h4>

  <div class="recipe-wrapper">
    {#each steps as step, i}
      <div class="recipe-unit">
        <div class="recipe-img-caption">
          <button class="img-btn" on:click={() => open(i)} aria-label="Enlarge {step.alt}">
            <picture>
              {#if step.sources.mobile}
                <source srcset={step.sources.mobile} media="(max-width: 520px)" type="image/webp" />
              {/if}
              <img
                src={step.sources.desktop}
                alt={step.alt}
                loading={i === 0 ? "eager" : "lazy"}
                fetchpriority={i === 0 ? "high" : "auto"}
                width="200"
                height="200"
              />
            </picture>
          </button>
          <p class="recipe-caption">{step.caption}</p>
        </div>
        {#if i < steps.length - 1}
          <svg class="icon" width="63" height="63" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        {/if}
      </div>
    {/each}
  </div>
</header>

{#if activeImage}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label={activeImage.alt}
    tabindex="-1"
    on:click={close}
  >
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="lightbox-content" role="document" on:click|stopPropagation>

      <button class="close" on:click={close} aria-label="Close">
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="3" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <!-- Left arrow — only rendered when there is a previous image -->
      {#if hasPrev}
        <button class="nav nav-prev" on:click={prev} aria-label="Previous image">
          <svg viewBox="0 0 24 24" width="63" height="63" fill="currentColor" aria-hidden="true" style={isMobile ? "transform: rotate(270deg)" : "transform: rotate(180deg)"}>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      {/if}

      <img src={lightboxSrc(activeImage)} alt={activeImage.alt} />

      <!-- Right arrow — only rendered when there is a next image -->
      {#if hasNext}
        <button class="nav nav-next" on:click={next} aria-label="Next image">
          <svg viewBox="0 0 24 24" width="63" height="63" fill="currentColor" aria-hidden="true" style={isMobile ? "transform: rotate(90deg)" : ""}>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      {/if}

    </div>
  </div>
{/if}

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100svh;
    padding: var(--space-lg) var(--container-pad);
    gap: var(--space-md);
    background: var(--milk);
  }

  h4 {
    font-size: clamp(1.1rem, 1vw, 1.5rem);
    font-family: var(--font-body);
    font-weight: var(--wght-regular);
    color: var(--deepsea);
    text-align: center;
    text-transform: lowercase;
    margin-bottom: clamp(2rem, 5vw, 5rem);
    text-wrap: balance;
  }

  .recipe-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  .recipe-unit {
    display: flex;
  }

  .recipe-img-caption {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  .img-btn {
    background: none;
    border: none;
    padding: 0;
    display: block;
  }

  .recipe-wrapper img {
    width: clamp(100px, 20vw, 200px);
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: 7px 7px var(--deepsea);
    cursor: zoom-in;
    transition: transform 0.2s ease;
    display: block;
  }

  .recipe-wrapper img:hover {
    transform: scale(1.03);
  }

  .recipe-caption {
    font-family: var(--font-special);
    font-size: 1.7rem;
    color: var(--deepsea);
    text-align: center;
    padding-top: 7px;
  }

  .icon {
    color: var(--deepsea);
    user-select: none;
    padding: 0 var(--space-xs);
  }

  /* ── Lightbox ── */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
    padding: 60px 20px;
    z-index: 999;
    overscroll-behavior: contain;
    cursor: zoom-out;
  }

  .lightbox-content {
    position: relative;
    margin: 0 auto;
    max-width: min(620px, 100%);
    cursor: default;
    border-radius: var(--radius-lg);
  }

  .lightbox-content img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
  }

  /* Shared style for close, prev, next */
  .close,
  .nav {
    position: absolute;
    width: var(--close-size);
    height: var(--close-size);
    border-radius: 50%;
    border: none;
    color: var(--close-fg);
    background: var(--close-bg);
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .nav {
    background: none;
    color: var(--milk);
    width: 63px;
    height: 63px;
  }

  .close:hover {
    color: var(--close-bg);
    background: var(--close-fg);
  }

  .close {
    top: var(--close-offset);
    right: var(--close-offset);
  }

  /* Arrows sit vertically centred on the image, just inside the edges */
  .nav-prev {
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    overflow: visible;
  }

  .nav-next {
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    overflow: visible;
  }

  /* ── Mobile ── */
  @media (max-width: 520px) {
    h1 {
      font-size: clamp(3rem, 10vw, 5rem);
    }

    .recipe-wrapper {
      flex-direction: column;
      align-items: center;
    }

    .recipe-wrapper img {
      width: clamp(200px, 70vw, 320px);
      aspect-ratio: 1;
      object-fit: cover;
    }

    .recipe-caption {
      font-size: clamp(1.8rem, 6vw, 3rem);
    }

    .recipe-unit {
      flex-direction: column;
      align-items: center;
    }

    .icon {
      transform: rotate(90deg);
      padding: 0;
    }

    .nav-prev {
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
    }

    .nav-next {
      top: unset;
      bottom: -50px;
      left: 50%;
      right: unset;
      transform: translateX(-50%);
    }
  }
</style>