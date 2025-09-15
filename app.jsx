import React, { useState } from 'react';
import { Shield, Eye, Phone, Users, FileSearch, ArrowRight, Home, BarChart3, CheckCircle, AlertTriangle, XCircle, Camera, Mail, Calendar, User, Lock, Globe } from 'lucide-react';

// Mock data for scan results
const mockScanResults = [
  {
    id: 1,
    profileName: "Profile A",
    platform: "Social Media",
    riskLevel: "high",
    score: 25,
    issues: [
      { type: "email", severity: "high", description: "Email address publicly visible" },
      { type: "phone", severity: "medium", description: "Phone number in bio" },
      { type: "photos", severity: "high", description: "12 photos downloadable by strangers" },
      { type: "location", severity: "medium", description: "Location data in posts" }
    ],
    recommendations: [
      "Remove email from public bio",
      "Set photos to friends-only visibility",
      "Disable location sharing in posts",
      "Review privacy settings"
    ]
  },
  {
    id: 2,
    profileName: "Profile B",
    platform: "Professional Network",
    riskLevel: "safe",
    score: 85,
    issues: [
      { type: "info", severity: "low", description: "Professional email visible (expected)" }
    ],
    recommendations: [
      "Continue current privacy practices",
      "Regular privacy checkups recommended"
    ]
  }
];

// Components
const RiskBadge = ({ level }) => {
  const configs = {
    safe: { icon: CheckCircle, color: 'text-green-600 bg-green-100', text: 'Safe 🟢' },
    risk: { icon: AlertTriangle, color: 'text-yellow-600 bg-yellow-100', text: 'Risk ⚠️' },
    high: { icon: XCircle, color: 'text-red-600 bg-red-100', text: 'High Risk 🔴' }
  };
  
  const config = configs[level];
  const Icon = config.icon;
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
      <Icon className="w-4 h-4 mr-1" />
      {config.text}
    </span>
  );
};

const PrivacyScoreMeter = ({ score }) => {
  const getColor = (score) => {
    if (score >= 70) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Privacy Score</span>
        <span className="font-semibold">{score}/100</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full transition-all duration-500 ${getColor(score)}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
        <Icon className="w-6 h-6 text-pink-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-white">{number}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// LandingPage, DashboardPage, App (rest of code)
