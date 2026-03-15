export interface Organization {
  name: string;
  url: string;
  description: string;
}

export interface Threat {
  id: string;
  title: string;
  description: string;
  evidence: string[];
  sources: { label: string; url: string }[];
  riskLevel: "CRITICAL" | "VERY HIGH" | "HIGH" | "MEDIUM-HIGH";
  organizations: Organization[];
  gaps: string[];
}

export interface ThreatDomain {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  phase: string;
  threats: Threat[];
}

export const domains: ThreatDomain[] = [
  {
    id: "rules",
    number: 1,
    title: "Manipulating the Rules of the Game",
    subtitle: "Changing laws, maps, and procedures to predetermine outcomes before any votes are cast",
    icon: "scales",
    description:
      "State legislatures and courts are rewriting election laws, redrawing maps, and changing administrative procedures in ways that predetermine outcomes before a single ballot is cast.",
    phase: "Pre-Election",
    threats: [
      {
        id: "gerrymandering",
        title: "Mid-Decade Partisan Gerrymandering",
        description:
          "An unprecedented wave of mid-decade redistricting has been triggered by Texas gerrymandering at Trump's direction, setting off a partisan arms race in at least eight other states.",
        evidence: [
          'The Supreme Court, in a 6-3 decision, allowed Texas to use a heavily gerrymandered congressional map for the 2026 midterms, under which Republicans could pick up five additional House seats.',
          'California responded with its own redistricting to offset Texas gains. SCOTUSblog described the situation as "the gerrymandering mess."',
          'A Supreme Court case (Louisiana v. Callais) could "turbocharge gerrymandering" if the court weakens the Voting Rights Act further.',
        ],
        sources: [
          { label: "Democracy Docket: SCOTUS Allows Texas Map", url: "https://www.democracydocket.com/news-alerts/scotus-allows-texas-to-use-racially-gerrymandered-map-in-2026-midterm-elections/" },
          { label: "SCOTUSblog: The Gerrymandering Mess", url: "https://www.scotusblog.com/2026/02/the-gerrymandering-mess/" },
          { label: "NPR: Republicans Head to 2026 with Redistricting Edge", url: "https://www.npr.org/2025/12/08/nx-s1-5634585/redistricting-2026midterm-election-trump-congress" },
        ],
        riskLevel: "CRITICAL",
        organizations: [
          { name: "Democracy Docket", url: "democracydocket.com", description: "Litigation tracker and legal challenges to partisan maps" },
          { name: "Brennan Center for Justice", url: "brennancenter.org", description: "Legal advocacy for fair redistricting" },
          { name: "National Redistricting Foundation", url: "democraticredistricting.com", description: "Coordinates legal strategy against partisan gerrymandering" },
        ],
        gaps: [
          "The Supreme Court has declined to intervene against partisan gerrymandering since Rucho v. Common Cause — there is no federal judicial remedy",
          "Only a handful of states have independent redistricting commissions; most states still allow legislatures to draw their own maps",
          "Counter-gerrymandering by Democratic states (CA, MD) escalates the arms race rather than solving the structural problem",
        ],
      },
      {
        id: "scotus",
        title: "Supreme Court Cases Threatening Voting Rights",
        description:
          "Multiple Supreme Court cases in the 2025-2026 term could fundamentally reshape election law, including weakening the Voting Rights Act, restricting mail voting, and expanding candidate standing to challenge election procedures.",
        evidence: [
          'Louisiana v. Callais (argued Oct 15, 2025): Could further curtail the Voting Rights Act. An extreme ruling "could allow Republican states to eliminate between 6 and 12 districts currently held by Democrats."',
          "Watson v. RNC: Challenges state laws allowing mail ballots postmarked by Election Day to be counted. Affects 16 states plus D.C. for all mail voters and 29 states for military/overseas voters.",
          "Bost v. Illinois (decided Jan 14, 2026, 7-2): Expanded candidate standing to sue over election administration, potentially opening a flood of litigation.",
        ],
        sources: [
          { label: "Voting Rights Lab: What's at Stake at SCOTUS", url: "https://votingrightslab.org/report/whats-at-stake-for-elections-at-the-supreme-court/" },
          { label: "NPR: Supreme Court Voting Rights Ruling Could Boost Redistricting", url: "https://www.npr.org/2025/10/15/nx-s1-5567801/supreme-court-louisiana-redistricting-voting-rights-act" },
          { label: "Campaigns & Elections: Three Cases That Could Reshape 2026", url: "https://campaignsandelections.com/industry-news/three-supreme-court-cases-that-could-reshape-politics-in-2026/" },
        ],
        riskLevel: "CRITICAL",
        organizations: [
          { name: "Voting Rights Lab", url: "votingrightslab.org", description: "Tracks and analyzes election-related legislation and litigation" },
          { name: "Campaign Legal Center", url: "campaignlegal.org", description: "Nonpartisan legal advocacy for voting rights" },
          { name: "Democracy Forward", url: "democracyforward.org", description: 'Published a "People\'s Guide to the Supreme Court Term"' },
        ],
        gaps: [
          "Decisions expected by June 2026 — just months before the midterms — could rewrite fundamental rules with no time for legislative remedy",
          "There is no mechanism to expedite state legislative responses to adverse rulings",
          "Public awareness of these cases is extremely low despite their enormous potential impact",
        ],
      },
      {
        id: "restrictive-laws",
        title: "Wave of Restrictive State Voting Laws",
        description:
          "In 2025 alone, state legislatures enacted at least 31 restrictive voting laws — for the first time in five years, restrictions outnumbered expansions.",
        evidence: [
          "The Brennan Center documented 486 restrictive voting bills considered in 47 states in 2025.",
          "7 states enacted new voter ID requirements; Kentucky, Montana, and West Virginia eliminated non-photo ID options.",
          "14 states advanced proof-of-citizenship requirements. Rick Hasen calls these \"much more dangerous than simple voter ID requirements because they can silently disenfranchise tens of thousands of eligible voters who lack ready access to documents.\"",
        ],
        sources: [
          { label: "Brennan Center: State Voting Laws Roundup 2025", url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review" },
          { label: "Voting Rights Lab: 2025 Key Election Policy Trends", url: "https://votingrightslab.org/report/2025-legislative-sessions-to-date-key-election-policy-trends/" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Brennan Center for Justice", url: "brennancenter.org", description: "Tracks and litigates restrictive voting laws nationwide" },
          { name: "ACLU Voting Rights Project", url: "aclu.org/issues/voting-rights", description: "Established 1965; litigated hundreds of voting rights cases" },
          { name: "Voting Rights Lab", url: "votingrightslab.org", description: "Monitors legislation in all 50 states" },
        ],
        gaps: [
          "State-level Voting Rights Acts with preclearance provisions exist in only 8 states — more are needed, especially in the South",
          "Legal challenges are reactive and slow; by the time courts act, elections may have already been held under restrictive rules",
          "At least 29 states have banned private funding for election administration, closing off a lifeline for underfunded offices",
        ],
      },
      {
        id: "voter-purges",
        title: "Mass Voter Roll Purges",
        description:
          "States are conducting aggressive voter roll purges that disproportionately affect communities of color and low-income voters, often using error-prone matching systems with insufficient notice.",
        evidence: [
          "Georgia's Secretary of State canceled the registrations of nearly 471,000 voters in July 2025 — roughly 6% of all registered voters in the state.",
          "The Make Elections Great Again Act would require states to check voter eligibility at least once a month using federal databases that government inspectors have flagged for high error rates.",
          "Between 2020 and 2022, 19.27 million voters were purged nationwide. Ohio, Texas, and Virginia each wrongly removed thousands of eligible American citizens while claiming to remove noncitizens.",
        ],
        sources: [
          { label: "Brennan Center: Mass Purges Are the New Voter Suppression", url: "https://www.brennancenter.org/our-work/analysis-opinion/mass-purges-are-new-voter-suppression" },
          { label: "Democracy Docket: Georgia Voter Purge Lawsuit", url: "https://www.democracydocket.com/news-alerts/voting-rights-groups-sue-georgia-for-refusing-to-release-voter-purge-records/" },
          { label: "Campaign Legal Center: Protecting from Illegal Voter Purges", url: "https://campaignlegal.org/cases-actions/protecting-all-americans-illegal-voter-purges-and-wrongful-voter-challenges" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Campaign Legal Center", url: "campaignlegal.org", description: "Active litigation challenging the most aggressive purge programs" },
          { name: "Rock the Vote", url: "rockthevote.org", description: "Voter registration verification and re-registration assistance" },
          { name: "Democracy Docket", url: "democracydocket.com", description: "Tracking and litigating purge cases" },
        ],
        gaps: [
          "Many states lack adequate safeguards against wrongful removal — voters may not know they've been purged until they try to vote",
          "Re-registration assistance programs for wrongfully purged voters are severely underfunded",
          "Voter registration drives targeting affected communities face their own legal restrictions in many states",
        ],
      },
      {
        id: "executive-orders",
        title: "Executive Orders to Rewrite Voting Rules",
        description:
          "Trump issued executive orders aimed at overhauling election systems and has threatened to ban mail-in voting by executive order.",
        evidence: [
          "March 2025 EO aimed to mandate passport or citizenship proof for federal voter registration forms and rescind all previous certifications of voting equipment.",
          "Aug 2025: Trump threatened executive order to ban mail-in voting.",
          "A leaked 17-page draft executive order would declare a national emergency to give Trump control over voting mechanisms, including requiring hand-counting of ballots.",
        ],
        sources: [
          { label: "Brennan Center: Status of Trump's Anti-Voting Executive Order", url: "https://www.brennancenter.org/our-work/research-reports/status-trumps-anti-voting-executive-order" },
          { label: "PolitiFact: Trump 2026 Elections", url: "https://www.politifact.com/article/2025/nov/03/Trump-2026-elections-midterms-security-voters/" },
          { label: "Democracy Docket: Draft Emergency Executive Order", url: "https://www.democracydocket.com/news-alerts/exclusive-read-the-draft-executive-emergency-order-for-trump-to-take-control-of-elections/" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "ACLU", url: "aclu.org", description: "Legal challenges to unconstitutional executive overreach" },
          { name: "Common Cause", url: "commoncause.org", description: "Filed lawsuits to block voter data seizures and protect voter privacy" },
          { name: "Brennan Center", url: "brennancenter.org", description: "Tracking EO status and advising states on legal responses" },
        ],
        gaps: [
          "While presidents lack constitutional authority over state elections, executive orders create immediate confusion and costly litigation",
          "States need pre-positioned legal strategies to respond quickly to emergency declarations",
          "No federal legislation explicitly prevents a president from declaring an election emergency",
        ],
      },
    ],
  },
  {
    id: "administration",
    number: 2,
    title: "Undermining Election Administration",
    subtitle: "Degrading the people, institutions, and infrastructure that run elections",
    icon: "building",
    description:
      "The federal government has shifted from supporting election administration to actively degrading it — defunding security agencies, threatening election workers, and placing partisan actors in oversight roles.",
    phase: "Pre-Election & Election Day",
    threats: [
      {
        id: "election-worker-exodus",
        title: "Election Worker Threats and Mass Turnover",
        description:
          "Threats against election workers have driven unprecedented turnover, leaving many jurisdictions with inexperienced staff heading into the midterms.",
        evidence: [
          "Threats against public servants increased from 8 recorded incidents in 2015 to 291 in 2025.",
          "The Brennan Center found that 38% of local election officials experienced threats, harassment, or abuse, and 45% fear for their colleagues' safety.",
          "Issue One found that half of all counties in 11 Western states have lost their chief election official since 2020. The Bipartisan Policy Center found 4 out of 10 local offices will have leaders who have never run a national election.",
        ],
        sources: [
          { label: "Brennan Center: Election Officials Safety Poll", url: "https://www.brennancenter.org/our-work/analysis-opinion/poll-election-officials-finds-concerns-about-safety-political" },
          { label: "Votebeat: Election Official Turnover Remains High", url: "https://www.votebeat.org/2026/02/03/western-election-official-turnover-since-2020-issue-one-report/" },
          { label: "Governing: Amid Record Election Official Turnover", url: "https://www.governing.com/management-and-administration/amid-record-election-official-turnover-states-prepare-for-the-midterms" },
        ],
        riskLevel: "CRITICAL",
        organizations: [
          { name: "Brennan Center CSSE", url: "brennancenter.org", description: "Brings together election officials and law enforcement for protection" },
          { name: "Election Officials Legal Defense Network", url: "electionofficials.org", description: "Legal support for officials facing threats" },
          { name: "Issue One", url: "issueone.org", description: "Bipartisan group supporting election officials and advocating for their safety" },
        ],
        gaps: [
          "The Brennan Center estimates $300 million is needed for physical security measures — panic buttons, bulletproof glass, home security — over the next five years",
          "48% of jurisdictions report difficulty recruiting poll workers; no national recruitment campaign exists at adequate scale",
          "Most states lack laws specifically protecting election officials from harassment and doxxing",
        ],
      },
      {
        id: "cybersecurity-gutted",
        title: "Gutting Election Cybersecurity",
        description:
          "The Trump administration has dismantled federal election security infrastructure. CISA put 17 election security staff on leave, DOGE fired 130 CISA employees, and CISA paused all election security activities.",
        evidence: [
          "CISA cut $10 million in funding for the Elections Infrastructure Information Sharing and Analysis Center (EI-ISAC) and Multi-State ISAC, which provided free cybersecurity services to state and local election offices.",
          "~33% of CISA staff departed by early June 2025.",
          "A Republican election supervisor in Florida warned: smaller counties are now more vulnerable to cyberattacks, and U.S. adversaries may see an opportunity.",
        ],
        sources: [
          { label: "Votebeat: CISA Halts Election Security Support", url: "https://www.votebeat.org/2025/03/11/cisa-ends-support-election-security-nass-nased/" },
          { label: "Brennan Center: Federal Government Undermining Election Security", url: "https://www.brennancenter.org/our-work/research-reports/how-federal-government-undermining-election-security" },
          { label: "Governing: Feds Cut Funding for Election Cybersecurity", url: "https://www.governing.com/management-and-administration/the-feds-cut-funding-for-election-cybersecurity-how-will-public-officials-adapt" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Center for Internet Security", url: "cisecurity.org", description: "Provides cybersecurity resources through EI-ISAC" },
          { name: "Verified Voting", url: "verifiedvoting.org", description: "Advocates for paper ballot backups and post-election audits" },
          { name: "Center for Democracy & Technology", url: "cdt.org", description: "Launched new initiative for local election admin cybersecurity support" },
        ],
        gaps: [
          "Rural and small counties are most exposed — they relied entirely on federal support and cannot afford private cybersecurity services",
          "A coalition of 56 organizations is urging Congress to allocate $825 million in FY26 for Election Security Grants — no funding has been approved",
          "State-to-state threat sharing has broken down without the federal coordination layer",
        ],
      },
      {
        id: "election-deniers",
        title: "Elevation of Election Deniers to Power",
        description:
          "Trump has appointed people who spread election conspiracy theories to key government positions overseeing election integrity.",
        evidence: [
          "Heather Honey, appointed deputy assistant secretary for elections integrity at DHS, previously spread election conspiracy theories — including one Trump cited in his Jan 6 speech.",
          'The DOJ has shifted from enforcing voting rights to pursuing "voter fraud" — roughly 70% of Civil Rights Division lawyers have left (250 lawyers since Trump took office).',
        ],
        sources: [
          { label: "PolitiFact: Trump 2026 Elections Midterms", url: "https://www.politifact.com/article/2025/nov/03/Trump-2026-elections-midterms-security-voters/" },
          { label: "CNN: Inside Gutting of DOJ Voting Section", url: "https://www.cnn.com/2025/06/04/politics/inside-gutting-justice-department-voting-section" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Protect Democracy", url: "protectdemocracy.org", description: "Tracks authoritarian appointments; uses litigation to challenge illegal actions" },
          { name: "CREW", url: "citizensforethics.org", description: "Investigates officials who undermine democratic norms" },
          { name: "States United Democracy Center", url: "statesuniteddemocracy.org", description: "Works with officials to protect certification processes" },
        ],
        gaps: [
          "No mechanism exists to prevent partisan loyalists from being placed in election oversight roles",
          "Senate confirmation has been bypassed for many key positions through acting appointments",
          "Private litigation must now replace collapsed DOJ voting rights enforcement — but funding is insufficient",
        ],
      },
      {
        id: "defunding-eac",
        title: "Gutting Election Funding and Federal Support",
        description:
          "The FY 2026 budget proposes slashing EAC funding by 38-40% and zeroing out election security grants to states.",
        evidence: [
          "The FY 2026 budget proposes cutting EAC funding from $27-28 million to $17 million. Election security grant funds to states are zeroed out entirely.",
          'R Street Institute warned that "the 38 percent budget cut shrinks EAC capacity just when demand for its services is growing."',
          "Since 2003, the EAC has administered over $4.35 billion in HAVA funding including $1.4 billion in election security grants from 2018-2024.",
        ],
        sources: [
          { label: "CyberScoop: House Republicans Propose Eliminating Election Security Funding", url: "https://cyberscoop.com/house-republicans-propose-eliminating-funding-for-election-security/" },
          { label: "R Street: Why Defunding the EAC May Hurt Election Integrity", url: "https://www.rstreet.org/commentary/why-defunding-the-election-assistance-commission-may-hurt-election-integrity/" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "R Street Institute", url: "rstreet.org", description: "Nonpartisan advocacy for election administration funding" },
          { name: "Bipartisan Policy Center", url: "bipartisanpolicy.org", description: "Cross-partisan support for election infrastructure" },
          { name: "Issue One", url: "issueone.org", description: "Bipartisan group advocating for adequate election resources" },
        ],
        gaps: [
          "No alternative federal funding mechanism exists if EAC grants are zeroed out",
          "Philanthropic funding is a stopgap, not a replacement for sustained federal investment",
          "85% of funders said they did not have a plan for their election-year giving as of fall 2025",
        ],
      },
    ],
  },
  {
    id: "suppression",
    number: 3,
    title: "Suppressing and Intimidating Voters",
    subtitle: "Making it harder, more confusing, or more frightening for eligible citizens to cast ballots",
    icon: "shield",
    description:
      "A multi-pronged effort to discourage and prevent eligible voters from casting ballots — particularly targeting communities of color, young voters, military families, and urban areas.",
    phase: "Pre-Election & Election Day",
    threats: [
      {
        id: "voter-intimidation",
        title: "Military / Law Enforcement at Polling Places",
        description:
          "The potential deployment of federal agents, National Guard, or ICE at polling locations to intimidate voters — particularly in communities of color and immigrant communities.",
        evidence: [
          "The Atlantic's David A. Graham reported Trump could use troops near polling places and have federal agents seize voting machines.",
          "Steve Bannon said on War Room podcast he hopes ICE agents patrol polling places during midterms.",
          "The Brennan Center found a 3-5% drop in minority turnout correlated with increased law enforcement presence at polling places.",
          "Federal law enforcement presence at polls is illegal under 18 U.S.C. § 594.",
        ],
        sources: [
          { label: "NPR: Trump's Options to Subvert 2026 Midterms", url: "https://www.npr.org/2025/11/06/nx-s1-5600669/a-reporter-outlines-trumps-options-to-subvert-the-2026-midterm-elections" },
          { label: "Stateline: Blue States Push to Ban ICE at Polls", url: "https://stateline.org/2026/03/05/blue-states-push-to-ban-ice-at-the-polls-amid-federal-voter-intimidation-fears/" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "ACLU", url: "aclu.org", description: "Has litigated voter intimidation cases; would file emergency injunctions" },
          { name: "Lawyers' Committee for Civil Rights", url: "lawyerscommittee.org", description: "Runs Election Protection hotline (866-OUR-VOTE)" },
          { name: "NAACP Legal Defense Fund", url: "naacpldf.org", description: "Defends voting rights with focus on racial justice" },
        ],
        gaps: [
          "While DHS has said ICE will not be at polling places, there is no enforceable federal ban on it",
          "Only a handful of blue states have moved to pass legislation banning federal agents at polls",
          "Voter education about rights when encountering law enforcement at polls is inadequate",
        ],
      },
      {
        id: "registration-attacks",
        title: "Attacks on Voter Registration Drives",
        description:
          "Federal and state legislation is actively targeting nonprofit voter registration operations, which disproportionately serve minority and young voters.",
        evidence: [
          "The SAVE Act passed the House on February 11, 2026 (218-213). If enacted, it would effectively end third-party voter registration drives.",
          "North Carolina's Board of Elections announced it will no longer provide registration forms to voter registration drives (March 2026).",
          "Organizations in Texas now face felony charges for distributing mail-in ballot applications to eligible voters.",
        ],
        sources: [
          { label: "Votebeat: How the SAVE Act Would Affect 2026", url: "https://www.votebeat.org/2026/02/16/save-america-act-passes-house-proof-of-citizenship-register-vote-photo-id/" },
          { label: "NC Newsline: NC Board Stops Providing Forms to Drives", url: "https://ncnewsline.com/2026/03/03/nc-board-of-elections-will-no-longer-provide-forms-to-voter-registration-drives/" },
          { label: "Brennan Center: New SAVE Act Bills Would Block Millions", url: "https://www.brennancenter.org/our-work/analysis-opinion/new-save-act-bills-would-still-block-millions-americans-voting" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Nonprofit VOTE", url: "nonprofitvote.org", description: "Supports nonprofit voter engagement" },
          { name: "Campaign Legal Center", url: "campaignlegal.org", description: "Legal challenges to registration restrictions" },
          { name: "Democracy Docket", url: "democracydocket.com", description: "Tracking legislation and filing legal challenges" },
        ],
        gaps: [
          "Even where laws haven't passed, the chilling effect on nonprofit registration work is already measurable",
          "No coordinated national strategy exists to ensure voter registration access in states that have restricted drives",
          "Felony penalties for election-related civic activities deter volunteer participation",
        ],
      },
      {
        id: "demographic-targeting",
        title: "Targeted Suppression of Specific Demographics",
        description:
          "Digital and legislative voter suppression efforts disproportionately target youth voters, minority voters, and military/overseas voters.",
        evidence: [
          'A peer-reviewed study in PNAS found that "digital voter suppression disproportionally targets non-Whites in racial minority counties of battleground states" and that exposed individuals were less likely to vote.',
          "New laws create significant hurdles for 18-to-24-year-olds, who disproportionately lack driver's licenses. Student IDs must meet state standards that many do not.",
          "The PROVE Act (H.R. 4851) would require overseas voters to show their passport \"in person to the office of the appropriate election official\" — an impossibility for deployed troops.",
        ],
        sources: [
          { label: "PNAS: Targeted Digital Voter Suppression", url: "https://www.pnas.org/doi/10.1073/pnas.2519944123" },
          { label: "The Fulcrum: New Voting Barriers Threaten Youth", url: "https://thefulcrum.us/democracy/young-voters" },
          { label: "Voting Rights Lab: Military and Overseas Voting Under Threat", url: "https://votingrightslab.org/2025/10/22/150-years-of-military-and-overseas-voting-now-under-threat/" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "NAACP Legal Defense Fund", url: "naacpldf.org", description: "Documented how Project 2025 threatens voting rights and Black political power" },
          { name: "Rock the Vote", url: "rockthevote.org", description: "Youth voter registration and education" },
          { name: "Overseas Vote Foundation", url: "overseasvotefoundation.org", description: "Protecting military and overseas voting rights" },
        ],
        gaps: [
          "Felony disenfranchisement laws still bar an estimated 4 million Americans from voting, hitting Black communities disproportionately",
          "The administration discontinued the Federal Voting Assistance Program's email-to-fax service for overseas voters",
          "Spanish-language and non-English voter education materials are severely underfunded compared to English resources",
        ],
      },
      {
        id: "voter-data-seizure",
        title: "Federal Seizure of Voter Data",
        description:
          "The DOJ has requested voter registration files from most states, including SSNs, driver's license numbers, party affiliation, and voting history.",
        evidence: [
          'DOJ sued 20+ states for voter registration files. Marc Elias warns this is "central to a broader strategy of voter suppression, election subversion, and litigation."',
          "A DOGE team member signed a \"Voter Data Agreement\" with the advocacy group True the Vote while acting as an SSA employee.",
          "SSA identified that DOGE team members \"circumvented IT rules to improperly share data on outside servers.\"",
        ],
        sources: [
          { label: "Democracy Docket: WARNING — Trump's Plan to Weaponize Voter Data", url: "https://www.democracydocket.com/analysis/warning-trumps-plan-to-weaponize-voter-data/" },
          { label: "Democracy Docket: DOGE Worked with True the Vote", url: "https://www.democracydocket.com/news-alerts/doge-worked-with-political-group-to-probe-voter-rolls-trump-admin-admits/" },
          { label: "NPR: Trump Building National Citizenship Data System", url: "https://www.npr.org/2025/06/29/nx-s1-5409608/citizenship-trump-privacy-voting-database" },
        ],
        riskLevel: "VERY HIGH",
        organizations: [
          { name: "Common Cause", url: "commoncause.org", description: "Filed lawsuits in 13+ states to block voter data seizures" },
          { name: "ACLU", url: "aclu.org", description: "Joined motions to protect voters' sensitive data" },
          { name: "American Oversight", url: "americanoversight.org", description: "FOIA demands for transparency on data collection" },
        ],
        gaps: [
          "No federal law prevents the executive branch from building a centralized voter surveillance database",
          "DOGE's documented circumvention of data security rules has faced no enforcement consequences",
          "Many voters don't know their data has been seized and have no mechanism to opt out",
        ],
      },
    ],
  },
  {
    id: "information",
    number: 4,
    title: "Information Warfare and Disinformation",
    subtitle: "Undermining public confidence in elections through lies, deepfakes, and platform failures",
    icon: "megaphone",
    description:
      "A coordinated assault on truth itself — combining AI-generated deepfakes, collapsed platform safeguards, dying local newsrooms, and systematic delegitimization of election results.",
    phase: "All Phases",
    threats: [
      {
        id: "delegitimization",
        title: "Systematic Delegitimization of Elections",
        description:
          'Trump has stated he will only accept the 2026 midterm results if he personally deems them "honest" — continuing a pattern of preemptive rejection dating back over a decade.',
        evidence: [
          'Trump told NBC\'s Tom Llamas (Feb 5, 2026): "I will [accept midterm outcomes] if the elections are honest... if not, something else has to happen."',
          'In 2024: "If everything\'s honest, I\'ll gladly accept the results... if it\'s not, you have to fight for the right of the country."',
          "After 2020, Trump and allies lost 60+ lawsuits but continued spreading the \"Big Lie.\" 30%+ of Americans now distrust election results.",
        ],
        sources: [
          { label: "Truthout: Trump Says He'll Only Accept 2026 Results If 'Honest'", url: "https://truthout.org/articles/trump-says-hell-only-accept-2026-midterms-if-he-deems-them-honest/" },
          { label: "CBS News: Trump on Accepting Midterm Results", url: "https://www.cbsnews.com/video/trump-says-hell-accept-2026-midterm-results-if-the-elections-are-honest/" },
          { label: "Democracy Docket: Trump Has Never Accepted Election Results", url: "https://www.democracydocket.com/opinion/trump-has-never-accepted-election-results-and-he-is-only-getting-worse/" },
        ],
        riskLevel: "VERY HIGH",
        organizations: [
          { name: "Protect Democracy", url: "protectdemocracy.org", description: 'Published "The Authoritarian Playbook for 2025" — litigation and communications' },
          { name: "Democracy Docket", url: "democracydocket.com", description: "Marc Elias's platform: won 64 of 65 cases against 2020 election challenges" },
          { name: "PolitiFact", url: "politifact.com", description: "Nonpartisan fact-checking; tracks election misinformation" },
        ],
        gaps: [
          "Misinformation is the oxygen that feeds all other threats — without a base who believe elections are rigged, other tactics lose traction",
          "Fact-checking reaches only a fraction of the audience that consumes misinformation",
          "No coordinated national public education campaign exists to build confidence in election integrity",
        ],
      },
      {
        id: "ai-deepfakes",
        title: "AI-Generated Deepfakes and Synthetic Media",
        description:
          "AI deepfakes have crossed a critical threshold — hyper-realistic face and voice synthesis is now being deployed directly in campaign advertising and voter suppression operations.",
        evidence: [
          "Senate Republicans released an AI deepfake ad of Democratic candidate James Talarico in March 2026.",
          'The WEF reported a "step change in the volume of deepfakes, AI-generated imagery and other AI-assisted misinformation in 2025."',
          'Biometric Update reported that AI fakery is being weaponized to intimidate voters, with "voters unable to tell what is real and fearing what they see might be true, making staying home feel like the safest choice."',
        ],
        sources: [
          { label: "CNN: Republicans Release AI Deepfake of Talarico", url: "https://www.cnn.com/2026/03/13/politics/james-talarico-ai-deepfake-republicans-midterms" },
          { label: "WEF: How AI Will Shape Disinformation in 2026", url: "https://www.weforum.org/stories/2026/03/how-cognitive-manipulation-and-ai-will-shape-disinformation-in-2026/" },
          { label: "Brennan Center: Gauging the AI Threat", url: "https://www.brennancenter.org/our-work/analysis-opinion/gauging-ai-threat-free-and-fair-elections" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Brennan Center", url: "brennancenter.org", description: "Research and advocacy on AI threats to elections" },
          { name: "R Street Institute", url: "rstreet.org", description: "Nonpartisan analysis of AI and election policy" },
          { name: "Public Citizen", url: "citizen.org", description: "Tracks state legislation on deepfakes in elections (26 states have laws)" },
        ],
        gaps: [
          "Congress has passed no federal legislation on AI in elections — only 26 states have laws, with inconsistent enforcement",
          "A proposed federal bill would impose a 10-year moratorium on state-level AI laws, preempting existing protections",
          "Rapid-response fact-checking for AI-generated content is completely inadequate relative to the volume of production",
        ],
      },
      {
        id: "platform-collapse",
        title: "Social Media Platforms Abandon Election Integrity",
        description:
          "Meta ended its fact-checking program. X/Twitter led the trend. YouTube and TikTok followed with rollbacks. The platforms where most Americans encounter political information have largely abandoned content moderation.",
        evidence: [
          "Meta ended its US fact-checking program in January 2025, replacing it with crowd-sourced \"Community Notes.\" The company dissolved its election integrity team.",
          'A study of X\'s Community Notes found "no evidence that Community Notes significantly reduced engagement with misleading posts" — they are "too slow to effectively reduce engagement with misinformation in the early (and most viral) stage of diffusion."',
          'The ADL found that "major social media platforms have weakened rules against the spread of election misinformation."',
        ],
        sources: [
          { label: "NPR: Meta Ends Fact-Checking", url: "https://www.npr.org/2025/01/07/nx-s1-5251151/meta-fact-checking-mark-zuckerberg-trump" },
          { label: "Union of Concerned Scientists: Meta Ends Fact-Checking", url: "https://blog.ucs.org/liza-gordon-rogers/meta-ends-fact-checking-raising-risks-of-disinformation-to-democracy/" },
          { label: "ADL: Platforms Weaken Election Misinfo Rules", url: "https://www.adl.org/resources/press-release/major-social-media-platforms-have-weakened-rules-against-spread-election" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Center for Democracy & Technology", url: "cdt.org", description: "Monitoring platform policies and the information environment" },
          { name: "Full Fact", url: "fullfact.org", description: "Independent fact-checking organization" },
          { name: "Factchequeado", url: "factchequeado.com", description: "Spanish-language fact-checking for Latino communities" },
        ],
        gaps: [
          "No independent fact-checking infrastructure exists at scale outside the platforms",
          "Spanish-language and non-English fact-checking is grossly underserved — platforms restrict English misinformation but fail to apply the same to translations",
          "Media literacy programs targeting the most vulnerable communities are almost nonexistent",
        ],
      },
      {
        id: "foreign-interference",
        title: "Foreign Interference at Industrial Scale",
        description:
          "Russia, China, and Iran have dramatically escalated election influence operations — powered by generative AI that allows single operators to manage thousands of convincing personas.",
        evidence: [
          "Russia's 2026 budget increased funding for information operations by 54% ($458 million additional). China's projected foreign influence spending exceeds $10 billion in 2026.",
          'CNN reported the Trump administration "shut down foreign-influence-focused centers at the Office of the Director of National Intelligence, the FBI and the State Department."',
          '"What once required the resources of a state intelligence service now requires little more than a commercially available subscription."',
        ],
        sources: [
          { label: "The Hill: China, Russia and Iran Investing Billions", url: "https://thehill.com/opinion/cybersecurity/5713097-china-russia-iran-influence/" },
          { label: "CNN: Secret US Cyber Operations Gutted", url: "https://www.cnn.com/2026/01/28/politics/hacking-disinformation-election-security" },
        ],
        riskLevel: "CRITICAL",
        organizations: [
          { name: "Alliance for Securing Democracy", url: "securingdemocracy.gmfus.org", description: "Tracks foreign influence operations" },
          { name: "Stanford Internet Observatory", url: "cyber.fsi.stanford.edu", description: "Academic research on foreign disinformation" },
        ],
        gaps: [
          "Key federal counter-influence agencies have been defunded or restructured — no adequate replacement exists",
          "The combination of massively increased foreign investment AND dismantled US defenses creates unprecedented vulnerability",
          "Academic researchers and private threat intelligence firms cannot replicate the scale of former government operations",
        ],
      },
      {
        id: "news-deserts",
        title: "Collapse of Local Journalism",
        description:
          "Over 2,500 newspapers have closed since 2005. More than half of US counties lack a local news source. Over 2.7 million voting-age citizens live in communities with zero local news coverage.",
        evidence: [
          "50 million Americans live in counties with only one newspaper, at risk of becoming news deserts.",
          'Research shows that "reductions in citizens\' political knowledge and participation follow declines in coverage about congressional elections."',
          "The Brennan Center directly connected news deserts to impacts on midterm elections.",
        ],
        sources: [
          { label: "Medill/Northwestern: News Deserts Hit New High", url: "https://www.medill.northwestern.edu/news/2025/news-deserts-hit-new-high-and-50-million-have-limited-access-to-local-news-study-finds.html" },
          { label: "Brennan Center: News Deserts Could Impact Midterms", url: "https://www.brennancenter.org/our-work/analysis-opinion/news-deserts-could-impact-midterm-elections" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "Local News Initiative (Northwestern)", url: "localnewsinitiative.northwestern.edu", description: "Research and advocacy for local journalism" },
          { name: "Report for America", url: "reportforamerica.org", description: "Places journalists in local newsrooms" },
        ],
        gaps: [
          "Without local journalism, there is no watchdog covering election administration at the county level",
          "Civic information infrastructure (candidate guides, ballot explainers) is almost nonexistent in news desert communities",
          "No organization is working at scale to partner election protection with community information hubs in news deserts",
        ],
      },
    ],
  },
  {
    id: "doj",
    number: 5,
    title: "Weaponizing Federal Power",
    subtitle: "Using the DOJ, DOGE, and executive authority as tools of political control",
    icon: "gavel",
    description:
      "The federal government has shifted from protecting elections to actively undermining them — weaponizing the DOJ, building surveillance databases, and using federal authority to pressure state election systems.",
    phase: "All Phases",
    threats: [
      {
        id: "doj-politicization",
        title: "DOJ Politicization and Selective Prosecution",
        description:
          "The DOJ is being used as a tool of political retaliation and election manipulation, with new positions empowered to investigate election-integrity cases without insulation from political influence.",
        evidence: [
          'Democracy Docket reported that "DOJ\'s legal machinery to subvert the 2026 election is already in place" — the White House and AG Pam Bondi created positions for politically directed election investigations.',
          "~70% of Civil Rights Division lawyers have left — 250 attorneys since Trump took office.",
          "The DOJ dropped Section 2 Voting Rights Act cases and filed briefs arguing majority-minority districts are unconstitutional.",
        ],
        sources: [
          { label: "Democracy Docket: DOJ's Legal Machinery Already in Place", url: "https://www.democracydocket.com/opinion/dojs-legal-machinery-to-subvert-the-2026-election-is-already-in-place/" },
          { label: "NPR: Critics Warn DOJ Is Being Politicized", url: "https://www.npr.org/2025/05/06/g-s1-64305/weaponization-doj-trump-bondi-justice-department" },
          { label: "Stanford Law Review: Executive Branch Attacks on Jan 6 Prosecutors", url: "https://www.stanfordlawreview.org/online/executive-branch-attacks-on-january-6-prosecutors-a-notable-case-of-democratic-backsliding/" },
        ],
        riskLevel: "CRITICAL",
        organizations: [
          { name: "Protect Democracy", url: "protectdemocracy.org", description: "Retaliatory action tracker; litigation against illegal government actions" },
          { name: "States United Democracy Center", url: "statesuniteddemocracy.org", description: "Working with state officials to resist federal overreach" },
          { name: "Brennan Center", url: "brennancenter.org", description: "Research and advocacy on DOJ politicization" },
        ],
        gaps: [
          "State attorneys general can step into the enforcement vacuum, but not all have the resources or political will to do so",
          "Private litigation organizations need increased funding to replace federal enforcement — but the scale of the gap is massive",
          "No federal mechanism exists to prevent political direction of election-related investigations",
        ],
      },
      {
        id: "doge-data",
        title: "DOGE Access to Voter Data and Database Weaponization",
        description:
          "DOGE has been given access to sensitive federal databases and coordinated with political advocacy groups to probe voter rolls, creating a national citizenship data system.",
        evidence: [
          "DHS, in partnership with DOGE, rolled out upgrades allowing election officials to check citizenship status using data from SSA, USCIS, State Department, DMVs, the Education Department, and HHS.",
          "A DOGE team member signed a \"Voter Data Agreement\" with True the Vote while acting as an SSA employee.",
          "SSA identified that DOGE team members \"circumvented IT rules to improperly share data on outside servers\" and \"sent a password-protected file of private records to DOGE affiliates outside the agency.\"",
        ],
        sources: [
          { label: "NPR: Trump Building National Citizenship Data System", url: "https://www.npr.org/2025/06/29/nx-s1-5409608/citizenship-trump-privacy-voting-database" },
          { label: "Democracy Docket: DOGE and True the Vote", url: "https://www.democracydocket.com/news-alerts/did-doge-sign-a-voter-data-agreement-with-election-deniers-true-the-vote/" },
          { label: "American Oversight: Citizenship Data System FOIA", url: "https://americanoversight.org/demanding-answers-about-the-trump-administrations-national-citizenship-data-system/" },
        ],
        riskLevel: "CRITICAL",
        organizations: [
          { name: "American Oversight", url: "americanoversight.org", description: "FOIA demands for transparency on data collection" },
          { name: "Democracy Docket", url: "democracydocket.com", description: "Tracking and litigating data weaponization cases" },
        ],
        gaps: [
          "Federal courts have issued temporary restraining orders but the underlying data aggregation continues",
          "No federal privacy law prevents this type of cross-agency voter surveillance database",
          "The scale of the data breach — SSA, USCIS, State, DMV, Education, HHS — is unprecedented and no single organization can monitor all vectors",
        ],
      },
      {
        id: "pressuring-officials",
        title: "Pressuring State and Local Election Officials",
        description:
          'Using the power of the presidency to pressure state and local officials to change results, refuse to certify, or "find" votes.',
        evidence: [
          'In 2020, Trump called GA Secretary of State Brad Raffensperger asking him to "find 11,780 votes."',
          "59% of election officials reported fear of political interference in 2025. 21% said they were unlikely to continue serving through 2026.",
          "UCLA law professor Rick Hasen warns Trump could try similar pressure campaigns again in 2026.",
        ],
        sources: [
          { label: "Brennan Center: Election Officials Under Attack", url: "https://www.brennancenter.org/our-work/policy-solutions/election-officials-under-attack" },
          { label: "Brennan Center: Survey — Officials Want More Support", url: "https://www.brennancenter.org/our-work/analysis-opinion/survey-finds-election-officials-want-more-support-amid-federal-cutbacks" },
        ],
        riskLevel: "VERY HIGH",
        organizations: [
          { name: "Election Officials Legal Defense Network", url: "electionofficials.org", description: "Legal support for officials facing threats" },
          { name: "Issue One", url: "issueone.org", description: "Bipartisan support and safety advocacy for election officials" },
        ],
        gaps: [
          "When 1 in 5 officials may not serve through 2026, institutional knowledge is lost and replacements may be more susceptible to pressure",
          "Most states lack clear legal protections for election officials who resist political pressure from higher authorities",
          "Trump's call to Raffensperger resulted in criminal charges but has not deterred similar behavior",
        ],
      },
      {
        id: "dark-money",
        title: "Dark Money and Oligarchic Campaign Finance",
        description:
          "Unprecedented levels of undisclosed spending are flooding the 2026 midterms, with the cryptocurrency industry alone spending more than double its 2024 record.",
        evidence: [
          "The crypto industry has dumped at least $288 million into the 2026 midterms — more than double the $130 million in 2024.",
          "Elon Musk gave $20 million to top Republican groups and $10 million to the Kentucky Senate race alone.",
          "A federal court struck down a Maine law blocking foreign government election spending as unconstitutional.",
        ],
        sources: [
          { label: "DL News: Crypto Lobby Spends $271M on 2026", url: "https://www.dlnews.com/articles/people-culture/crypto-lobby-spends-usd271m-to-sway-the-2026-elections/" },
          { label: "The Hill: Dark Money Threat to US Elections", url: "https://thehill.com/opinion/campaign/5733511-money-politics-foreign-influence-2026/" },
          { label: "NBC: Elon Musk Gives Millions to GOP Super PACs", url: "https://www.nbcnews.com/politics/2026-election/elon-musk-gives-millions-republican-super-pacs-ahead-midterms-rcna222114" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "OpenSecrets", url: "opensecrets.org", description: "Disclosure tracking and campaign finance transparency" },
          { name: "Campaign Legal Center", url: "campaignlegal.org", description: "Advocacy for campaign finance reform" },
          { name: "End Citizens United", url: "endcitizensunited.org", description: "Working to overturn Citizens United and reform campaign finance" },
        ],
        gaps: [
          "The DISCLOSE Act of 2026 is expected to be blocked by Republicans despite support from all 47 Democratic caucus members",
          "Foreign influence channels through dark money remain open after courts struck down state-level protections",
          "Crypto PAC spending strategies — massive primary spending as intimidation — have no regulatory response",
        ],
      },
    ],
  },
  {
    id: "post-election",
    number: 6,
    title: "Subverting Results After the Vote",
    subtitle: "Refusing to accept or certify legitimate outcomes after ballots have been counted",
    icon: "flag",
    description:
      "Even if every eligible voter manages to cast a ballot, the results can still be subverted through certification refusal, bad-faith legal challenges, and political violence.",
    phase: "Post-Election",
    threats: [
      {
        id: "certification-refusal",
        title: "Post-Election Certification Threats",
        description:
          "Rogue county and state officials may refuse to certify valid election results — a tactic that has expanded since 2020 and lacks sufficient legal safeguards.",
        evidence: [
          "CREW documented 35 rogue election officials who have previously refused to certify and may do so again — concentrated in AZ, CO, GA, NV, NM, NC, PA, and MI.",
          "Refusal-to-certify incidents increased nearly 30% from 2020 to 2022.",
          "Cochise County, AZ — which refused to certify in 2022 and was court-ordered to do so — is again raising the same concerns for 2026.",
        ],
        sources: [
          { label: "CREW: Election Certification Under Threat", url: "https://www.citizensforethics.org/reports-investigations/crew-investigations/election-certification-under-threat/" },
          { label: "Brennan Center: Election Certification", url: "https://www.brennancenter.org/our-work/policy-solutions/election-certification" },
          { label: "Democracy Docket: When Officials Refuse to Certify", url: "https://www.democracydocket.com/analysis/what-happens-when-election-officials-refuse-to-certify-results/" },
        ],
        riskLevel: "HIGH",
        organizations: [
          { name: "CREW", url: "citizensforethics.org", description: "Tracks and holds accountable officials who refuse to certify" },
          { name: "Protect Democracy", url: "protectdemocracy.org", description: "Guidance on preventing certification interference" },
          { name: "Brennan Center", url: "brennancenter.org", description: "Advising states on strengthening certification frameworks" },
        ],
        gaps: [
          "Many states lack clear statutory penalties for certification refusal",
          "Legal teams need to be pre-positioned to file immediate mandamus actions — reactive responses are too slow",
          "Public education that certification is a ministerial, non-discretionary function is almost nonexistent",
        ],
      },
      {
        id: "conditional-acceptance",
        title: "Conditional Acceptance of Results",
        description:
          'Trump has explicitly reserved the right to reject election outcomes he doesn\'t personally deem "honest" — the foundational threat to every other category.',
        evidence: [
          'Trump told NBC\'s Tom Llamas (Feb 5, 2026): "I will [accept midterm outcomes] if the elections are honest... if not, something else has to happen."',
          "After 2020, this approach led directly to the January 6 Capitol attack.",
          "The pattern of preemptive rejection dates back to the 2012 Emmys, 2016 primaries, 2020 election, and now 2026.",
        ],
        sources: [
          { label: "Truthout: Trump Says He'll Only Accept If 'Honest'", url: "https://truthout.org/articles/trump-says-hell-only-accept-2026-midterms-if-he-deems-them-honest/" },
          { label: "CBS News: Trump on 2026 Results", url: "https://www.cbsnews.com/video/trump-says-hell-accept-2026-midterm-results-if-the-elections-are-honest/" },
          { label: "ABC News: Timeline of Election Denial Claims", url: "https://abcnews.com/Politics/timeline-donald-trumps-election-denial-claims-republican-politicians/story?id=89168408" },
        ],
        riskLevel: "VERY HIGH",
        organizations: [
          { name: "Protect Democracy", url: "protectdemocracy.org", description: 'Published "The Authoritarian Playbook for 2025"' },
          { name: "Democracy Docket", url: "democracydocket.com", description: "Won 64 of 65 cases against 2020 election challenges" },
          { name: "Brennan Center", url: "brennancenter.org", description: "Committee for Safe and Secure Elections (CSSE)" },
        ],
        gaps: [
          "By reserving the right to reject outcomes, Trump creates a permission structure for supporters to view legitimate losses as illegitimate",
          "No legal mechanism prevents a sitting president from publicly delegitimizing election results",
          "The Jan 6 precedent shows this rhetoric can translate directly to political violence",
        ],
      },
      {
        id: "ballot-initiatives",
        title: "Attacks on Ballot Initiative Processes",
        description:
          "A systematic, multi-state campaign to restrict citizens' ability to place measures on the ballot — one of the last direct democratic tools available to voters.",
        evidence: [
          "In 2025, 295 bills were introduced in 43 states impacting the ballot initiative process, with at least 156 seeking to restrict it.",
          "Missouri proposed changes allowing as few as 5% of statewide voters to defeat a ballot question.",
          "Arkansas passed 5 laws targeting the initiative process, including mandating canvassers check signers' photo ID.",
        ],
        sources: [
          { label: "Ballot Initiative Strategy Center: Attacks and Threats", url: "https://ballot.org/attacks-threats/" },
          { label: "Missouri Independent: 5% of Voters Could Defeat Initiatives", url: "https://missouriindependent.com/2025/09/04/as-few-as-5-of-voters-could-defeat-initiative-petitions-under-missouri-gop-legislation/" },
        ],
        riskLevel: "MEDIUM-HIGH",
        organizations: [
          { name: "Ballot Initiative Strategy Center", url: "ballot.org", description: "Tracks and fights attacks on the initiative process" },
          { name: "ACLU", url: "aclu.org", description: "Legal challenges to unconstitutional initiative restrictions" },
        ],
        gaps: [
          "The sheer volume of legislation (295 bills in 43 states) is overwhelming legal challenge capacity",
          "Even where laws are blocked, the chilling effect on petition circulators is immediate",
          "No coordinated national defense exists for ballot initiative rights across states",
        ],
      },
    ],
  },
];
