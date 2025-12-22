"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormData>;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // 🔹 Here you can call API / EmailJS / Server Action
    console.log("Form Submitted:", formData);

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full bg-[#1e222b] lg:p-8 py-8 px-4 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John"
            className="bg-[#292e39] py-2 px-4 rounded-md text-sm font-medium tracking-wide
              outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@gmail.com"
            className="bg-[#292e39] py-2 px-4 rounded-md text-sm font-medium tracking-wide
              outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label>Message</label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
            className="bg-[#292e39] py-2 px-4 rounded-md text-sm font-medium tracking-wide
              outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.message && (
            <p className="text-red-400 text-xs">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="uppercase bg-linear-to-bl from-orange-800
              hover:from-orange-400/90 hover:to-orange-900
              shadow-[2px_2px_0px_orangered]
              hover:shadow-[0px_0px_0px_#333]
              border border-orange-400/10 transition-all duration-200
              font-medium text-sm px-10 py-2 rounded-md
              active:scale-90 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
