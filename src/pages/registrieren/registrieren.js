import supabaseClient from "../../services/supabase-cient.js";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email-input");
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = emailInput.value;

    try {
      if (!supabaseClient || typeof supabaseClient.from !== 'function') {
        console.error('Supabase client is not available.');
        document.getElementById('success-message').textContent =
          'Dienst ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.';
        return;
      }

      const { data, error } = await supabaseClient
        .from('pre_registration_emails')
        .insert([{ email: email }]);
      if (error) {
        throw error;
      }
      document.getElementById('success-message').textContent =
        'Vielen Dank für Ihre Registrierung!';
    } catch (error) {
      console.error('Fehler beim Registrieren:', error);
      document.getElementById('success-message').textContent =
        'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
    }
  });
});
