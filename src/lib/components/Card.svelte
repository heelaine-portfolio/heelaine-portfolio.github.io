<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let org;
  export let title;
  export let url;
  export let desc;
  export let media;

  const mediaItems = [].concat(media);
  const dispatch = createEventDispatcher();
  const TRUNCATE_AT = 220;

  let isMobile = typeof window !== "undefined" && window.innerWidth <= 520;
  let isVisible = false;
  let isPaused = isMobile;
  let currentTime = 0;
  let duration = 0;
  let scrubbing = false;
  let videoEl;
  let cardEl;

  $: isTruncated = !isMobile && desc.length > TRUNCATE_AT;
  $: shortDesc = isTruncated ? desc.slice(0, TRUNCATE_AT).trimEnd() : desc;
  $: progress = duration ? currentTime / duration : 0;

  function pickVideoSrc(item) {
    return isMobile ? item.sources.mobile : item.sources.desktop;
  }

  function tryPlay() {
    if (!videoEl) return;
    if (isMobile) return;
    const conn = navigator.connection;
    const slow = conn && (conn.saveData || conn.effectiveType === "2g" || conn.effectiveType === "3g");
    if (slow) return;
    if (videoEl.readyState >= 2) {
      videoEl.play().catch(() => {});
    } else {
      videoEl.addEventListener("canplay", () => videoEl.play().catch(() => {}), { once: true });
      videoEl.load();
    }
  }

  function togglePlay(e) {
    e.stopPropagation();
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play().catch(() => {});
      isPaused = false;
    } else {
      videoEl.pause();
      isPaused = true;
    }
  }

  // Scrubber: seek on click or drag along the track
  function seek(e) {
    e.stopPropagation();
    if (!videoEl || !duration) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoEl.currentTime = ratio * duration;
  }

  function onTimeUpdate() {
    if (!scrubbing) currentTime = videoEl.currentTime;
  }

  function onLoadedMetadata() {
    duration = videoEl.duration;
  }

  onMount(() => {
    const handleResize = () => { isMobile = window.innerWidth <= 520; };
    window.addEventListener("resize", handleResize, { passive: true });

    const firstItem = mediaItems[0];

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && firstItem?.type === "video" && videoEl && !isPaused) {
          tryPlay();
        } else if (!isVisible && videoEl) {
          videoEl.pause();
        }
      },
      { rootMargin: isMobile ? "0px 0px 400px 0px" : "0px", threshold: 0.1 }
    );

    if (cardEl) observer.observe(cardEl);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (cardEl) observer.unobserve(cardEl);
    };
  });

  function openLightbox() {
    if (isMobile) return;
    dispatch("openCard", { org, title, url, desc, media });
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<article
  bind:this={cardEl}
  class="card"
  class:clickable={!isMobile}
  on:click={openLightbox}
  role={isMobile ? "article" : "button"}
  tabindex={isMobile ? undefined : "0"}
  on:keydown={e => !isMobile && e.key === "Enter" && openLightbox()}
  aria-label={isMobile ? undefined : `View details for ${title}`}
>
  <div class="media" class:padded={mediaItems.some(i => i.padding)}>
    {#each mediaItems as item}
      {#if item.type === "video"}
        <div class="video-wrap">
          <video
            bind:this={videoEl}
            muted
            loop
            playsinline
            preload={isMobile ? "none" : "metadata"}
            poster={isMobile ? (item.posters?.mobile ?? item.posters?.desktop) : item.posters?.desktop}
            aria-label={item.alt}
            width={item.width}
            height={item.height}
            src={pickVideoSrc(item)}
            on:timeupdate={onTimeUpdate}
            on:loadedmetadata={onLoadedMetadata}
            style={item.align ? `object-position: ${item.align}` : undefined}
          ></video>

          <!-- Controls bar: always visible, sits at the bottom of the video -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div class="controls" on:click|stopPropagation>
            <button class="play-btn" on:click={togglePlay} aria-label={isPaused ? "Play" : "Pause"}>
              {#if isPaused}
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              {:else}
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              {/if}
            </button>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="scrubber"
              role="slider"
              aria-label="Video progress"
              aria-valuenow={Math.round(progress * 100)}
              aria-valuemin="0"
              aria-valuemax="100"
              tabindex="0"
              on:click={seek}
              on:mousedown|stopPropagation={() => { scrubbing = true; }}
              on:mousemove={e => { if (scrubbing) seek(e); }}
              on:mouseup={() => { scrubbing = false; }}
              on:mouseleave={() => { scrubbing = false; }}
              on:keydown={e => {
                if (!videoEl || !duration) return;
                if (e.key === "ArrowRight") videoEl.currentTime = Math.min(duration, videoEl.currentTime + 5);
                if (e.key === "ArrowLeft")  videoEl.currentTime = Math.max(0,        videoEl.currentTime - 5);
              }}
            >
              <div class="track">
                <div class="fill" style="width: {progress * 100}%"></div>
                <div class="thumb" style="left: {progress * 100}%"></div>
              </div>
            </div>
          </div>
        </div>
      {:else if item.type === "image"}
        <picture>
          {#if item.sources?.mobile}
            <source srcset={item.sources.mobile} type="image/webp" media="(max-width: 520px)" />
          {/if}
          {#if item.sources?.tablet}
            <source srcset={item.sources.tablet} type="image/webp" media="(max-width: 1024px)" />
          {/if}
          <img
            src={item.sources.desktop}
            alt={item.alt}
            loading="lazy"
            width={item.width}
            height={item.height}
            style={[
              item.padding ? `padding: ${item.padding}; background: ${item.bg ?? "transparent"}` : "",
              item.align   ? `object-position: ${item.align}` : ""
            ].filter(Boolean).join("; ")}
          />
        </picture>
      {/if}
    {/each}
  </div>

  <div class="caption">
    <div class="caption-top">
      <h3>{org}</h3>
      {#if title && url}
        <h4>
          <a href={url} target="_blank" rel="noopener noreferrer" on:click|stopPropagation>{title}</a>
        </h4>
      {:else if title}
        <h4>{title}</h4>
      {/if}
    </div>

    <p>{@html shortDesc}</p>
    {#if isTruncated}<span class="more">more</span>{/if}
  </div>
</article>

<style>
  .card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .card.clickable {
    cursor: pointer;
    outline: 2px solid transparent;
    transition: transform 0.2s ease, outline-color 0.2s ease, box-shadow 0.2s ease;
  }

  .card.clickable:hover,
  .card.clickable:focus-visible {
    transform: translateY(-3px);
    box-shadow: 0 0 0 2px var(--milk), 0 7px 21px rgba(0, 0, 0, 0.12);
    outline-color: var(--milk);
  }

  /* ── Media area ── */
  .media {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    flex-shrink: 0;
  }

  .media img,
  .media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .media picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  .media picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Video wrapper ── */
  .video-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .video-wrap video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Controls bar ── */
  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 7px;
    background: linear-gradient(transparent, rgba(0,0,0,0.45));
    border-radius: 0;
  }

  .play-btn {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    background: rgba(255,255,255,0.2);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s ease;
    padding: 0;
  }

  .play-btn:hover {
    background: rgba(255,255,255,0.35);
  }

  /* ── Scrubber ── */
  .scrubber {
    flex: 1;
    height: 18px; /* generous hit area */
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
  }

  .scrubber:focus-visible .track {
    /*outline: 2px solid var(--lime);*/
    outline-offset: 2px;
  }

  .track {
    position: relative;
    width: 100%;
    height: 3px;
    background: rgba(255,255,255,0.3);
    border-radius: 2px;
  }

  .fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: white;
    border-radius: 2px;
    pointer-events: none;
  }

  .thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: white;
    pointer-events: none;
    /* Only show thumb on hover/focus to keep it tidy at small sizes */
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .scrubber:hover .thumb,
  .scrubber:focus-visible .thumb {
    opacity: 1;
  }

  /* ── Caption ── */
  .caption {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: var(--space-md);
    background: var(--milk);
    gap: var(--space-sm);
  }

  .caption-top {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  h4 a:hover {
    font-weight: var(--wght-bold);
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .more {
    font-size: 0.7rem;
    text-transform: uppercase;
    color: var(--lime);
    font-weight: var(--wght-medium);
    display: block;
  }

  .more:hover {
    font-weight: var(--wght-bold);
  }

  /* ── Mobile overrides ── */
  @media (max-width: 520px) {
    .card { height: auto; }
    .caption { flex: none; }

    p {
      display: block;
      -webkit-line-clamp: unset;
      overflow: visible;
    }

    .more { display: none; }
    .media { aspect-ratio: unset; }

    .media img,
    .video-wrap,
    .video-wrap video,
    .media picture img {
      height: auto;
    }
  }
</style>
