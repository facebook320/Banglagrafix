/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'bn';

export interface Service {
  id: string;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: { en: string; bn: string };
  image: string;
  category: { en: string; bn: string };
}

export const SERVICES: Service[] = [
  {
    id: 'logo',
    title: { en: 'Logo Design', bn: 'লোগো ডিজাইন' },
    description: { en: 'Crafting unique brand identities.', bn: 'ইউনিক ব্র্যান্ড আইডেন্টিটি তৈরি।' },
    icon: 'PenTool',
  },
  {
    id: 'uiux',
    title: { en: 'UI/UX Design', bn: 'ইউআই/ইউএক্স ডিজাইন' },
    description: { en: 'Intuitive digital experiences.', bn: 'সহজ ও সুন্দর ডিজিটাল অভিজ্ঞতা।' },
    icon: 'Layout',
  },
  {
    id: 'print',
    title: { en: 'Print Media', bn: 'প্রিন্ট মিডিয়া' },
    description: { en: 'High-quality print designs.', bn: 'উন্নত মানের প্রিন্ট ডিজাইন।' },
    icon: 'Printer',
  },
  {
    id: 'social',
    title: { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' },
    description: { en: 'Engaging content for brands.', bn: 'ব্র্যান্ডের জন্য আকর্ষণীয় কন্টেন্ট।' },
    icon: 'Share2',
  },
  {
    id: 'banner',
    title: { en: 'Banner Design', bn: 'ব্যানার ডিজাইন' },
    description: { en: 'Bold visual communication.', bn: 'বোল্ড ভিজ্যুয়াল কমিউনিকেশন।' },
    icon: 'Image',
  },
  {
    id: 'brand',
    title: { en: 'Brand Strategy', bn: 'ব্র্যান্ড স্ট্র্যাটেজি' },
    description: { en: 'Scaling your business visually.', bn: 'ব্যবসায়িক প্রবৃদ্ধি নিশ্চিত করা।' },
    icon: 'Target',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: { en: 'Brand Strategy', bn: 'ব্র্যান্ড স্ট্র্যাটেজি' },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
    category: { en: 'Corporate', bn: 'কর্পোরেট' },
  },
  {
    id: '2',
    title: { en: 'Digital Arts', bn: 'ডিজিটাল আর্টস' },
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
    category: { en: 'Artistic', bn: 'আর্টিস্টিক' },
  },
  {
    id: '3',
    title: { en: 'Visual Impact', bn: 'ভিজ্যুয়াল ইমপ্যাক্ট' },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391',
    category: { en: 'Visuals', bn: 'ভিজ্যুয়াল' },
  },
  {
    id: '4',
    title: { en: 'Modern Identity', bn: 'মডার্ন আইডেন্টিটি' },
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
    category: { en: 'Identity', bn: 'আইডেন্টিটি' },
  },
];

export const ASSETS = {
  LOGO: 'https://www.image2url.com/r2/default/images/1777789492779-ebcf5f7a-624f-4fe7-b206-d2360a28a681.png',
  WELCOME_AUDIO: 'https://www.image2url.com/r2/default/audio/1777792155298-3c8060b1-c527-4848-af53-cdf535d3b4f4.mp3',
  CLICK_AUDIO: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
};
