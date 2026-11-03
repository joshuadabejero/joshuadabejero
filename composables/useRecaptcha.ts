interface RecaptchaAPI {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

declare global {
  interface Window {
    grecaptcha: RecaptchaAPI;
  }
}

let scriptPromise: Promise<void> | null = null;

export const useRecaptcha = () => {
  const config = useRuntimeConfig();
  const siteKey = config.public.recaptchaSiteKey;

  const loadScript = async (): Promise<void> => {
    if (typeof window === "undefined") {
      throw new Error("reCAPTCHA requires a browser.");
    }

    if (window.grecaptcha) return;

    if (!scriptPromise) {
      scriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");

        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => {
          scriptPromise = null;
          reject(new Error("Failed to load reCAPTCHA."));
        };

        document.head.appendChild(script);
      });
    }

    await scriptPromise;
  };

  const getToken = async (action = "contact"): Promise<string> => {
    if (!siteKey) {
      throw new Error("Missing reCAPTCHA site key.");
    }

    await loadScript();

    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(siteKey, {
            action,
          });

          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  return { getToken };
};
