"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

interface EnquiryModalContextType {
  isOpen: boolean;
  prefilledCategory: string;
  openEnquiryModal: (category?: string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType>({
  isOpen: false,
  prefilledCategory: "",
  openEnquiryModal: () => {},
  closeEnquiryModal: () => {},
});

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledCategory, setPrefilledCategory] = useState("");

  const openEnquiryModal = useCallback((category?: string) => {
    if (category) {
      setPrefilledCategory(category);
    }
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen to window-level custom event so any link/button with data-enquiry-modal works seamlessly
  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ category?: string }>;
      openEnquiryModal(customEvent.detail?.category);
    };

    window.addEventListener("open-enquiry-modal", handleOpenEvent);
    return () => window.removeEventListener("open-enquiry-modal", handleOpenEvent);
  }, [openEnquiryModal]);

  return (
    <EnquiryModalContext.Provider
      value={{ isOpen, prefilledCategory, openEnquiryModal, closeEnquiryModal }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
