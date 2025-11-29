"use client";

import React, { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      id: "q1",
      q: "How do I create an account?",
      a: `You can create an account in just a few steps using your email. Once you're signed in, you can browse contractors, request services, and manage your bookings.`,
    },
    {
      id: "q2",
      q: "Who are the contractors on the platform?",
      a: `Contractors are verified service professionals offering a variety of trades such as HVAC, Plumbing, Electrical, Roofing, Painting, Landscaping and more. Each contractor has a public profile showing their experience, services, pricing and customer reviews.`,
    },
    {
      id: "q3",
      q: "How do I find the right contractor?",
      a: `You can explore contractor profiles, compare their services, check their experience, view highlights like same-day service or emergency support, and read past customer reviews to help you choose the best match.`,
    },
    {
      id: "q4",
      q: "How do bookings work?",
      a: `When you select a contractor, you can request a booking for the date and time you need. The contractor reviews your request and can accept or decline. Once accepted, you'll be able to track all the appointment details in your account.`,
    },
    {
      id: "q5",
      q: "What is an application?",
      a: `An application is when you reach out to a contractor with details about your job and request a quote or consultation. Contractors respond by reviewing your request and getting back to you with next steps.`,
    },
    {
      id: "q6",
      q: "What are contractor amenities and highlights?",
      a: `These are helpful tags that show what each contractor offers. Amenities describe things like free inspections, warranty options or flexible scheduling. Highlights show strengths such as licensed professionals, eco-friendly service, same-day availability and more.`,
    },
    {
      id: "q7",
      q: "Can I save contractors I like?",
      a: `Yes! You can save contractors to your favorites so you can quickly find them later without searching again.`,
    },
    {
      id: "q8",
      q: "Can I interact with posts or follow people?",
      a: `Yes. You can view posts shared by users, follow accounts you like, and interact by liking or saving posts to revisit them later.`,
    },
    {
      id: "q9",
      q: "What types of services can I request?",
      a: `You can request work from many different trades — from home repairs and installations to landscaping, painting, electrical work and more. Each contractor lists the specific services they provide so you know exactly what to expect.`,
    },
    {
      id: "q10",
      q: "Who are the managers on the platform?",
      a: `Managers are individuals who oversee contractor accounts and ensure listings stay accurate and up to date. They may assist contractors with profile details and approvals.`,
    },
    {
      id: "q11",
      q: "How do ratings and reviews work?",
      a: `After completing a job, customers can leave a rating and review based on their experience. These help other users make informed decisions when choosing a contractor.`,
    },
    {
      id: "q12",
      q: "Can I view my past bookings?",
      a: `Yes. All your previous bookings stay available in your account so you can review details, request repeat services or reference past work.`,
    },
    {
      id: "q13",
      q: "What if I need help or have an issue?",
      a: `You can contact support anytime through the help section. Provide a short description of your issue and someone from our team will assist you as soon as possible.`,
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="mb-6 bg-gray-50 p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Quick answers to help you get the most out of our service.
          </p>
        </header>

        <main className="space-y-4">
          {faqs.map((f) => (
            <div
              key={f.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                aria-expanded={openId === f.id}
                onClick={() => toggle(f.id)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-500"
              >
                <span className="text-md font-medium text-gray-900">{f.q}</span>
                <span className="ml-4 text-gray-500">
                  {openId === f.id ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-4 pb-4 transition-all duration-200 ease-in-out ${
                  openId === f.id ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-700 text-sm">{f.a}</p>
              </div>
            </div>
          ))}
        </main>

        <footer className="mt-12 text-sm text-gray-500">
          <p>
            If you need help with anything not answered here, feel free to reach
            out to support anytime.
          </p>
        </footer>
      </div>
    </div>
  );
}
