export type GuideSection = { heading: string; paragraphs?: string[]; list?: string[] };

export type Guide = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingMinutes: number;
  sections: GuideSection[];
  tip?: string;
};

export const guides: Guide[] = [
  {
    slug: "understanding-entry-requirements",
    category: "Entry requirements",
    title: "Understanding university entry requirements",
    summary:
      "What a course page is really telling you, and which details only the university can confirm.",
    readingMinutes: 4,
    sections: [
      {
        heading: "Who sets entry requirements?",
        paragraphs: [
          "Each university sets its own requirements, often course by course. Two courses with similar titles at different universities can ask for quite different things.",
          "Requirements can also change from one intake to the next, so always check the details for the year you want to start.",
        ],
      },
      {
        heading: "What they usually cover",
        list: [
          "Academic qualifications: the level and grades the university normally expects.",
          "Subject requirements: some courses need particular subjects, such as maths for computing.",
          "English language: which tests or qualifications the university accepts, and the scores it asks for.",
          "Extra steps: some courses ask for a personal statement, an interview, a short assessment or work experience.",
        ],
      },
      {
        heading: "Qualifications from outside the UK",
        paragraphs: [
          "Many universities explain how they consider qualifications from other countries. If you studied outside the UK, tell us what you studied, where and when, and we'll find out how the university treats it.",
        ],
      },
      {
        heading: "English language and visas are separate questions",
        paragraphs: [
          "The English level a university accepts for admission and the rules for a student visa are not always the same. Visa rules are set by the UK government, not by universities or by us. Check the official guidance on GOV.UK.",
        ],
      },
      {
        heading: "Where to find official information",
        list: [
          "The university's own course page and admissions team",
          "GOV.UK for student visa and student finance guidance",
          "UCAS, for many undergraduate applications",
        ],
      },
    ],
    tip: "When you ask about a course, give the name of your qualification, the year you finished it and your result as it appears on your certificate. It saves a round of back-and-forth.",
  },
  {
    slug: "choosing-your-study-level",
    category: "Choosing a course",
    title: "Foundation year, HND, top-up or master's?",
    summary: "How the main study levels differ, and which might fit where you are now.",
    readingMinutes: 5,
    sections: [
      {
        heading: "Start from where you are, not the course title",
        paragraphs: [
          "The right level depends on the qualifications you already have and how you want to study. The same subject, such as business management, is often available at several levels.",
        ],
      },
      {
        heading: "Degree with a foundation year",
        paragraphs: [
          "An honours degree with an extra year at the start. The foundation year builds your study skills and subject knowledge, so it suits students without A-levels or who have been out of education for a while. Usually four years full-time.",
        ],
      },
      {
        heading: "HND and foundation degree",
        paragraphs: [
          "Shorter, career-focused qualifications, usually two years full-time. Both can lead on to a top-up degree, so you can stop with a recognised qualification or carry on to a full honours degree.",
        ],
      },
      {
        heading: "Top-up degree",
        paragraphs: [
          "If you already have an HND, a foundation degree or a similar qualification, a top-up adds the final year of an honours degree. Usually one year full-time, in a related subject.",
        ],
      },
      {
        heading: "Master's degree",
        paragraphs: [
          "Postgraduate study for people who already have a degree, and sometimes for those with strong work experience. Usually one year full-time on campus. Online master's courses are part-time, so you can fit study around work.",
        ],
      },
      {
        heading: "Questions to ask yourself",
        list: [
          "What's the highest qualification I have now, and when did I get it?",
          "Do I want a full degree, or a shorter qualification first?",
          "How many days a week can I study, and in which city?",
          "Where do I want this course to take me?",
        ],
      },
    ],
    tip: "Not sure which level you're at? Bring your certificates' details to your free session and we'll work it out with you.",
  },
  {
    slug: "preparing-for-your-free-session",
    category: "Getting started",
    title: "Getting the most from your free session",
    summary: "What we'll talk about, what to have ready, and what happens afterwards.",
    readingMinutes: 3,
    sections: [
      {
        heading: "What we'll cover",
        list: [
          "Your goals: the subject, career or qualification you're aiming for",
          "Your background: qualifications, work experience and circumstances",
          "Your options: the routes, courses and cities that fit",
          "Next steps: what applying involves and how we can help",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: [
          "You don't need to send any documents beforehand. It helps to know the names of your qualifications, your grades and when you finished them, plus a rough idea of any work experience.",
        ],
      },
      {
        heading: "Questions worth asking",
        list: [
          "What are the entry requirements for this course, and do I meet them?",
          "When does the next intake start, and when should I apply?",
          "What are the fees, and what support with funding might be available to me?",
          "What does a typical week of study look like?",
        ],
      },
      {
        heading: "After the session",
        paragraphs: [
          "If you decide to apply, we'll help you prepare your application and personal statement. If you'd like more time to think, that's fine too.",
        ],
      },
    ],
  },
];

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g])) as Record<string, Guide>;
