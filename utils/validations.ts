export const contactRules = {
  name: [
    (v: string) => !!v?.trim() || "Name is required.",
    (v: string) =>
      v?.trim().length <= 100 || "Name must not exceed 100 characters.",
  ],

  email: [
    (v: string) => !!v?.trim() || "Email is required.",
    (v: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "") ||
      "Please enter a valid email address.",
  ],

  subject: [
    (v: string) => !!v?.trim() || "Subject is required.",
    (v: string) =>
      v?.trim().length <= 150 || "Subject must not exceed 150 characters.",
  ],

  message: [
    (v: string) => !!v?.trim() || "Message is required.",
    (v: string) =>
      v?.trim().length >= 10 || "Message must be at least 10 characters.",
    (v: string) =>
      v?.trim().length <= 5000 || "Message must not exceed 5000 characters.",
  ],
};
