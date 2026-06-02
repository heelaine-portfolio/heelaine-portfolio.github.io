<script>
  export let sections = [];
  export let active   = "";

  let menuOpen = false;

  function closeMenu() { menuOpen = false; }

  $: visibleSections = sections.filter(s => s.nav && s.id !== "about");

  let hasLeftAbout = false;
  $: if (active !== "" && active !== "home" && active !== "about") hasLeftAbout = true;
  $: if (active === "home" || active === "about") hasLeftAbout = false;
  $: navHidden = !hasLeftAbout;
</script>

{#if menuOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="backdrop" on:click={closeMenu}></div>
{/if}

{#if !navHidden}
  <nav>
    <button
      class="hamburger"
      class:open={menuOpen}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      on:click={() => (menuOpen = !menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    {#if menuOpen}
      <ul role="menu">
        {#each visibleSections as s}
          <li class={s.id} role="none">
            <a
              href={"#" + s.id}
              role="menuitem"
              class:active={active === s.id && s.id !== "home"}
              on:click={closeMenu}
            >
              {s.label}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: var(--space-sm);
    right: var(--container-pad);
    z-index: 200;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: var(--deepsea);
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    padding: 8px;
  }

  .hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--milk);
    border-radius: var(--radius-sm);
    transition: transform 0.2s ease, opacity 0.2s ease;
    transform-origin: center;
  }

  /* Animate to × when open */
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  ul {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    list-style: none;
    background-color: var(--deepsea);
    border-radius: var(--radius-sm);
    padding: var(--container-pad);
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-width: 140px;
    text-transform: lowercase;
  }

  a {
    display: block;
    color: var(--milk);
    font-size: 0.9rem;
    padding: 3px;
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--lime);
  }

  a.active {
    color: var(--lime);
  }

  li.home a {
    font-family: var(--font-special);
    text-transform: lowercase;
    font-size: 1.3rem;
    background: none;
  }

  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 199;
  }
</style>