'use client';

import React from 'react';

import { motion } from 'framer-motion';

interface AuthenticatingModalProps {
  isOpen: boolean;
}

const AuthenticatingModal: React.FC<AuthenticatingModalProps> = ({
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg"
      >
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-[#163B82]"></div>
        </div>
        <p className="text-base font-medium text-gray-800">Authenticating</p>
      </motion.div>
    </div>
  );
};

export default AuthenticatingModal;
