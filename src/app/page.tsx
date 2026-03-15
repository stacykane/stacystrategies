import { domains } from "./data/threats";
import DomainSection from "./components/domain-section";

const totalThreats = domains.reduce((sum, d) => sum + d.threats.length, 0);
const criticalCount = domains.reduce(
  (sum, d) => sum + d.threats.filter((t) => t.riskLevel === "CRITICAL").length,
  0
);
const veryHighCount = domains.reduce(
  (sum, d) => sum + d.threats.filter((t) => t.riskLevel === "VERY HIGH").length,
  0
);
const highCount = domains.reduce(
  (sum, d) => sum + d.threats.filter((t) => t.riskLevel === "HIGH").length,
  0
);

const totalOrgs = new Set(
  domains.flatMap((d) =>
    d.threats.flatMap((t) => t.organizations.map((o) => o.name))
  )
).size;

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-stone-900 to-stone-950 text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Vision statement */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/50 border border-blue-700/30 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-300 tracking-wide">
                WHAT WE&apos;RE FIGHTING FOR
              </span>
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-blue-100 italic">
              &ldquo;Governments are instituted among Men, deriving their just
              powers from the consent of the governed.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-blue-300/80">
              &mdash; Declaration of Independence, 1776
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-base md:text-lg text-stone-200 leading-relaxed">
                We believe in an America where every eligible citizen can
                safely, easily, and proudly cast their vote to determine the
                future of our country.{" "}
                <span className="text-white font-medium">
                  Free and fair elections are not a partisan issue — they are the
                  foundation of the American experiment.
                </span>
              </p>
              <p className="mt-4 text-sm text-stone-400 leading-relaxed">
                As Abraham Lincoln reminded us at Gettysburg:{" "}
                <em className="text-stone-300">
                  &ldquo;Government of the people, by the people, for the people,
                  shall not perish from the earth.&rdquo;
                </em>{" "}
                And as Dr. King declared:{" "}
                <em className="text-stone-300">
                  &ldquo;So long as I do not firmly and irrevocably possess the
                  right to vote I do not possess myself.&rdquo;
                </em>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-white/10" />

          {/* Threat overview */}
          <div>
            <p className="text-red-400 font-mono text-sm tracking-widest uppercase mb-4">
              THREAT ASSESSMENT &mdash; MARCH 2026
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              The Threats to the 2026
              <br />
              Midterm Elections
            </h1>
            <p className="mt-4 text-base md:text-lg text-stone-300 max-w-2xl leading-relaxed">
              {totalThreats} documented threats across {domains.length} domains.
              Who is already fighting back. And critically:{" "}
              <span className="text-white font-medium">
                where the gaps are — what still needs to be done.
              </span>
            </p>
            <p className="mt-3 text-xs text-stone-500">
              Sources: Brennan Center, NPR, PolitiFact, Democracy Docket,
              Votebeat, The Atlantic, CBS News, CNN, PNAS, Voting Rights Lab,
              and others. Compiled March 2026.
            </p>
          </div>

          {/* Risk level pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-red-900/30 border border-red-700/30 px-4 py-2">
              <span className="w-3 h-3 rounded-full bg-red-700" />
              <span className="text-sm font-medium">{criticalCount} Critical</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-red-800/20 border border-red-600/30 px-4 py-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm font-medium">{veryHighCount} Very High</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-orange-800/20 border border-orange-600/30 px-4 py-2">
              <span className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium">{highCount} High</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-blue-800/20 border border-blue-600/30 px-4 py-2">
              <span className="text-sm font-medium text-blue-300">
                {totalOrgs}+ organizations tracked
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur-lg border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {domains.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors whitespace-nowrap"
              >
                <span className="hidden sm:inline">{d.number}. </span>
                {d.title}
              </a>
            ))}
            <a
              href="#take-action"
              className="ml-2 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors whitespace-nowrap"
            >
              Take Action
            </a>
          </div>
        </div>
      </nav>

      {/* Domains */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
        {domains.map((domain) => (
          <DomainSection key={domain.id} domain={domain} />
        ))}

        {/* Take Action */}
        <section id="take-action" className="scroll-mt-20">
          <div className="rounded-2xl bg-gradient-to-br from-blue-950 to-stone-900 text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Where You Can Step In
            </h2>
            <p className="text-stone-300 text-base mb-8 max-w-2xl">
              The gaps above aren&apos;t abstract — they represent specific places
              where people, organizations, and funders can make a measurable
              difference before November 2026.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="text-lg font-bold text-red-400 mb-4">
                  Money Needed Now
                </h3>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li className="flex gap-2">
                    <span className="text-red-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Join &ldquo;All by April&rdquo;</strong> &mdash; funders
                      must commit election grants before April 2026. 85% of
                      funders had no plan as of fall 2025.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Fund cybersecurity</strong> for local election offices
                      abandoned by CISA. Rural counties are completely exposed.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400 mt-0.5">&#x2192;</span>
                    <span>
                      Close the <strong className="text-white">$165M+ grassroots ground-game shortfall</strong>{" "}
                      in battleground states.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400 mt-0.5">&#x2192;</span>
                    <span>
                      Fund <strong className="text-white">Spanish-language fact-checking</strong> &mdash; the most
                      underserved front in the disinformation war.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400 mt-0.5">&#x2192;</span>
                    <span>
                      Fund <strong className="text-white">local journalism</strong> in the 2,500+ news
                      deserts where no one is watching election administration.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-4">
                  Legal Action Needed
                </h3>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Private litigation must replace collapsed DOJ
                      enforcement</strong> &mdash; organizations like Democracy Docket and Campaign
                      Legal Center need funding now.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Pre-position legal teams</strong> for certification
                      refusals and federal interference attempts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-0.5">&#x2192;</span>
                    <span>
                      Challenge <strong className="text-white">aggressive voter purges</strong> and
                      proof-of-citizenship requirements that disenfranchise
                      eligible voters.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400 mt-0.5">&#x2192;</span>
                    <span>
                      Push <strong className="text-white">state-level Voting Rights Acts</strong> &mdash; only 8
                      states have them. Southern states need them most.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">
                  People Power Needed
                </h3>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li className="flex gap-2">
                    <span className="text-green-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Become a poll worker</strong> &mdash; 48% of
                      jurisdictions report shortages. Your county needs you.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Train as an election observer</strong> to provide
                      nonpartisan oversight at your local polling place.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400 mt-0.5">&#x2192;</span>
                    <span>
                      <strong className="text-white">Protect election officials</strong> &mdash; support
                      anti-doxxing legislation and report threats.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400 mt-0.5">&#x2192;</span>
                    <span>
                      Build <strong className="text-white">media literacy</strong> in your community &mdash;
                      especially for those targeted by AI deepfakes and
                      non-English disinformation.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400 mt-0.5">&#x2192;</span>
                    <span>
                      Call <strong className="text-white">866-OUR-VOTE</strong> to report voter
                      intimidation or suppression at any polling place.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-stone-400 italic">
                &ldquo;Let each citizen remember at the moment he is offering
                his vote that he is not making a present or a compliment to
                please an individual &mdash; but that he is executing one of the
                most solemn trusts in human society for which he is accountable
                to God and his country.&rdquo;
              </p>
              <p className="mt-2 text-xs text-stone-500">
                &mdash; Samuel Adams, c. 1781
              </p>
            </div>
          </div>
        </section>

        {/* Risk Level Key */}
        <section className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 md:p-8">
          <h2 className="text-lg font-bold mb-4 text-stone-900 dark:text-stone-100">
            Risk Level Key
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-red-700 flex-shrink-0" />
              <p>
                <strong className="text-stone-900 dark:text-stone-100">Critical</strong>
                <span className="block text-xs text-stone-500 mt-0.5">
                  Active, structural threat with immediate impact
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-red-500 flex-shrink-0" />
              <p>
                <strong className="text-stone-900 dark:text-stone-100">Very High</strong>
                <span className="block text-xs text-stone-500 mt-0.5">
                  Documented pattern with imminent threat
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-orange-500 flex-shrink-0" />
              <p>
                <strong className="text-stone-900 dark:text-stone-100">High</strong>
                <span className="block text-xs text-stone-500 mt-0.5">
                  Demonstrated capability and stated intent
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-amber-500 flex-shrink-0" />
              <p>
                <strong className="text-stone-900 dark:text-stone-100">Medium-High</strong>
                <span className="block text-xs text-stone-500 mt-0.5">
                  Likely given historical pattern
                </span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-stone-400">
            Based on publicly reported actions, statements, and expert analysis as of March 2026.
            Risk levels reflect both likelihood and potential impact on democratic processes.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="md:flex md:items-start md:justify-between">
            <div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                Stacy Strategies
              </p>
              <p className="mt-1 text-xs text-stone-400 max-w-md">
                Compiled March 2026 from public sources. Every threat listed
                includes clickable source links so you can verify the evidence
                yourself. Click any card to see the full picture.
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-xs text-stone-400 italic max-w-xs">
                &ldquo;It was we, the people; not we, the white male citizens;
                nor yet we, the male citizens; but we, the whole people, who
                formed the Union.&rdquo;
              </p>
              <p className="mt-1 text-xs text-stone-500">
                &mdash; Susan B. Anthony, 1873
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
