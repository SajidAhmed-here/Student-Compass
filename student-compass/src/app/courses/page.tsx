import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { pageImages } from "@/data/media";
import { CourseBrowser } from "@/components/CourseBrowser";
import { BookButton } from "@/components/BookButton";
import { ClosingCta } from "@/components/HomeSections";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Foundation year degrees, HNDs, foundation degrees, top-ups and master's courses in London, Manchester, Birmingham, Leeds and more.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Courses"
        lede={`${courses.length} courses across ten UK cities and online. Found one you like? Book a free session and we'll help you check your eligibility and apply.`}
        image={{ src: pageImages.courses, alt: "A modern university lecture theatre" }}
      >
        <BookButton size="lg" />
      </PageHeader>
      <Suspense fallback={<div className="mx-auto h-96 max-w-7xl" />}>
        <CourseBrowser />
      </Suspense>
      <ClosingCta
        title="Can't see the course you want?"
        text="Courses and campuses change by intake. Book a free session and we'll tell you what's open now."
      />
    </>
  );
}
