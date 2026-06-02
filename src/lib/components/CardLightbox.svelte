<script>
  import { onMount } from "svelte";

  export let org;
  export let title;
  export let url;
  export let desc;
  export let media;
  export let onClose;

  const mediaItems = [].concat(media);

  // In the lightbox we always show the larger asset:
  //   desktop viewport → desktop src
  //   mobile/tablet viewport → tablet src (or desktop as fallback)
  function lightboxVideoSrc(item) {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 520;
    return isMobile
      ? (item.sources.tablet ?? item.sources.desktop)
      : item.sources.desktop;
  }

  let videoEl;

  function handleKeydown(e) {
    if (e.key === "Escape") onClose();
  }

  onMount(() => {
    document.body.style.overflow = "hidden";
    if (videoEl) {
      videoEl.load();
      videoEl.play().catch(() => {});
    }
    return () => {
      document.body.style.overflow = "";
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="overlay"
  role="dialog"
  aria-modal="true"
  aria-label={title}
  tabindex="-1"
  on:click={onClose}
>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="panel" role="document" on:click|stopPropagation>
    <button class="close" on:click={onClose} aria-label="Close">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="3">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    <div class="media">
      {#each mediaItems as item}
        {#if item.type === "video"}
          <!--
            Lightbox always shows a larger resolution.
            On mobile viewports: tablet src. On wider: desktop src.
            poster uses desktop always (lightbox is large).
          -->
          <video
            bind:this={videoEl}
            muted
            loop
            playsinline
            controls
            preload="auto"
            poster={item.posters?.desktop}
            aria-label={item.alt}
            width={item.width}
            height={item.height}
            src={lightboxVideoSrc(item)}
          ></video>
        {:else if item.type === "image"}
          <!--
            Lightbox image sources:
              mobile viewport  → tablet size (step up from card's mobile)
              tablet viewport  → desktop size
              desktop viewport → desktop size
          -->
          <picture>
            {#if item.sources?.tablet}
              <source srcset={item.sources.tablet} type="image/webp" media="(max-width: 520px)" />
            {/if}
            <img
              src={item.sources.desktop}
              alt={item.alt}
              style={item.padding ? `padding: ${item.padding}; background: ${item.bg ?? "transparent"}` : ""}
            />
          </picture>
        {/if}
      {/each}
    </div>

    <div class="body">
      <h3>{org}</h3>
      {#if title}
        <h4 class="title">
          {#if url}
            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          {:else}
            {title}
          {/if}
        </h4>
      {/if}
      <p class="desc">{@html desc}</p>
    </div>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
    padding: 60px 20px 40px;
    z-index: 999;
    isolation: isolate;
    overscroll-behavior: contain;
    cursor: zoom-out;
  }

  .panel {
    position: relative;
    background: var(--deepsea);
    border-radius: var(--radius-lg);
    width: min(680px, 100%);
    cursor: default;
  }

  .close {
    position: absolute;
    top: var(--close-offset);
    right: var(--close-offset);
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
    transition: background 0.2s ease;
  }

  .close:hover {
    color: var(--close-bg);
    background: var(--close-fg);
  }

  .media {
    width: 100%;
    background: var(--deepsea);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .media :global(picture) {
    display: block;
    width: 100%;
    line-height: 0;
    font-size: 0;
  }

  .media :global(img),
  .media :global(video) {
    width: 100%;
    height: auto;
    display: block;
  }

  .body {
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  h4 a:hover {
    font-weight: var(--wght-bold);
  }

  .desc {
    color: var(--cloud);
    line-height: 1.2;
  }
</style>
