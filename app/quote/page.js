"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Box, 
  Typography, 
  Stack, 
  Grid, 
  styled,
  Button,
  useTheme,
  useMediaQuery,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  RequestQuote as QuoteIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Description as DescriptionIcon,
  CheckCircle as SuccessIcon,
  Code as CodeIcon,
  Timeline as TimelineIcon,
  AttachMoney as MoneyIcon
} from "@mui/icons-material";

const MotionBox = motion.create(Box);

const TerminalContainer = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  borderRadius: "24px",
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
    borderLeft: "none",
    borderRight: "none",
  },
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  fontFamily: "'Fira Code', monospace",
  position: "relative",
}));

const TerminalHeader = ({ title, icon }) => (
  <Box sx={{ 
    bgcolor: "#1e293b", 
    px: 2, 
    py: 1.5, 
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center" 
  }}>
    <Stack direction="row" spacing={1.5}>
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ color: "rgba(255,255,255,0.4)", display: "flex", fontSize: "0.9rem" }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: 1 }}>
        {title}
      </Typography>
    </Stack>
  </Box>
);

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.4)',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.85rem',
  },
  '& .MuiInputBase-root': {
    color: 'white',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.9rem',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '12px',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3b82f6',
    },
  },
  '& .MuiInputBase-multiline': {
    padding: '16px',
    alignItems: 'flex-start',
  },
  '& .MuiInputBase-multiline .MuiInputAdornment-root': {
    marginTop: '12px !important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255, 255, 255, 0.4)',
  },
}));

