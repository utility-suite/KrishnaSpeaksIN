export interface BlogEntry {
  slug: string;
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
  content: string[];
  tags: string[];
}

export const blogData: BlogEntry[] = [
   {
  slug: 'thoughtful-decision-making-guide',
  image: 'assets/image/blog/DecisionMakingGuide.png',
  date: '2025-08-03',
  author: 'Krishna Kumar Pandey',
  title: '"Pause Before You Decide" – A Thoughtful Guide to Better Decisions',
  description: 'A practical, expressive guide on how to make mindful decisions by checking legality, balance, fairness, emotional impact, and long-term value. Powered by Krishna Speaks IN.',
  tags: ['Decision Making', 'Life Skills', 'Self Growth'],
  content: [
         `<p class="mb-4">In our fast-paced world, decisions often come flying at us like arrows—some small, like what to eat for dinner, and others life-altering, like switching careers, ending a relationship, or moving cities. While it’s tempting to react instantly, <strong>the true strength lies in the pause</strong>—a moment to reflect and ask yourself: <em>“Is this really the right step?”</em></p>

          <p class="mb-4">At <strong>Krishna Speaks IN</strong>, we believe that mindful decision-making isn’t just a skill—it’s a lifestyle choice. Whether you’re navigating personal challenges or professional dilemmas, consider this powerful checklist to guide your choices:</p>

          <h4 class="text-xl font-semibold mt-6 mb-2">1. Is It Legal?</h4>
          <p class="mb-4">Let’s start with the obvious. No matter how tempting the shortcut or how urgent the need, <strong>if it breaks the law—it breaks you</strong> in the long run. Think of legal boundaries as the non-negotiable foundation. You don’t want your decision to turn into a courtroom drama later.</p>

          <p class="mb-4"><strong>Example:</strong> Say you’re building your personal blog. Using copyrighted content without credit or permission might seem harmless at first. But in the long run, it could land you into legal trouble and ruin your credibility. Stick with originality or proper attribution—it’s not only legal, it’s ethical.</p>

          <h4 class="text-xl font-semibold mt-6 mb-2">2. Is It Balanced?</h4>
          <p class="mb-4">A decision shouldn't throw your life off the axis. Balance means ensuring that <strong>your health, time, relationships, and energy</strong> aren't being sacrificed completely for one aspect—be it money, work, or ambition.</p>

          <p class="mb-4"><strong>Real-life flash:</strong> If you're planning to start a side hustle while working a full-time job, ask: <em>Will this burn me out? Will I still have time for my family, sleep, or a Sunday break?</em> If the answer is no, it’s time to reassess.</p>

          <h4 class="text-xl font-semibold mt-6 mb-2">3. Is It Fair?</h4>
          <p class="mb-4">Fairness goes beyond what benefits <em>you</em>—it considers how your decision affects others involved. Is your choice trampling on someone else’s peace, opportunity, or growth?</p>

          <p class="mb-4"><strong>Think of this:</strong> You get an offer to jump ship from your current job right after your teammate trained you for a big collaborative project. Taking the offer might seem smart, but fairness asks—<em>Am I being just to my team, my responsibilities, my word?</em></p>

          <h4 class="text-xl font-semibold mt-6 mb-2">4. Is It a Win-Win?</h4>
          <p class="mb-4">The best decisions don’t leave losers behind. A win-win outcome benefits you <em>and</em> others, creating lasting partnerships and mutual respect. If your decision makes someone else lose face, money, or dignity—it might not be the right call.</p>

          <p class="mb-4"><strong>Example:</strong> As the founder of <strong>Krishna Speaks IN</strong>, imagine collaborating with a fellow blogger. You both want visibility. Instead of competing, you co-author a post—doubling your reach, combining wisdom, and gaining each other’s audience. That’s a win-win.</p>

          <h4 class="text-xl font-semibold mt-6 mb-2">5. Feeling Check – What Do You Feel, and What Will Your Family Feel?</h4>
          <p class="mb-4">Gut feelings matter. But so do the hearts of the people who love you. If a decision fills you with guilt, fear, or unease, pay attention. Ask yourself:</p>
          <ul class="list-disc list-inside mb-4">
            <li>Would I be proud sharing this with my parents or partner?</li>
            <li>How will they feel if I go through with this?</li>
          </ul>

          <p class="mb-4"><strong>Picture this:</strong> You're offered a job abroad with double the pay. Exciting, right? But your ailing parents depend on your presence, your child needs your guidance, and you know you’ll miss key years of togetherness. In such moments, <em>feelings carry more truth than numbers ever will</em>.</p>

          <h4 class="text-xl font-semibold mt-6 mb-2">Always Think Long-Term — Look at the Bigger Picture</h4>
          <p class="mb-4">Sometimes the short-term gain clouds the long-term cost. But <strong>time reveals all truths</strong>. Think five years ahead:</p>
          <ul class="list-disc list-inside mb-4">
            <li>Will this decision still make sense?</li>
            <li>Is it sustainable, or is it just a shiny distraction?</li>
            <li>Does it contribute to the life you're building?</li>
          </ul>

          <p class="mb-4">At <strong>Krishna Speaks IN</strong>, we say: zoom out before you zoom in. Whether it's accepting a business deal or saying yes to a new relationship, think about <em>where it leads</em>.</p>

          <h4 class="text-xl font-semibold mt-6 mb-2">Final Thoughts</h4>
          <p class="mb-4">Decisions are the bricks that build your future. Each one—small or large—adds to your story. Use this 5-point checklist like your personal compass:</p>

          <ul class="list-disc list-inside mb-4">
            <li>Legal?</li>
            <li>Balanced?</li>
            <li>Fair?</li>
            <li>Win-win?</li>
            <li>Feel right to you and your loved ones?</li>
          </ul>

          <p class="mb-4">Because at the end of the day, a good decision doesn’t just work out—it <em>feels right, fits right, and lives right</em>.</p>

          <p class="mt-6">Stay thoughtful. Stay grounded. — <em>Krishna from Krishna Speaks IN</em></p>`
    ]
  },
  {
  slug: 'hindi-poem-sukoon-ki-talaash',
  image: 'assets/image/blog/SukoonKiTalaash.png',
  date: '2025-07-27',
  author: 'Krishna Kumar Pandey',
  title: '"सुकून की तलाश" – एक हिंदी कविता',
  description: 'जीवन की जद्दोजहद, उम्मीद और सुकून की तलाश पर आधारित एक भावुक हिंदी कविता।',
  tags: ['कविता'],
  content: [
          `<div class="text-center">
            <p>रात भर सोचता रहा,<br />
            अपने को कोसता रहा।<br />
            काश की होती पढ़ाई, तो<br />
            होती आज मोटी कमाई।</p>

            <br />

            <p>गुजरा हुआ जो कल था,<br />
            चुभ रहा उस पल था।<br />
            एक प्रश्न था जेहन में, जो प्रायः<br />
            होता है हर गरीब के मन में,<br />
            क्या करूँ क्या ना करूँ,<br />
            अब जिन्दा रहूँ या मरुँ।</p>

            <br />

            <p>जिंदगी सस्ती सी लगती थी, क्यूँकि<br />
            मेरा जीवन एक डूबती हुई कश्ती थी।<br />
            फिर भी मन में थी एक आस, क्यूँकि<br />
            मुझे अपनी काबिलियत पर था विश्वास।</p>

            <br />

            <p>आज नहीं तो कल सही,<br />
            मिलेगी तो मंजिल है ही।<br />
            यही सोचकर मैं चलता रहा,<br />
            रात-दिन गिनता रहा।<br />
            आखिर आ गया वह समय था, जिसके लिए<br />
            हर दिन मर-मर कर जिया मैं था।</p>

            <br />

            <p>यह एक खूबसूरत एहसास था,<br />
            जो चाहो वह अपने पास था।<br />
            रूपया था, पैसा था,<br />
            घर भी जन्नत जैसा था।</p>

            <br />

            <p>फिर भी एक चीज की कमी थी,<br />
            वह चीज "सुकून की घड़ी" थी।<br />
            मानों वह बर्फ सी जमी थी,<br />
            शायद अंदर आग की कमी थी।</p>

            <br />

            <p>जिसको पाने की तमन्ना में, अमीर<br />
            गरीब एक तल पर आ जाएँ,<br />
            जिसके मिलने से मानो सब मिल जाये,<br />
            वह सुकून पैसे-रुपयों से कैसे खरीदा जाए?</p>
          </div>`
    ]
  }
];
