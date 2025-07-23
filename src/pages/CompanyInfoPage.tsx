import React from 'react';
import { Link } from 'react-router-dom';

export default function CompanyInfoPage() {
  // Get current date and last date of this year
  const now = new Date();
  const currentDate = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  const lastDayOfYear = new Date(now.getFullYear(), 11, 31);
  const lastDateOfYear = lastDayOfYear.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-black to-purple-950 pt-24 pb-16 px-2 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-cyan-700/30 relative overflow-hidden">
        {/* Decorative Gradient Blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-purple-500/20 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-purple-600/20 to-cyan-400/10 rounded-full blur-3xl z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 mb-8 text-center drop-shadow-lg">Company Terms</h1>
          <section>
            <h2 className="text-2xl font-bold text-purple-300 mb-2 flex items-center gap-2 justify-center">🧾 OMYTECH Internal Terms of Service</h2>
            <p className="text-cyan-200 mb-4 italic text-center">(For Admins, Employees & Collaborators)</p>
            <div className="text-gray-100 text-base space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                <span className="text-sm text-cyan-300 font-semibold">Effective Date: <span className="text-white">{lastDateOfYear}</span></span>
                <span className="text-sm text-cyan-300 font-semibold">Last Updated: <span className="text-white">{currentDate}</span></span>
              </div>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <b className="text-cyan-300">Introduction</b><br/>
                  Welcome to OMYTECH. These Internal Terms of Service ("Terms") govern your responsibilities, conduct, and rights as an admin, employee, intern, contractor, or collaborator working under any OMYTECH brand or wing, including OMYTECH Studio, OMYLABS, and OMYGEN.<br/>
                  By accepting a position or performing work for OMYTECH, you agree to comply with these Terms at all times.
                </li>
                <li>
                  <b className="text-cyan-300">Confidentiality & Non-Disclosure</b><br/>
                  All internal documents, source code, designs, client data, and company strategies are considered confidential information.<br/>
                  You must not disclose, share, or reuse any internal information without written authorization.<br/>
                  Violating confidentiality rules may result in termination or legal consequences.<br/>
                  You may be required to sign a separate Non-Disclosure Agreement (NDA) for certain projects.
                </li>
                <li>
                  <b className="text-cyan-300">Ownership of Work</b><br/>
                  All work performed under OMYTECH—including but not limited to code, designs, assets, documentation, and ideas—shall be the intellectual property of OMYTECH, unless explicitly agreed otherwise in writing.<br/>
                  Team members are not permitted to reuse or repurpose company work for personal or external use without written consent.
                </li>
                <li>
                  <b className="text-cyan-300">Roles & Responsibilities</b><br/>
                  Each member is expected to:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Perform assigned tasks professionally, ethically, and with diligence.</li>
                    <li>Follow project timelines, documentation standards, and quality expectations.</li>
                    <li>Maintain clear communication with project leads and fellow team members.</li>
                    <li>Use official project tracking and collaboration tools as required.</li>
                  </ul>
                </li>
                <li>
                  <b className="text-cyan-300">Code of Conduct</b><br/>
                  All OMYTECH workers must:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Treat others with respect, fairness, and professionalism.</li>
                    <li>Avoid all forms of harassment, abuse, and discrimination.</li>
                    <li>Uphold company values: innovation, teamwork, quality, and transparency.</li>
                    <li>Immediately report any misconduct, harassment, or violations of these Terms to management or HR.</li>
                  </ul>
                </li>
                <li>
                  <b className="text-cyan-300">Use of Company Resources</b><br/>
                  All tools, platforms, accounts, and materials provided by OMYTECH are to be used solely for official company activities.<br/>
                  Unauthorized use of company branding, designs, or intellectual property is strictly prohibited.<br/>
                  You may not use company resources for freelance or external work without approval.
                </li>
                <li>
                  <b className="text-cyan-300">Compensation & Revenue Sharing</b><br/>
                  Workers will be compensated based on the total amount earned from each project or task.<br/>
                  OMYTECH retains 8% of the total amount earned by a worker as a service, operational, and management fee.<br/>
                  The remaining 92% is paid to the worker upon successful project delivery, approval, and fulfillment of all quality requirements.<br/>
                  For long-term engagements or salaried roles, compensation terms will be specified in separate agreements or contracts.<br/>
                  All payments are subject to:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Completed and approved deliverables</li>
                    <li>Meeting deadlines</li>
                    <li>Satisfactory client feedback</li>
                    <li>Proper submission of time logs or documentation (if applicable)</li>
                  </ul>
                </li>
                <li>
                  <b className="text-cyan-300">Termination</b><br/>
                  OMYTECH reserves the right to suspend or terminate a worker's involvement for violations of these Terms, performance issues, or unethical conduct.<br/>
                  Termination may occur with or without prior notice, depending on the severity of the issue.<br/>
                  Upon termination or resignation, all company property, data, access credentials, and intellectual property must be returned immediately.<br/>
                  Ex-workers may not continue using or distributing any internal materials, repositories, or credentials.
                </li>
                <li>
                  <b className="text-cyan-300">Legal & Compliance</b><br/>
                  Workers are responsible for ensuring their actions comply with local laws and professional standards.<br/>
                  OMYTECH will not be held liable for any unlawful or unauthorized acts performed by individuals under these Terms.<br/>
                  Legal disputes arising from violations may be subject to resolution under the jurisdiction of [Insert Applicable Country or Region].
                </li>
                <li>
                  <b className="text-cyan-300">Updates to These Terms</b><br/>
                  OMYTECH may update or amend these Terms at any time. All workers will be notified of significant changes.<br/>
                  Continued involvement with the company implies acceptance of the most current version of these Terms.
                </li>
              </ol>
              <div className="mt-8 text-green-400 font-semibold text-lg flex items-center gap-2 justify-center">✅ Acknowledgment</div>
              <div className="text-gray-300 text-center">By working with or under OMYTECH, you confirm that you have read, understood, and agree to follow these Internal Terms of Service.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 