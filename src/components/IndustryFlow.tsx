"use client";

import { motion } from "framer-motion";

const INPUTS = ["Users & Teams", "Customers", "Channels & Devices"];
const OUTPUTS = ["Analytics & Insights", "Live Dashboards", "Reports & Integrations"];

// Total connectors, used to time a "current" that cascades through the pipeline.
const STAGE_GAP = 0.45;

/** Animated connector: the line itself flows (dashes) and a comet runs down it. */
function FlowLine({ label, index }: { label: string; index: number }) {
  return (
    <div className="relative mx-auto h-16 w-8">
      <svg className="absolute inset-0 mx-auto h-full w-full" viewBox="0 0 8 64" preserveAspectRatio="none">
        <line x1="4" y1="0" x2="4" y2="64" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        <motion.line
          x1="4" y1="0" x2="4" y2="64"
          stroke="#34E0F0" strokeWidth="2" strokeLinecap="round"
          strokeDasharray="5 11"
          style={{ filter: "drop-shadow(0 0 3px rgba(52,224,240,0.7))" }}
          animate={{ strokeDashoffset: [0, -32] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* comet, timed so the current flows stage-by-stage down the whole pipeline */}
      <motion.span
        className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(52,224,240,0.85)]"
        animate={{ y: [0, 64], opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeIn", delay: index * STAGE_GAP, repeatDelay: STAGE_GAP * 4 }}
      />

      <span className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-white/45">
        {label}
      </span>
      <motion.svg
        className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 text-[#34E0F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: index * STAGE_GAP }}
      ><path d="m6 9 6 6 6-6" /></motion.svg>
    </div>
  );
}

function Stage({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative text-center">
      <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-200">
        {label}
      </span>
      <div className="mt-3">{children}</div>
    </div>
  );
}

const reveal = {
  initial: { opacity: 0, y: 16, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-50px" },
};

export default function IndustryFlow({
  name,
  modules,
}: {
  name: string;
  modules: string[];
}) {
  const nodes = modules.slice(0, 6);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 text-white sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:32px_32px] opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl">
        {/* 1 — Inputs */}
        <Stage label="Input · Data Sources">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {INPUTS.map((s, i) => (
              <motion.div key={s} {...reveal} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3">
                <svg className="h-4 w-4 text-[#34E0F0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v9m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></svg>
                <span className="text-xs font-semibold text-white/85">{s}</span>
              </motion.div>
            ))}
          </div>
        </Stage>

        <FlowLine label="data in" index={0} />

        {/* 2 — Core platform (process) */}
        <Stage label="Process · ERP Engine">
          <motion.div {...reveal} transition={{ duration: 0.5 }}
            className="relative mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet to-violet-700 px-6 py-5 shadow-glow">
            <motion.span className="absolute -inset-2 rounded-[1.4rem] border border-violet/40"
              animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.06, 1] }} transition={{ duration: 2.6, repeat: Infinity }} />
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/15">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="6" width="12" height="12" rx="2.5" /><circle cx="12" cy="12" r="2.2" /><path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" /></svg>
            </span>
            <div className="relative text-left">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">Core Platform</p>
              <p className="text-sm font-extrabold leading-tight">{name} ERP Engine</p>
            </div>
          </motion.div>
        </Stage>

        <FlowLine label="modules" index={1} />

        {/* 3 — Modules */}
        <Stage label="Operate · Connected Modules">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nodes.map((m, i) => (
              <motion.div key={m} {...reveal} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 transition-all duration-300 hover:border-[#34E0F0]/50 hover:bg-white/[0.1]">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#34E0F0]/15 text-[11px] font-extrabold text-[#34E0F0]">{i + 1}</span>
                <span className="text-left text-[11px] font-semibold leading-tight text-white/90">{m}</span>
              </motion.div>
            ))}
          </div>
        </Stage>

        <FlowLine label="stored" index={2} />

        {/* 4 — Unified database (store) */}
        <Stage label="Store · Single Source of Truth">
          <motion.div {...reveal} transition={{ duration: 0.5 }}
            className="relative mx-auto flex max-w-xs items-center justify-center gap-3 rounded-2xl border border-[#34E0F0]/25 bg-white/5 px-6 py-4 backdrop-blur">
            <span className="pointer-events-none absolute -inset-3 rounded-3xl bg-[#34E0F0]/10 blur-2xl" />
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-[#34E0F0]/15 text-[#34E0F0]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>
            </span>
            <p className="relative text-sm font-extrabold text-white">Unified Database</p>
          </motion.div>
        </Stage>

        <FlowLine label="insights" index={3} />

        {/* 5 — Outputs (deliver) */}
        <Stage label="Deliver · Insights & Action">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {OUTPUTS.map((s, i) => (
              <motion.div key={s} {...reveal} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3">
                <svg className="h-4 w-4 text-violet-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16v-5M13 16V8M18 16v-3" /></svg>
                <span className="text-xs font-semibold text-white/85">{s}</span>
              </motion.div>
            ))}
          </div>
        </Stage>
      </div>
    </div>
  );
}
