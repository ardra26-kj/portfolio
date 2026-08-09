import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiSend, FiLoader } from "react-icons/fi";

const initialState = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("loading");
    try {
      // Replace with a real endpoint (e.g. Formspree, a serverless function, etc.)
      // Never call third-party APIs with a secret key directly from the frontend.
      await new Promise((resolve, reject) =>
        setTimeout(() => (Math.random() > 0.1 ? resolve() : reject()), 1200)
      );
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  const fieldClasses = (hasError) =>
    `focus-ring w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-muted/60 transition-colors duration-300 ${
      hasError ? "border-red-400/60" : "border-border focus:border-teal/60"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClasses(errors.name)}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClasses(errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClasses(errors.message)} resize-none`}
          placeholder="Tell me a little about the opportunity or project..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === "loading"}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-teal px-6 py-3 text-sm font-semibold text-[#0b0e14] transition-opacity duration-300 disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <FiLoader className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <FiSend /> Send Message
          </>
        )}
      </motion.button>

      {status === "success" && (
        <p role="status" className="flex items-center gap-2 text-sm text-teal">
          <FiCheckCircle /> Thanks! Your message has been sent — I&apos;ll reply soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
          <FiAlertCircle /> Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