function QuoteForm() {
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
    features: [],
    hosting: '',
    domain: '',
    maintenance: '',
    designType: [],
    platforms: [],
    pages: '',
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
      const arrayField = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...arrayField, value] });
      } else {
        setFormData({ ...formData, [name]: arrayField.filter(item => item !== value) });
      }
    } else {
      if (name === 'service') {
        setFormData({ ...formData, [name]: value, features: [] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const serviceFeatures = {
    'Web Development': [
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'API Integration',
      'Authentication',
      'Admin Panel',
      'E-commerce Integration',
      'SEO Optimization'
    ],
    'Mobile App Design': [
      'iOS App',
      'Android App',
      'Cross-Platform (React Native)',
      'Push Notifications',
      'Offline Support',
      'In-App Purchases',
      'Biometric Auth',
      'Map Integration'
    ],
    'UI/UX Design': [
      'User Research',
      'Wireframing',
      'Interactive Prototyping',
      'Design System',
      'Mobile-First Design',
      'Accessibility Audit',
      'Brand Identity',
      'Usability Testing'
    ],
    'E-commerce Solutions': [
      'Product Catalog',
      'Shopping Cart',
      'Payment Gateway',
      'Inventory Management',
      'Order Tracking',
      'Customer Accounts',
      'Discounts & Coupons',
      'Analytics Dashboard'
    ],
    'Digital Marketing': [
      'Social Media Management',
      'Content Strategy',
      'PPC Campaigns',
      'Email Marketing',
      'SEO Audit',
      'Competitor Analysis',
      'Performance Reporting',
      'Lead Generation'
    ],
    'Consulting & Automation': [
      'Process Mapping',
      'Workflow Automation',
      'Cloud Infrastructure',
      'DevOps Integration',
      'Legacy Migration',
      'Security Audit',
      'AI/ML Integration',
      'Technical Training'
    ]
  };

  const currentFeatures = serviceFeatures[formData.service] || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", px: 2 }}>
        <TerminalContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          sx={{ maxWidth: 600, width: "100%", textAlign: "center" }}
        >
          <TerminalHeader title="status::success" icon={<SuccessIcon fontSize="small" />} />
          <Box sx={{ p: { xs: 4, md: 6 } }}>
            <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
              <SuccessIcon sx={{ fontSize: 64, color: "#10b981" }} />
            </Box>
            <Typography variant="h4" sx={{ color: "white", fontWeight: 900, mb: 2, fontFamily: "'Fira Code', monospace" }}>
              QUOTE_SUBMITTED
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 4, lineHeight: 1.8 }}>
              Thank you for your interest in OMYTECH. Our engineering team has received your request and will review your requirements. We'll get back to you within 24 hours.
            </Typography>
            <Button 
              variant="contained" 
              href="/"
              sx={{ 
                bgcolor: "#3b82f6", 
                color: "white",
                borderRadius: "12px",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "#2563eb" }
              }}
            >
              Back to Home
            </Button>
          </Box>
        </TerminalContainer>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 1000, mx: "auto", px: { xs: 0, sm: 3 } }}>
      <Box sx={{ textAlign: "center", mb: 6, px: 2 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            color: "white", 
            fontWeight: 900, 
            mb: 2, 
            fontFamily: "'Fira Code', monospace",
            fontSize: { xs: "2.5rem", md: "4rem" }
          }}
        >
          REQUEST_QUOTE
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: { xs: "1rem", md: "1.2rem" } }}>
          Tell us about your vision, and let's engineer the future together.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack spacing={{ xs: 2, md: 4 }}>
          {/* Contact Information */}
          <Box>
            <TerminalContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <TerminalHeader title="client::info" icon={<PersonIcon fontSize="small" />} />
              <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Stack spacing={3}>
                  <Box>
                    <StyledTextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box>
                    <StyledTextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box>
                    <StyledTextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box>
                    <StyledTextField
                      fullWidth
                      label="Company (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BusinessIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box>
                    <StyledTextField
                      fullWidth
                      multiline
                      rows={6}
                      label="Project Description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="root@omytech:~# describe project --requirements --goals..."
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Typography sx={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem", mt: 1, textAlign: "right", fontFamily: "'Fira Code', monospace" }}>
                      STATUS: BUFFER_READY | CHAR_COUNT: {formData.description.length}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </TerminalContainer>
          </Box>

          {/* Project Details */}
          <Box>
            <TerminalContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <TerminalHeader title="project::specification" icon={<CodeIcon fontSize="small" />} />
              <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Stack spacing={3}>
                  <Box>
                    <StyledTextField
                      select
                      fullWidth
                      label="Primary Service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="Web Development">Web Development</MenuItem>
                      <MenuItem value="Mobile App Design">Mobile App Design</MenuItem>
                      <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                      <MenuItem value="E-commerce Solutions">E-commerce Solutions</MenuItem>
                      <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
                      <MenuItem value="Consulting & Automation">Consulting & Automation</MenuItem>
                    </StyledTextField>
                  </Box>

                  <Box>
                    <StyledTextField
                      fullWidth
                      label="Expected Timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <TimelineIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <StyledTextField
                          select
                          fullWidth
                          label="Currency"
                          name="currency"
                          value={formData.currency}
                          onChange={handleChange}
                        >
                          <MenuItem value="USD">USD ($)</MenuItem>
                          <MenuItem value="KES">KES (KSh)</MenuItem>
                        </StyledTextField>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <StyledTextField
                          fullWidth
                          label="Budget"
                          name="budget"
                          type="number"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MoneyIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2rem" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </Box>
            </TerminalContainer>
          </Box>

          {/* Required Features Card */}
          <Box>
            <TerminalContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <TerminalHeader title="project::features" icon={<CodeIcon fontSize="small" />} />
              <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 800, mb: 3, fontFamily: "'Fira Code', monospace" }}>
                  SELECT_REQUIRED_MODULES
                </Typography>
                <Grid container spacing={{ xs: 1.5, md: 2 }}>
                  {currentFeatures.map((feat) => (
                    <Grid item xs={12} sm={6} md={3} key={feat}>
                      <Box 
                        onClick={() => {
                          const isChecked = formData.features.includes(feat);
                          const newFeatures = isChecked 
                            ? formData.features.filter(f => f !== feat)
                            : [...formData.features, feat];
                          setFormData({ ...formData, features: newFeatures });
                        }}
                        sx={{ 
                          p: 2, 
                          bgcolor: formData.features.includes(feat) ? "rgba(59, 130, 246, 0.1)" : "rgba(255, 255, 255, 0.02)",
                          borderRadius: "12px",
                          border: "1px solid",
                          borderColor: formData.features.includes(feat) ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.05)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          "&:hover": {
                            bgcolor: formData.features.includes(feat) ? "rgba(59, 130, 246, 0.15)" : "rgba(255, 255, 255, 0.05)",
                            borderColor: formData.features.includes(feat) ? "#3b82f6" : "rgba(255, 255, 255, 0.1)",
                            transform: "translateY(-2px)"
                          }
                        }}
                      >
                        <Checkbox 
                          size="small" 
                          checked={formData.features.includes(feat)} 
                          sx={{ 
                            p: 0,
                            color: "rgba(255,255,255,0.2)", 
                            '&.Mui-checked': { color: "#3b82f6" } 
                          }}
                        />
                        <Typography sx={{ color: formData.features.includes(feat) ? "white" : "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: formData.features.includes(feat) ? 700 : 400 }}>
                          {feat}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                {currentFeatures.length === 0 && (
                  <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", fontStyle: "italic", textAlign: "center", py: 4 }}>
                    Please select a primary service to view available modules.
                  </Typography>
                )}
              </Box>
            </TerminalContainer>
          </Box>

          <Box sx={{ pb: 8 }}>
            <Button 
              type="submit"
              variant="contained" 
              fullWidth
              endIcon={<SendIcon />}
              sx={{ 
                bgcolor: "#3b82f6", 
                color: "white",
                borderRadius: "12px",
                py: 2,
                fontSize: "1rem",
                fontWeight: 900,
                fontFamily: "'Fira Code', monospace",
                textTransform: "none",
                transition: "all 0.2s",
                "&:hover": { 
                  bgcolor: "#2563eb",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                }
              }}
            >
              EXECUTE::SUBMIT_REQUEST
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}

export default function QuotePage() {
  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: "100vh",
        bgcolor: "#020617",
        pt: { xs: 4, md: 8 },
        pb: 12,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Scanline Effect */}
      <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
        zIndex: 10,
        backgroundSize: "100% 2px, 3px 100%",
        pointerEvents: "none"
      }} />

      {/* Dynamic Background Elements */}
      <Box 
        sx={{ 
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          zIndex: 0
        }} 
      />
      <Box 
        sx={{ 
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0
        }} 
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%", px: { xs: 2, sm: 3, md: 6 } }}>
        <Suspense fallback={
          <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ color: "#3b82f6", fontFamily: "'Fira Code', monospace" }}>
              INITIALIZING_SYSTEM...
            </Typography>
          </Box>
        }>
          <QuoteForm />
        </Suspense>
      </Box>
    </Box>
  );
}
