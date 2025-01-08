<main class="content">
  <h1 id="top"><strong>Hi there! 👋</strong><br>My name is Andrea <strong>Tondella</strong>.<br>I am a <strong class="highlight">data analyst</strong> based in<br>Dublin, Ireland.</h1>
</main>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 8rem); /* viewport height minus header and footer space */
    padding: 2rem;
  }

  h1 {
    color: #2c3e50;
    font-size: 2.5em;
    line-height: 1.4;
    text-align: center;
    max-width: 800px;
    font-weight: 400;  /* Normal weight for base text */
  }

  h1 strong {
    font-weight: 700;  /* Bold weight for emphasized text */
  }

  .highlight {
    color: #708BDB;
  }

  @media (max-width: 768px) {
    .content {
      min-height: calc(100vh - 7rem);  /* Reduced from 8rem */
      padding: 1.5rem;  /* Reduced from 2rem */
    }

    h1 {
      font-size: 2em;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.75em;
    }
  }
</style>