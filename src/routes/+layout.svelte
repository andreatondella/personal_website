<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();
	let showContactForm = false;
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

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

<footer>
  <div class="footer-container">
    <div class="left-section">
      <div class="squares">
        <!-- LinkedIn Logo with link -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://www.linkedin.com/in/andrea-tondella/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <g transform="matrix(1.00951, 0, 0, 1.00951, 1.967336, 1.967298)" style="">
              <g>
                <path d="M472.366,0.003H18.36C8.219,0.003,0,8.222,0,18.363v454.005c0,10.143,8.219,18.361,18.36,18.361h454.012 c10.142,0,18.36-8.219,18.36-18.361V18.363C490.727,8.222,482.507,0.003,472.366,0.003z M130.375,403.808 c0,6.762-5.478,12.238-12.24,12.238H69.132c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.484-12.24,12.24-12.24h49.003 c6.762,0,12.24,5.477,12.24,12.24V403.808z M130.375,127.482c0,6.763-5.478,12.24-12.24,12.24H69.132 c-6.756,0-12.24-5.478-12.24-12.24V83.969c0-6.763,5.484-12.24,12.24-12.24h49.003c6.762,0,12.24,5.477,12.24,12.24V127.482z M433.835,403.808c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.763,0-12.24-5.477-12.24-12.238v-90.436 c0-29.988-1.566-49.383-4.712-58.189c-3.14-8.807-8.237-15.649-15.3-20.526c-7.062-4.884-15.558-7.32-25.496-7.32 c-12.729,0-24.149,3.488-34.26,10.459c-10.11,6.977-17.038,16.211-20.79,27.717c-3.745,11.506-5.618,32.779-5.618,63.807v74.488 c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.483-12.24,12.24-12.24h43.771 c6.763,0,12.24,5.477,12.24,12.24v16.316c0,6.763,3.312,7.852,7.858,2.852c22.864-25.123,50.753-37.687,83.673-37.687 c16.212,0,31.028,2.919,44.455,8.758c13.422,5.838,23.58,13.292,30.466,22.356c6.885,9.063,11.683,19.351,14.382,30.857 c2.699,11.505,4.058,27.98,4.058,49.426V403.808L433.835,403.808z"/>
              </g>
            </g>
          </svg>
        </a>
        <!-- GitHub Logo with link -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="https://github.com/andreatondella" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.88.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.68.08-.68 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.18-3.1-.12-.3-.52-1.52.1-3.18 0 0 .97-.3 3.18 1.18.92-.26 1.9-.38 2.88-.38.98 0 1.96.12 2.88.38 2.2-1.48 3.18-1.18 3.18-1.18.62 1.66.22 2.88.1 3.18.74.8 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.26 5.7.42.36.76 1.08.76 2.18v3.23c0 .3.2.66.78.55C20.21 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
        </a>
        <!-- Email Logo with link to contact form -->
        <a href="/contact" class="icon-button" aria-label="Contact">
          <svg class="logo logo-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/>
          </svg>
        </a>
      </div>
      <span class="footer-date">© 2025 | <a href="#top" class="no-color-link">Andrea Tondella</a></span>
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
    fill: #222222 !important;
    transition: fill 0.3s ease, transform 0.3s ease;
  }

  .logo:hover {
    fill: #f0d05d !important;
    transform: scale(1.1);
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
