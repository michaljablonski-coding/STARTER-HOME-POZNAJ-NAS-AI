import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}