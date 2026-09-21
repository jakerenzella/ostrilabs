export const site = {
  name: "Emulabs",
  product: "OMNI-01",
  tagline: "The results speak for themselves.",
  price: "1 bushel",
  priceUnit: "per animal, per season",
};

export const nav = [
  { label: "OMNI-01", href: "#omni" },
  { label: "Findings", href: "#findings" },
  { label: "Our emus", href: "#emus" },
  { label: "Questions", href: "#questions" },
];

export const marquee = [
  "Stronger*",
  "Taller*",
  "Shinier*",
  "Faster*",
  "Happier*",
  "Everything*",
];

export const comparison = {
  columns: ["Premium feed", "OMNI-01"],
  rows: [
    { label: "Price per animal, per season", values: ["1 bushel", "1 bushel"] },
    { label: "Feeds you", values: ["Yes", "Yes*"] },
    { label: "Tested on emus", values: ["No", "Yes"] },
    { label: "Tested on you", values: ["Every winter so far", "Not yet"] },
    { label: "New", values: ["No", "Very"] },
    { label: "Findings", values: ["None published", "Six"] },
  ],
  footnote:
    "*OMNI-01 is a supplement. Supplements supplement. Please keep eating.",
};

export const benefits = [
  {
    icon: "muscle",
    title: "Stay strong and healthy",
    copy: "Every emu who took OMNI-01 stayed an emu. That kind of consistency is hard to find.",
  },
  {
    icon: "sprout",
    title: "Support growth and vitality",
    copy: "Our trial emus grew noticeably over three weeks.†",
    footnote: "†Participants were four to seven months old.",
  },
  {
    icon: "flask",
    title: "New scientific ideas",
    copy: "OMNI-01 is built on ideas so new that nobody has tested them. Not even us.",
  },
  {
    icon: "rocket",
    title: "Try something new",
    copy: "Nothing has ever been this new. Coolabah Creek deserves a chance to find out what that means.",
  },
];

export const ingredients = {
  heading: "What's inside",
  list: [
    "Proprietary Omni-Complex",
    "Seed meal",
    "Meadow greens",
    "A pinch of creek",
  ],
  note: "Quantities are proprietary. That's what makes it a complex.",
};

export const steps = [
  {
    title: "Scoop",
    copy: "One scoop, once a day, on top of the food you were going to eat anyway.",
  },
  {
    title: "Stride",
    copy: "Go about your day. Something is probably happening.",
  },
  {
    title: "Speak for yourself",
    copy: "Tell The GumDrop how you feel. Your post is our next finding.",
  },
];

export const stats = [
  { value: "100%", label: "of emus who took OMNI-01 reported feeling taller", note: 1 },
  { value: "6 of 6", label: "trial participants completed the trial", note: 2 },
  { value: "0", label: "side effects reported", note: 3 },
  { value: "1", label: "study, peer reviewed", note: 4 },
];

export const statNotes = [
  "Feelings of height were self-reported. Height was not measured.",
  "The trial ran for three weeks in the Emulabs shed, where the participants live.",
  "A side-effect reporting form is being finalised.",
  "Reviewed by Ellie's peers Enid and Ernie, who are also emus, who also work here.",
];

export const chart = {
  title: "Vitality, before and after OMNI-01",
  axis: "Vitality (Emulabs units)",
  bars: [
    { label: "Before", value: 3 },
    { label: "After", value: 9 },
  ],
  caption:
    "Vitality was rated by Ellie on a scale of her choosing. The ‘before’ ratings were collected afterwards, from memory.",
};

export const badges = [
  { title: "Field tested", copy: "Every one of our findings was found in a field." },
  { title: "Peer reviewed", copy: "Ellie's peers had a look. They're emus. They said it looked great." },
  { title: "Clinically observed", copy: "Observed in The Clinic, which used to be the shed, and still is." },
  { title: "Published", copy: "Twice, on The GumDrop. Both posts did numbers." },
  { title: "Controlled trial", copy: "Ellie was in complete control throughout." },
  { title: "Backed by science", copy: "Backed by a scientist. Ernie has a coat." },
];

export const study = {
  title: "Observed Vitality in Six Emus Following Daily OMNI-01",
  shortTitle: "The EMU-1 Study",
  authors: "E. Emu, E. Emu, E. Emu and E. Emu",
  affiliation: "Emulabs, The Clinic (formerly the shed), the farm next door",
  sections: [
    {
      heading: "Background",
      body: "Emulabs wanted to know whether OMNI-01 works. This study was designed to find that it does.",
    },
    {
      heading: "Methods",
      body: "Six emus employed by Emulabs took one scoop of OMNI-01 daily for three weeks. Vitality was assessed by the lead author, who is also the founder, who also made the supplement. No comparison group was used, because all available emus were already in the trial. Participants were not blinded. Neither was Ellie, who prefers to see the results.",
    },
    {
      heading: "Results",
      body: "All six emus reported feeling great. Vitality rose from 3 to 9 Emulabs units. One participant grew four centimetres; this participant is five months old. No side effects were reported, and no side effects were asked about.",
    },
    {
      heading: "Conclusion",
      body: "The results speak for themselves. Further research is not planned, as we are quite happy with this one.",
    },
  ],
  declarations: [
    "Funding: Emulabs.",
    "Conflicts of interest: none that we consider conflicts.",
    "Ethics approval: Ellie approved.",
    "Data availability: the data are available on request. Requests are currently paused while we find the data.",
  ],
  status: "Peer reviewed by two peers. Published on The GumDrop.",
};

