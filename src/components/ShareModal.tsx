import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShieldAlert, GraduationCap, Globe, QrCode, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(true);

  if (!isOpen) return null;

  // Ensure the shared URL uses the public 'ais-pre-' prefix instead of the private 'ais-dev-' prefix
  const getPublicUrl = () => {
    let url = window.location.href;
    if (url.includes('ais-dev-')) {
      url = url.replace('ais-dev-', 'ais-pre-');
    }
    return url;
  };

  const publicUrl = getPublicUrl();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-900 via-slate-900 to-teal-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Share Website & QR Code</h3>
              <p className="text-xs text-cyan-200/80">Arctic Climate Justice & Inuit Advocacy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            id="close-share-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {/* QR Code Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-5">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center shrink-0">
              <QRCodeSVG 
                value={publicUrl} 
                size={140}
                level="M"
                includeMargin={false}
              />
              <span className="text-[10px] font-mono text-slate-400 mt-2">Scan with camera</span>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold">
                <QrCode className="w-3.5 h-3.5" />
                <span>Instant QR Code</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Scan to view on Mobile</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scan this QR code with any phone camera to instantly open the public website layout.
              </p>
              <div className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2 leading-tight">
                <strong>QR Code not loading on phone?</strong> Make sure your phone isn't signed into a restricted school Google account, or use Incognito mode!
              </div>
            </div>
          </div>

          {/* Public Link Copy Section */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Direct Website URL
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={publicUrl}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 select-all"
              />
              <button
                onClick={handleCopy}
                id="copy-public-link-btn"
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-sm'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Open Link */}
          <div className="flex justify-end">
            <a
              href={publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 hover:text-cyan-900 hover:underline"
            >
              <span>Test Public Link in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* School Account / Phone Guidance Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2.5 text-amber-900">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
              <GraduationCap className="w-5 h-5 text-amber-700 shrink-0" />
              <span>Why QR Codes / Links Say "Page Not Found"?</span>
            </div>
            <p className="text-xs leading-relaxed text-amber-800">
              School board Google accounts (<code className="bg-amber-100/80 px-1 py-0.5 rounded text-[11px] font-mono">@school.edu</code> / district logins) block external app previews or show <strong>"Action Required"</strong> or <strong>"Page Not Found"</strong> because of district firewall security policies.
            </p>
            
            <div className="bg-white/80 rounded-lg p-3 text-xs space-y-1.5 border border-amber-200/80 text-slate-800">
              <div className="font-bold text-amber-900 text-[11px] uppercase tracking-wider">
                How to make the QR code / link work for everyone:
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>In AI Studio, click the <strong>Share</strong> button at the top-right of the AI Studio window.</li>
                <li>Set access permissions to <strong>"Anyone with the link can view"</strong>.</li>
                <li>On phones, open the link or QR code in an <strong>Incognito / Private Window</strong> (or a personal Gmail account).</li>
              </ol>
            </div>
          </div>

          {/* Publishing Outside Google AI Studio (Netlify / Vercel / GitHub) */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2.5 text-emerald-950">
            <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
              <Globe className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Want to Host Outside AI Studio (Free Public Website)?</span>
            </div>
            <p className="text-xs leading-relaxed text-emerald-800">
              If your school board blocks AI Studio links, you can export and publish this website for <strong>100% free</strong> on Netlify or Vercel:
            </p>
            <ol className="list-decimal list-inside text-xs space-y-1.5 text-slate-800 bg-white/90 p-3 rounded-lg border border-emerald-200">
              <li>In AI Studio, click the top <strong>Settings / Gear menu</strong> (or Project Menu) and choose <strong>"Export Project" / "Download ZIP"</strong>.</li>
              <li>Extract the ZIP file on your computer.</li>
              <li>Go to <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-semibold">Netlify Drop (app.netlify.com/drop)</a> or <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-emerald-700 underline font-semibold">Vercel</a>.</li>
              <li>Upload your project folder to get a permanent, custom website link (e.g., <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">https://arctic-climate-justice.netlify.app</code>) that works on all school Chromebooks and accounts!</li>
            </ol>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
