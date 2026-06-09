'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/lib/i18n/language-context';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.download, href: '#download' },
    { label: t.nav.faq, href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-5'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">ScanAP</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA and Language */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />

              <a
                href="/scanap.apk"
                download
                className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-xl px-4 py-2">
                <Download className="w-4 h-4" />
                {t.nav.download}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <LanguageSwitcher />
              <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 glass md:hidden">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/scanap.apk"
                  download
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full mt-4 rounded-xl py-3">
                  <Download className="w-4 h-4" />
                  {t.nav.downloadApk}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
