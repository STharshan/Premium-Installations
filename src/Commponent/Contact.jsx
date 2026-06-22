import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const headingWords = [
  "Step", "inside", "and", "discover", "a", "new", "standard", "of", "living",
];

export default function CtaContactSection() {
  // 1. Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // 3. Validation and WhatsApp Redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 4. WhatsApp Integration
    const phoneNumber = "1234567890"; 
    const messageText = `*New Inquiry From Website*%0A
Name: ${formData.firstName} ${formData.lastName}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${messageText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-[var(--color-panel)]" id="contact">
      <div className="relative overflow-hidden rounded-[30px] bg-[var(--color-panel)]">
        {/* Background Image Decor */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[360px] opacity-30"
          style={{
            backgroundImage: "url('https://html.awaikenthemes.com/antila/images/section-bg-image-1.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "contain",
          }}
        />

        <div className="grid h-full xl:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content Column */}
          <div className="flex flex-col justify-between px-6 py-16 sm:px-10 md:px-16 xl:px-[110px] xl:py-[50px]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3">
                <span className="h-[8px] w-[8px] rounded-full bg-[var(--color-brand)]" />
                <span className="text-[16px] font-medium text-[var(--color-ink)]">Schedule A Visit</span>
              </div>

              <h2 className="mt-8 max-w-[760px] text-[48px] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[58px] md:text-[50px] xl:text-[50px]">
                {headingWords.map((word, i) => (
                  <span key={i} className="mr-[12px] mb-[6px] inline-block overflow-hidden">
                    <span className="inline-block animate-textReveal" style={{ animationDelay: `${i * 0.07}s` }}>
                      {word}
                    </span>
                  </span>
                ))}
              </h2>

              <p className="mt-8 max-w-[750px] text-[18px] leading-[1.7] text-[var(--color-ink-muted)] opacity-0 animate-fadeUp" style={{ animationDelay: "0.6s" }}>
                From spacious interiors and modern layouts to landscaped outdoor areas...
              </p>
            </div>
            
            {/* Social Proof */}
            <div className="mt-16 max-w-[500px] opacity-0 animate-fadeUp" style={{ animationDelay: "1s" }}>
              <div className="flex">
                <img className="h-12 w-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="h-12 w-12 rounded-full border-2 border-white -ml-3" src="https://i.pravatar.cc/100?img=2" alt="user" />
                <div className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">15K+</div>
              </div>
              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <h3 className="text-[22px] font-semibold text-[var(--color-ink)]">Units Delivered</h3>
                <p className="mt-4 text-[17px] leading-[1.8] text-[var(--color-ink-muted)]">Successfully completed homes providing comfort.</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[720px] rounded-[26px] bg-[var(--color-surface-alt)] px-8 py-10">
              <h3 className="text-[34px] font-medium text-[var(--color-ink)]">Contact Us</h3>
              <div className="mt-6 border-t border-[var(--color-border)]" />

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                  <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                  <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                  <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
                </div>

                <div>
                  <label className="mb-3 block font-semibold text-[var(--color-ink)]">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-[150px] w-full rounded-[14px] bg-[var(--color-panel)] px-5 py-4 outline-none border border-transparent focus:border-[var(--color-brand)]"
                  />
                </div>

                <button type="submit" className="flex items-center gap-2 rounded-[10px] bg-[var(--color-brand)] px-7 py-4 text-white transition hover:bg-[var(--color-brand-hover)]">
                  Send to WhatsApp <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Updated Sub-component
function Input({ label, name, type = "text", value, onChange, error }) {
  return (
    <div>
      <label className="mb-3 block font-semibold text-[var(--color-ink)]">
        {label}: {error && <span className="text-red-500 text-xs font-normal">({error})</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`h-[70px] w-full rounded-[14px] bg-[var(--color-panel)] px-5 outline-none border transition ${error ? 'border-red-500' : 'border-transparent focus:border-[var(--color-brand)]'}`}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}