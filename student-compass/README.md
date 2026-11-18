# Student Compass Education website

Next.js 16, React 19, TypeScript and Tailwind CSS v4. Every page is static, so it's fast and free to host on Vercel.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you go live: three edits

All in `src/config/site.ts`:

1. **`bookingFormUrl`**: paste your Google Form link. Every "Book a free session" button uses it.
2. **`contact`**: add your email, phone, WhatsApp number and address. The footer only shows details you fill in.
3. **`logoImage` / `logoWhiteImage`** (optional): put your logo files in `/public` (for example `/public/logo.png` and `/public/logo-white.png`), then set the paths. If you leave these empty, the site uses the built-in compass logo.

Optional: **`bookingFormCourseField`** pre-fills the course name in your Google Form when someone clicks a course's button. In Google Forms, open ⋮ → *Get pre-filled link*, type anything in the course question, then copy the link. Use that full `docs.google.com/forms/.../viewform` link as `bookingFormUrl`, and put the `entry.123456789` part in `bookingFormCourseField`.

## Where the content lives

| What | File |
| --- | --- |
| Courses (title, level, subject, cities, image) | `src/data/courses.ts` |
| Cities (description, map position) | `src/data/cities.ts` |
| All photos | `src/data/media.ts` |
| Resource guides | `src/data/guides.ts` |
| Hero slides | `src/components/HeroSlider.tsx` |
| Why choose us / Our guideline | `src/components/HomeSections.tsx` |

**Add a course:** copy a line in `src/data/courses.ts` and change the details. Course counts on the home page, the city list and the Eligibility page update automatically.

**Use your own photos:** put the file in `/public/images/` and change its entry in `src/data/media.ts`, for example `law: "/images/law.jpg"`. If a photo fails to load, the site shows a brand-coloured panel instead.

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository and click **Deploy**. You don't need to change any settings.
3. In the project, go to **Settings → Domains** and add `studentcompasseducation.com` and `www.studentcompasseducation.com`.
4. Vercel will show you the DNS records to add. In Hostinger, open **Domains → DNS / Nameservers** and add them. The usual records are an `A` record for `@` and a `CNAME` for `www`, but use the exact values Vercel gives you.
5. Wait for DNS to update. This is usually minutes, but can take up to 48 hours. Vercel issues the SSL certificate automatically.

If you use a different domain, change `url` in `src/config/site.ts` so the sitemap and social previews point to it.
