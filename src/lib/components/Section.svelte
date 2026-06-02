<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";

  export let id;
  export let title;
  export let desc = "";
  export let items = [];

  let visible = false;
  let sectionEl;

  const dispatch = createEventDispatcher();

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<section {id} bind:this={sectionEl}>
  <!--
    Sticky title: pins at the top while scrolling through this section's cards,
    then gets pushed off naturally when the next section's title arrives.
    z-index 100 keeps it below the nav (200) but above cards.
  -->
  <h2 class="sticky-title">{title}</h2>

  <div class="container">
    {#if desc}
      <div class="desc-wrapper">
        <p class="desc">{@html desc}</p>
      </div>
    {/if}

    <div class="cards">
      {#each items as item}
        <Card {...item} on:openCard={e => dispatch("openCard", e.detail)} />
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: var(--space-xl) 0 calc(var(--space-xl) + env(safe-area-inset-bottom));
    background: var(--deepsea);
    min-height: 100svh;
    align-content: center;
    scroll-margin-top: 40px;
  }

  /* ── Sticky section title ── */
  .sticky-title {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--deepsea);
    color: var(--milk);
    padding: 3px var(--container-pad);
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  }

  /* ── Card grid ── */
  .container {
    padding-top: var(--space-md);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 21px;
  }

  .cards :global(.card) {
    width: 320px;
  }

  @media (max-width: 520px) {
    .cards {
      gap: 35px;
    }

    .cards :global(.card) {
      width: 100%;
    }

    .sticky-title {
      font-size: clamp(1.8rem, 8vw, 2.8rem);
      padding: 3px var(--container-pad);
    }
  }

  /* ── Description ── */
  .desc-wrapper {
    display: block;
    max-width: 50ch;
    text-align: center;
    margin: 0 auto 3rem;
  }

  .desc {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    display: inline;
    color: var(--milk);
  }
</style>
