import { getElement } from "./utils";

function init(): void {
  const FORM = getElement<HTMLFormElement>("#newsletter-form");
  const EMAIL_FIELD = getElement<HTMLInputElement>("#email", FORM);
  const EMAIL_ERROR_FIELD = getElement<HTMLSpanElement>("#email-error", FORM);
  const SUBSCRIBE_PAGE = getElement<HTMLDivElement>("#subscribe-page");
  const SUCCESS_PAGE = getElement("#success-page");
  const USER_EMAIL_LINK = getElement<HTMLLinkElement>(
    "#user-email",
    SUCCESS_PAGE
  );
  const DISMISS_BUTTON = getElement<HTMLButtonElement>("#dismiss-button");

  FORM.addEventListener("submit", function (event) {
    event.preventDefault();

    if (this.checkValidity()) {
      console.log("Form id valid.");
      EMAIL_FIELD.classList.remove("field--error");
      EMAIL_ERROR_FIELD.textContent = "";

      USER_EMAIL_LINK.textContent = EMAIL_FIELD.value;

      SUBSCRIBE_PAGE.classList.replace("lg:flex", "hidden");
      SUCCESS_PAGE.classList.replace("hidden", "grid");
    } else {
      EMAIL_FIELD.classList.add("field--error");

      const { typeMismatch, valueMissing } = EMAIL_FIELD.validity;

      let message = "";

      if (valueMissing) {
        message = "Email required";
      } else if (typeMismatch) {
        message = "Valid email required";
      }

      EMAIL_ERROR_FIELD.textContent = message;
    }
  });

  DISMISS_BUTTON.addEventListener("click", function () {
    console.log("Success page dismissed.");
    SUBSCRIBE_PAGE.classList.replace("hidden", "lg:flex");
    SUCCESS_PAGE.classList.replace("grid", "hidden");
  });
}

init();
