<script lang="ts">
	import '../app.css';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';
	let { children } = $props();
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<header>
  <nav>
    <img src="/personal_logo.svg" alt="Personal logo" class="nav-logo" />
    <ul>
      <li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
      <li><a href="/resume" class:active={$page.url.pathname === '/resume'}>Resume</a></li>
      <li><a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a></li>
    </ul>
  </nav>
</header>

{@render children()}

<footer>
  <div class="footer-container">
    <div class="left-section">
      <div class="squares">
        <a href="https://www.linkedin.com/in/andrea-tondella/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img class="logo" src="/linkedin_logo.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/andreatondella" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img class="logo" src="/github_logo.svg" alt="GitHub" />
        </a>
        <a href="/contact" aria-label="Contact">
          <img class="logo logo-email" src="/email.svg" alt="Contact" />
        </a>
      </div>
      <span class="footer-date">© {new Date().getFullYear()} | <a href="#top" class="no-color-link">Andrea Tondella</a></span>
    </div>
    <span>Designed and built by <a href="#top">Andrea Tondella</a> with ♥️ using <a href="https://kit.svelte.dev/" class="external-link">SvelteKit</a></span>
  </div>
</footer>

<style>
  /* Move all the header, footer, and global styles here */
  /* ...existing header styles... */
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: white;  /* Changed from transparent to white */
    z-index: 100;
  }

  nav {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    width: 40px;
    height: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  nav a {
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.1em;
    position: relative;
    padding-bottom: 2px;
    cursor: pointer;
  }

  nav a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  nav a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  nav a:hover::after {
    background-color: #f0d05d; /* theme yellow */
  }

  nav a.active::after {
    background-color: #708BDB; /* theme blue */
  }

  /* ...existing footer styles... */
  footer {
    margin-top: auto;
    padding: 1em;
    background-color: #f0f0f0;
    width: 100%;
    text-align: left;
    font-size: 1em;
    color: #555;
  }

  .footer-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .squares {
    display: flex;
    gap: 0.5em;
  }

  .logo {
    width: 30px;
    height: 30px;
    object-fit: contain;
    object-position: center;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.1);
    filter: brightness(0) saturate(100%) invert(83%) sepia(40%) saturate(500%) hue-rotate(5deg) brightness(100%);
  }

  .logo-email {
    width: 35px;
    height: 35px;
  }

  .footer-container span {
    font-size: 0.9em;
  }

  .no-color-link {
    color: inherit;
    text-decoration: none;
  }

  .no-color-link:hover {
    text-decoration: underline;
  }

  .footer-date {
    margin-top: 0.7em;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .external-link {
    color: #3498db; /* Modern light blue color */
  }

  /* ...rest of the existing footer styles... */
  /* Include all the other footer-related styles from the original file */

  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }

  :global(.content) {
    flex: 1;
    padding-top: 5.5rem;  /* Increased from 4rem to 5.5rem for more space */
  }

  @media (max-width: 768px) {
    header {
      padding: 0.75rem;  /* Reduced from 1rem */
    }

    :global(.content) {
      padding-top: 5rem;  /* Increased from 3.5rem to 5rem for mobile */
    }

    footer {
      padding: 0.75em;  /* Reduced from 1em */
    }

    nav {
      padding: 0 1rem;
    }

    ul {
      gap: 1rem;
    }

    nav a {
      font-size: 1em;
    }

    .footer-container {
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .nav-logo {
      width: 35px;
      height: 35px;
    }

    ul {
      gap: 0.8rem;
    }

    .logo {
      width: 25px;
      height: 25px;
    }

    .logo-email {
      width: 30px;
      height: 30px;
    }
  }
</style>
