import InquiryModalButton from "@/components/InquiryModalButton";

export default function HomeQuoteModal() {
  return (
    <section className="relative overflow-hidden border-y border-violet/10 bg-gradient-to-br from-violet-50 via-white to-[#E6F7FB] py-10 dark:from-[#171426] dark:via-[#12101c] dark:to-[#101a24] sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:34px_34px] opacity-70" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-violet/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-violet/10 to-transparent" />
      <div className="pointer-events-none absolute right-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#34E0F0]/25 blur-3xl" />
      <div className="container-x relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-none text-lg font-extrabold leading-snug text-charcoal sm:whitespace-nowrap sm:text-xl lg:text-2xl">
          Ask for a <span className="heading-gradient">Proposal</span> - fill out a simple form and we will get back to you
        </h2>
        <InquiryModalButton
          label="Get Free Quote"
          showArrow
          className="btn-primary btn-glow shrink-0"
        />
      </div>
    </section>
  );
}
