<script>
  import { onMount } from "svelte";

  // Header, Nav, About are above the fold — always eager
  import Header       from "./lib/components/Header.svelte";
  import Nav          from "./lib/components/Nav.svelte";
  import About        from "./lib/components/About.svelte";

  // The rest is loaded lazily — none of it is visible on first paint
  let Section      = null;
  let Contact      = null;
  let CardLightbox = null;
  let dataviz      = [];
  let motion       = [];
  let production   = [];

  const sections = [
    { id: "home",       label: "eh",          nav: true  },
    { id: "about",      label: "",            nav: false },
    { id: "dataviz",    label: "Dataviz",     nav: true  },
    { id: "motion",     label: "Motion",      nav: true  },
    { id: "production", label: "Production",  nav: true  },
    { id: "contact",    label: "Contact",     nav: true  },
  ];

  let active     = "home";
  let sectionEls = [];
  let activeCard = null;
  let rafId;
  let worksReady = false; // true once the lazy chunk has loaded

  function handleOpenCard(e) { activeCard = e.detail; }

  const onScroll = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const current = [...sectionEls].reverse().find(sec => {
        const r = sec.getBoundingClientRect();
        return r.top <= 10;
      })?.id;
      if (current) active = current;
    });
  };

  onMount(() => {
    sectionEls = Array.from(document.querySelectorAll("section[id]"));
    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(() => { window.scrollTo(0, 0); onScroll(); });

    // Lazy-load everything below the fold after the browser is idle
    // (or after a short fallback timeout on browsers without requestIdleCallback)
    const load = async () => {
      const [sectionMod, contactMod, lightboxMod, dataMod] = await Promise.all([
        import("./lib/components/Section.svelte"),
        import("./lib/components/Contact.svelte"),
        import("./lib/components/CardLightbox.svelte"),
        import("./lib/data/projects.js"),
      ]);
      Section      = sectionMod.default;
      Contact      = contactMod.default;
      CardLightbox = lightboxMod.default;
      dataviz      = dataMod.dataviz;
      motion       = dataMod.motion;
      production   = dataMod.production;
      worksReady   = true;
      // Re-query sections now that the works content has mounted
      requestAnimationFrame(() => {
        sectionEls = Array.from(document.querySelectorAll("section[id]"));
      });
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(load, { timeout: 1500 });
    } else {
      setTimeout(load, 200);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  });
</script>

<section id="home"><Header /></section>

<About />

<Nav {sections} {active} />

<div class="works">
  {#if worksReady}
    <svelte:component
      this={Section}
      id="dataviz"
      title="dataviz"
      desc="I wear many hats to bring timely analysis in visual forms: Journalistic to report, vet, write and edit; quantitative to clean and analyze data; design/UX to visualize and tailor user experience; project management to plan, communicate and lead production; and technical to operate the tools needed for each job."
      items={dataviz}
      on:openCard={handleOpenCard}
    />

    <svelte:component
      this={Section}
      id="motion"
      title="motion"
      desc="For section fronts and social platforms, I create visual nut grafs, often using animations, photo illustrations and videos."
      items={motion}
      on:openCard={handleOpenCard}
    />

    <svelte:component
      this={Section}
      id="production"
      title="production"
      desc="I research photos, commission art, design and code custom components and collaborate across teams to produce visually rich narratives that go beyond visualizations."
      items={production}
      on:openCard={handleOpenCard}
    />

    <svelte:component this={Contact} />
  {/if}
</div>

{#if activeCard && CardLightbox}
  <svelte:component
    this={CardLightbox}
    {...activeCard}
    onClose={() => (activeCard = null)}
  />
{/if}
