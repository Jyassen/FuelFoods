'use client'

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  restaurant?: string;
  [key: string]: any;
}

interface FormSubmissionOptions {
  formType: string;
  resetAfterSubmit?: boolean;
  successTimeout?: number;
}

export default function useFormSubmission(
  initialData: FormData, 
  options: FormSubmissionOptions
) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      console.log(`Submitting ${options.formType} form:`, formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: options.formType,
          timestamp: new Date().toISOString()
        }),
      });
      
      const result = await response.json();
      console.log(`${options.formType} form submission response:`, result);
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || 'Thank you for your message! We will get back to you soon.'
        });
        
        if (options.resetAfterSubmit) {
          resetForm();
        }
        
        // Clear success message after timeout if specified
        if (options.successTimeout) {
          setTimeout(() => {
            setSubmitStatus({});
          }, options.successTimeout);
        }
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      console.error(`Error submitting ${options.formType} form:`, error);
      setSubmitStatus({
        success: false,
        message: 'Failed to submit form. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    resetForm
  };
} 