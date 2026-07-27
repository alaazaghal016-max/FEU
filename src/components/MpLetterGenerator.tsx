import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, Building2, User, Mail, ShieldAlert } from 'lucide-react';

export const MpLetterGenerator: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPostalCode, setUserPostalCode] = useState('');
  const [userRiding, setUserRiding] = useState('');
  const [copied, setCopied] = useState(false);

  const defaultMpName = "Member of Parliament";

  const letterSubject = "Urgent Policy Action: Arctic Climate Justice, Inuit Human Rights & TRC Environmental Stewardship";

  const generatedLetter = `To ${defaultMpName},

My name is ${userName || '[Your Name]'}, a constituent in ${userRiding ? `the riding of ${userRiding}` : 'your riding'} (${userPostalCode || '[Postal Code]'}).

I am writing to express my urgent concern regarding Arctic climate change as an ongoing human rights and climate justice crisis for Inuit communities across Inuit Nunangat. 

As researched in my Grade 11 NBE3U studies, the Arctic is warming at over three times the global average rate. Thinning sea ice, coastal erosion, and toxic bioaccumulation of Persistent Organic Pollutants (POPs) jeopardize traditional hunting safety, food sovereignty, and cultural continuity for over 150,000 Arctic Indigenous people.

In accordance with the groundbreaking advocacy of Inuk leader Sheila Watt-Cloutier and the Truth and Reconciliation Commission's 94 Calls to Action, I call upon the House of Commons and the federal government to:

1. ENFORCE AMBITIOUS CARBON TARGETS: Enact stringent national emission reduction targets aligned with keeping global warming strictly below 1.5°C to protect Arctic ice.
2. SUPPORT INUIT-LED CLIMATE GOVERNANCE: Partner directly with the Inuit Circumpolar Council (ICC Canada) and integrate Inuit Qaujimajatuqangit (traditional knowledge) into federal environmental policy.
3. FULL IMPLEMENTATION OF TRC CALLS TO ACTION: Respect Indigenous land rights, environmental sovereignty, and resource co-management across Canada.

The right to be cold is inseparable from basic human rights, dignity, and cultural survival. I look forward to your response on how our government is addressing Arctic climate justice.

Sincerely,

${userName || '[Your Name]'}
${userPostalCode ? `Postal Code: ${userPostalCode}` : ''}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${letterSubject}\n\n${generatedLetter}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6" id="mp-letter-generator">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Interactive Call to Action Tool
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Write to Your Member of Parliament (MP)
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Advocate for binding emission reductions, Inuit climate sovereignty, and TRC Calls to Action.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors shadow-md cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Letter Copied to Clipboard!' : 'Copy Letter to Clipboard'}</span>
          </button>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Your Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Alex Tremblay"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Postal Code (Optional)
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={userPostalCode}
              onChange={(e) => setUserPostalCode(e.target.value)}
              placeholder="e.g. M5V 2T6"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Electoral Riding (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={userRiding}
              onChange={(e) => setUserRiding(e.target.value)}
              placeholder="e.g. Ottawa Centre"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Letter Box Preview */}
      <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 relative group">
        <div className="text-cyan-400 font-semibold border-b border-slate-800 pb-2">
          Subject: {letterSubject}
        </div>
        <pre className="whitespace-pre-wrap font-mono font-normal text-slate-300">
          {generatedLetter}
        </pre>
      </div>

      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
        <span>Find your local MP's contact details at <strong>ourcommons.ca/members</strong></span>
        <a 
          href="https://www.ourcommons.ca/members/en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
        >
          Look Up MP Postal Code &rarr;
        </a>
      </div>
    </div>
  );
};
