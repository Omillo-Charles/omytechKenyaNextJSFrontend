'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FiCheck, FiSend } from 'react-icons/fi';

export default function QuotePage() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || 'Web Development';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: serviceParam,
    timeline: '',
    budget: '',
    currency: 'USD',
    description: '',
    // Web Development & Mobile App specific
    features: [],
    hosting: '',
    domain: '',
    maintenance: '',
    // UI/UX Design specific
    designType: [],
    platforms: [],
    pages: '',
    // Digital Marketing specific
    marketingChannels: [],
    campaignDuration: '',
    targetAudience: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, service: serviceParam }));
  }, [serviceParam]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const arrayField = formData[name];
      if (checked) {
        setFormData({ ...formData, [name]: [...arrayField, value] });
      } else {
        setFormData({ ...formData, [name]: arrayField.filter(item => item !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    setSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const renderServiceSpecificFields = () => {
    switch (formData.service) {
      case 'Web Development':
      case 'Mobile App Design':
        return (
          <>
            <div className="quote-form-group">
              <label className="quote-label">Features Required *</label>
              <div className="quote-checkbox-group">
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="features"
                    value="Frontend"
                    checked={formData.features.includes('Frontend')}
                    onChange={handleChange}
                  />
                  <span>Frontend Development</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="features"
                    value="Backend"
                    checked={formData.features.includes('Backend')}
                    onChange={handleChange}
                  />
                  <span>Backend Development</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="features"
                    value="Database"
                    checked={formData.features.includes('Database')}
                    onChange={handleChange}
                  />
                  <span>Database Design</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="features"
                    value="API"
                    checked={formData.features.includes('API')}
                    onChange={handleChange}
                  />
                  <span>API Integration</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="features"
                    value="Authentication"
                    checked={formData.features.includes('Authentication')}
                    onChange={handleChange}
                  />
                  <span>User Authentication</span>
                </label>
              </div>
            </div>

            <div className="quote-form-row">
              <div className="quote-form-group">
                <label className="quote-label">Need Hosting? *</label>
                <select
                  name="hosting"
                  value={formData.hosting}
                  onChange={handleChange}
                  className="quote-select"
                  required
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes, include hosting</option>
                  <option value="No">No, I have hosting</option>
                  <option value="Advice">Need advice</option>
                </select>
              </div>

              <div className="quote-form-group">
                <label className="quote-label">Need Domain? *</label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="quote-select"
                  required
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes, register domain</option>
                  <option value="No">No, I have domain</option>
                  <option value="Advice">Need advice</option>
                </select>
              </div>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Maintenance Plan *</label>
              <select
                name="maintenance"
                value={formData.maintenance}
                onChange={handleChange}
                className="quote-select"
                required
              >
                <option value="">Select maintenance plan</option>
                <option value="None">No maintenance needed</option>
                <option value="Monthly">Monthly maintenance</option>
                <option value="Quarterly">Quarterly maintenance</option>
                <option value="Yearly">Yearly maintenance</option>
                <option value="Custom">Custom plan</option>
              </select>
            </div>
          </>
        );

      case 'UI/UX Design':
        return (
          <>
            <div className="quote-form-group">
              <label className="quote-label">Design Type *</label>
              <div className="quote-checkbox-group">
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="designType"
                    value="Website"
                    checked={formData.designType.includes('Website')}
                    onChange={handleChange}
                  />
                  <span>Website Design</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="designType"
                    value="Mobile App"
                    checked={formData.designType.includes('Mobile App')}
                    onChange={handleChange}
                  />
                  <span>Mobile App Design</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="designType"
                    value="Dashboard"
                    checked={formData.designType.includes('Dashboard')}
                    onChange={handleChange}
                  />
                  <span>Dashboard/Admin Panel</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="designType"
                    value="Branding"
                    checked={formData.designType.includes('Branding')}
                    onChange={handleChange}
                  />
                  <span>Branding & Identity</span>
                </label>
              </div>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Platforms *</label>
              <div className="quote-checkbox-group">
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Desktop"
                    checked={formData.platforms.includes('Desktop')}
                    onChange={handleChange}
                  />
                  <span>Desktop</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Tablet"
                    checked={formData.platforms.includes('Tablet')}
                    onChange={handleChange}
                  />
                  <span>Tablet</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Mobile"
                    checked={formData.platforms.includes('Mobile')}
                    onChange={handleChange}
                  />
                  <span>Mobile</span>
                </label>
              </div>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Number of Pages/Screens *</label>
              <input
                type="text"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                className="quote-input"
                placeholder="e.g., 5-10 pages"
                required
              />
            </div>
          </>
        );

      case 'Digital Marketing':
        return (
          <>
            <div className="quote-form-group">
              <label className="quote-label">Marketing Channels *</label>
              <div className="quote-checkbox-group">
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value="Social Media"
                    checked={formData.marketingChannels.includes('Social Media')}
                    onChange={handleChange}
                  />
                  <span>Social Media Marketing</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value="SEO"
                    checked={formData.marketingChannels.includes('SEO')}
                    onChange={handleChange}
                  />
                  <span>SEO Optimization</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value="Content Marketing"
                    checked={formData.marketingChannels.includes('Content Marketing')}
                    onChange={handleChange}
                  />
                  <span>Content Marketing</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value="Email Marketing"
                    checked={formData.marketingChannels.includes('Email Marketing')}
                    onChange={handleChange}
                  />
                  <span>Email Marketing</span>
                </label>
                <label className="quote-checkbox-label">
                  <input
                    type="checkbox"
                    name="marketingChannels"
                    value="PPC"
                    checked={formData.marketingChannels.includes('PPC')}
                    onChange={handleChange}
                  />
                  <span>PPC Advertising</span>
                </label>
              </div>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Campaign Duration *</label>
              <select
                name="campaignDuration"
                value={formData.campaignDuration}
                onChange={handleChange}
                className="quote-select"
                required
              >
                <option value="">Select duration</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Target Audience *</label>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                className="quote-textarea"
                placeholder="Describe your target audience (age, location, interests, etc.)"
                rows="3"
                required
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="quote-page">
        <div className="quote-success">
          <div className="quote-success-icon">
            <FiCheck />
          </div>
          <h1>Quote Request Submitted!</h1>
          <p>Thank you for your interest. We'll review your requirements and get back to you within 24 hours.</p>
          <a href="/" className="quote-success-btn">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="quote-page">
      <div className="quote-container">
        <div className="quote-header">
          <h1 className="quote-title">Request a Quote</h1>
          <p className="quote-subtitle">Tell us about your project and we'll provide a detailed quote</p>
        </div>

        <form onSubmit={handleSubmit} className="quote-form">
          {/* Basic Information */}
          <div className="quote-section">
            <h2 className="quote-section-title">Contact Information</h2>
            
            <div className="quote-form-row">
              <div className="quote-form-group">
                <label className="quote-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="quote-input"
                  required
                />
              </div>

              <div className="quote-form-group">
                <label className="quote-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="quote-input"
                  required
                />
              </div>
            </div>

            <div className="quote-form-row">
              <div className="quote-form-group">
                <label className="quote-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="quote-input"
                  required
                />
              </div>

              <div className="quote-form-group">
                <label className="quote-label">Company Name (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="quote-input"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="quote-section">
            <h2 className="quote-section-title">Project Details</h2>
            
            <div className="quote-form-group">
              <label className="quote-label">Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="quote-select"
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Design">Mobile App Design</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="E-commerce Solutions">E-commerce Solutions</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Consulting & Automation">Consulting & Automation</option>
              </select>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Timeline *</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="quote-select"
                required
              >
                <option value="">Select timeline</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="3-4 weeks">3-4 weeks</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="quote-form-group">
              <label className="quote-label">Budget *</label>
              <div className="quote-budget-wrapper">
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="quote-currency-select"
                  required
                >
                  <option value="USD">USD</option>
                  <option value="KES">KES</option>
                </select>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="quote-budget-input"
                  placeholder="Enter your budget"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {renderServiceSpecificFields()}

            <div className="quote-form-group">
              <label className="quote-label">Project Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="quote-textarea"
                placeholder="Tell us more about your project, goals, and any specific requirements..."
                rows="5"
                required
              />
            </div>
          </div>

          <button type="submit" className="quote-submit-btn">
            <FiSend /> Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}
