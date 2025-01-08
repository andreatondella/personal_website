<main class="content">
  <h1>Contact Me</h1>
  <form
    action="https://formspree.io/f/mjkkpqan"
    method="POST"
    class="contact-form"
  >
    <div class="form-field">
      <label for="name">Your Name</label>
      <input id="name" name="name" type="text" required />
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required />
      <p class="description">This will help me respond to your query via an email.</p>
    </div>
    <div class="form-field">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      <p class="description">What would you like to discuss?</p>
    </div>
    <div class="button-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</main>

<style>
  .content {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    min-height: calc(100vh - 8rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2em;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: #2c3e50;
    font-weight: 300;
  }

  input, textarea {
    padding: 0.75rem 1rem;
    border: 1px solid #d1d1d1;
    border-radius: 8px;
    font-size: 1rem;
    color: #2c3e50;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #708BDB;
  }

  .description {
    color: #666;
    font-size: 0.9rem;
  }

  .button-group {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  button {
    background-color: #708BDB;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-weight: 300;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #5d74b8;
  }

  @media (max-width: 768px) {
    .content {
      padding: 1rem;
    }

    h1 {
      font-size: 1.75em;
    }

    input, textarea {
      font-size: 16px; /* Prevents iOS zoom on input focus */
    }
  }
</style>
