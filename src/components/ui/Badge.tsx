type Tone = "neutral" | "success" | "brand";

const tones: Record<Tone, string> = {
  neutral: "bg-paper-tint text-ink-soft",
  success: "bg-success/10 text-success",
  brand: "bg-lilac/15 text-ink",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