export const testimonials = [
  { quote: "I feel taller.", name: "Ernie", detail: "Emu, 1.8 metres", variant: "coat" },
  { quote: "I finished the whole tin.", name: "Eddie", detail: "Emu, participant 3", variant: "cap" },
  { quote: "Everything's better. I couldn't say what.", name: "Enid", detail: "Emu, peer", variant: "glasses" },
  { quote: "I grew four centimetres!", name: "Esme", detail: "Emu, five months old", variant: "bow" },
  { quote: "Ellie said I look great.", name: "Errol", detail: "Emu, Head of Growth", variant: "plain" },
  { quote: "Same.", name: "Edna", detail: "Emu, participant 6", variant: "scarf" },
] as const;

export const testimonialsNote =
  "Six participants. Six five-star reviews. Reviews were collected by Ellie, in person, at work, on payday.";

export const team = [
  {
    name: "Ellie Emu",
    role: "Founder and Chief Everything Officer",
    bio: "Ellie started Emulabs after noticing how healthy she was. ‘I looked at myself and thought, more animals should have this.’ She does most of the talking and all of the deciding.",
    variant: "lanyard",
  },
  {
    name: "Ernie Emu",
    role: "Chief Findings Officer",
    bio: "Ernie finds things. Seeds, mostly, but also findings. He owns the coat.",
    variant: "coat",
  },
  {
    name: "Enid Emu",
    role: "Head of Peer Review",
    bio: "As Ellie's peer, Enid has reviewed. She found the findings very findable.",
    variant: "glasses",
  },
  {
    name: "Errol Emu",
    role: "Head of Growth",
    bio: "Errol is our fastest-growing department. He is also five months old.",
    variant: "plain",
  },
] as const;

export const omniCheck = {
  animals: ["Cow", "Sheep", "Kangaroo", "Chicken", "Cockatoo", "Wombat", "Puppy", "Emu"],
  goals: ["Strength", "Growth", "Vitality", "Everything"],
};

export const plan = {
  price: "1 bushel",
  unit: "per animal, per season",
  copy: "Exactly what Coolabah Creek was about to spend on premium feed. Spend it on the future instead.",
  includes: [
    "One tin of OMNI-01",
    "One scoop",
    "Our findings, printed on the tin",
    "A sticker",
    "Ellie's personal reassurance",
  ],
  note: "Reservations are noted on a clipboard. No bushels change hands until the vote.",
};

export const faqs = [
  {
    q: "Is OMNI-01 safe?",
    a: "Every emu who has taken OMNI-01 is still an emu, and still here. We have received no reports otherwise, and our reporting form is nearly finished.",
  },
  {
    q: "Has OMNI-01 been tested on cows, sheep, chickens, kangaroos or wombats?",
    a: "OMNI-01 has been tested extensively on emus. We see no reason other animals would be different, and we have not looked.",
  },
  {
    q: "Is OMNI-01 a medicine?",
    a: "No. OMNI-01 makes no medical claims. It makes omni claims, which are broader.",
  },
  {
    q: "Who reviewed your research?",
    a: "Our peers. Emulabs is staffed entirely by emus, so every review is a peer review.",
  },
  {
    q: "Can I see the data?",
    a: "The data are available on request. Requests are currently paused while we find the data.",
  },
  {
    q: "What is actually in it?",
    a: "Our Omni-Complex is proprietary. If we told you, it would just be a list.",
  },
  {
    q: "Why does it cost exactly the same as premium feed?",
    a: "Coincidence. Also convenience. Also, that is how much you have.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "It worked for everyone we asked. If it doesn't work for you, you may be an outlier, and we would love to hear about it once the form is ready.",
  },
];

export const closing = {
  heading: "A healthier Coolabah Creek starts with OMNI-01.",
  copy: "The vote is coming. Ellie will be there. So will the results, speaking for themselves.",
};

export const legal = {
  inCharacter:
    "OMNI-01 is a dietary supplement, not a treatment, medicine or meal. Statements on this site have not been evaluated by anyone who does not work here. Findings describe six emus over three weeks. Individual results may vary from ours, and yours may be the first to. Keep eating your food.",
  outOfCharacter:
    "Emulabs is a fictional company in the Coolabah Creek learning game. Nothing on this site is health advice.",
};
