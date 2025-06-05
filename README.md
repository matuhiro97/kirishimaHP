# HP
ブログだったりポートフォリオだったりする予定

## Contact Form Setup

The Google Form URL used on the contact page is configured through an
environment variable. Create a `.env` file inside `my-react-app` with the
following entry:

```bash
VITE_CONTACT_FORM_URL="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
```

Replace the URL with your actual form URL. Vite exposes environment variables
prefixed with `VITE_` to the client application during build.
