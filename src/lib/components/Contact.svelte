<script>
  export let action = "https://formspree.io/f/xeenjjza/";

  let submitted = false;
  let errors = {};

  function validate(form) {
    const e = {};
    if (!form.name.value.trim())    e.name    = "What would you like to be called?";
    if (!form.email.value.trim())   e.email   = "Where do I send my reply?";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)) 
                                    e.email   = "Check the formatting of your email address. Does it contain an @ symbol or a domain?";
    if (!form.subject.value.trim()) e.subject = "Briefly, what is this about?";
    if (!form.message.value.trim()) e.message = "What’s on your mind?";
    return e;
  }

  let error = false;

  async function handleSubmit(e) {
    e.preventDefault();
    error = false;
    const form = e.target;
    
    // Validate ONLY on submit, not on every keystroke
    errors = validate(form);
    
    // Stop if there are errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    const data = new FormData(form);

    try {
      const res = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        submitted = true;
        form.reset();
        errors = {};
      } else {
        error = true;
      }
    } catch {
      error = true;
    }
  }
</script>

<section id="contact">
  <div class="container">
    <p class="intro">
      Find me on <a href="https://www.linkedin.com/in/heelaine" target="_blank" rel="noopener noreferrer">LinkedIn</a> or write.
    </p>

    <div class="form-card">
      {#if submitted}
        <p class="success">Thanks! I’ll be in touch soon.</p>
      {:else if error}
        <p class="error">Something went wrong. Please email me directly at heelaine.work@gmail.com.</p>
      {:else}
        <form on:submit={handleSubmit} novalidate>
          {#if errors.name}<span class="submit-error">{errors.name}</span>{/if}
          <input
            placeholder="Name"
            name="name"
            class:invalid={errors.name}
          />

          {#if errors.email}<span class="submit-error">{errors.email}</span>{/if}
          <input
            placeholder="Email"
            name="email"
            type="email"
            class:invalid={errors.email}
          />

          {#if errors.subject}<span class="submit-error">{errors.subject}</span>{/if}
          <input
            placeholder="Subject"
            name="subject"
            class:invalid={errors.subject}
          />

          {#if errors.message}<span class="submit-error">{errors.message}</span>{/if}
          <textarea
            placeholder="Message"
            name="message"
            class:invalid={errors.message}
          ></textarea>

          <button type="submit">Send</button>
        </form>
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    padding: var(--space-xl) 0;
    background: var(--deepsea);
    min-height: 100svh;
    align-content: center;
    scroll-margin-top: 40px;
  }

  .intro {
    color: var(--milk);
    text-align: center;
    margin-bottom: var(--space-lg);
    line-height: 1.6;
  }

  .intro a {
    display: inline;
    background: none;
    color: var(--lime);
    font-family: var(--font-body);
    text-transform: none;
    font-size: inherit;
    font-weight: var(--wght-medium);
    transition: color 0.2s ease;
  }

  .intro a:hover {
    background: none;
    font-weight: var(--wght-bold);
  }

  .form-card {
    max-width: 540px;
    margin: 0 auto;
  }

  input,
  textarea {
    width: 100%;
    font-family: var(--font-body);
    font-size: 1rem;
    padding: 14px;
    border: 3px solid var(--milk);
    border-radius: var(--radius-sm);
    background: var(--milk);
    color: var(--deepsea);
    outline: none;
    transition: border-color 0.2s ease;
    margin-bottom: 14px;
    display: block;
  }

  ::placeholder {
    color: var(--storm);
    font-size: 0.9rem;
  }

  input:focus,
  textarea:focus {
    border: 2px solid var(--deepsea);
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    width: 100%;
    margin-top: var(--space-md);
    padding: 14px 0;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: var(--wght-medium);
    text-transform: uppercase;
    border-radius: var(--radius-sm);
    border: none;
    background: var(--deepsea);
    color: var(--close-bg);
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button:hover {
    background: var(--close-bg);
    color: var(--close-fg);
  }

  .error,
  .success {
    text-align: center;
    padding: var(--space-lg) 0;
    color: var(--lime);
    font-weight: var(--wght-medium);
    font-size: 2rem;
  }
  
  .submit-error {
    color: var(--lime);
    font-size: 0.8rem;
    font-weight: var(--wght-regular);
  }
</style>