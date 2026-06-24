import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const headingWords = [
  "Step", "inside", "and", "discover", "a", "new", "standard", "of", "living",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const phoneNumber = "1234567890";
    const messageText = `*New Inquiry From Website*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-[#f7f6f1] px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="contact">
      <div className="mx-auto max-w-[1780px]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#f7f6f1]">
          <div
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] opacity-20 lg:block"
            style={{
              backgroundImage: "url('https://html.awaikenthemes.com/antila/images/section-bg-image-1.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              backgroundSize: "contain",
            }}
          />

          <div className="grid gap-10 xl:grid-cols-[1.12fr_0.88fr] xl:gap-14">
            <div className="flex min-h-full flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 lg:px-14 xl:px-[68px] xl:py-[44px] 2xl:pr-[84px]">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d8d1bc] bg-[#fbfaf5] px-5 py-3 text-[#111111] shadow-[0_6px_18px_rgba(17,17,17,0.04)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#a7a04b]" />
                  <span className="text-[15px] font-medium tracking-[-0.02em]">Schedule A Visit</span>
                </div>

                <h2 className="mt-8 max-w-[720px] text-[42px] font-medium leading-[1.08] tracking-[-0.045em] text-[#090909] sm:text-[54px] lg:mt-10 lg:text-[68px] xl:text-[66px] 2xl:text-[72px]">
                  {headingWords.map((word, i) => (
                    <span key={i} className="mr-[12px] mb-[6px] inline-block overflow-hidden">
                      <span className="inline-block animate-textReveal" style={{ animationDelay: `${i * 0.07}s` }}>
                        {word}
                      </span>
                    </span>
                  ))}
                </h2>

                <p
                  className="mt-8 max-w-[650px] text-[17px] leading-[1.9] text-[#67645d] opacity-0 animate-fadeUp sm:text-[18px]"
                  style={{ animationDelay: "0.6s" }}
                >
                  From spacious interiors and modern layouts to landscaped outdoor areas...
                </p>
              </div>

              <div className="mt-16 max-w-[500px] opacity-0 animate-fadeUp xl:mt-24" style={{ animationDelay: "1s" }}>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=1"
                    alt="Happy homeowner"
                  />
                  <img
                    className="-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=2"
                    alt="Satisfied client"
                  />
                  <div className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#a7a04b] text-sm font-semibold text-white">
                    15K+
                  </div>
                </div>
                <div className="mt-8 border-t border-[#d9d2c2] pt-7">
                  <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#121212]">Units Delivered</h3>
                  <p className="mt-4 text-[17px] leading-[1.85] text-[#67645d]">
                    Successfully completed homes providing comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center px-0 py-2 xl:py-0">
              <div className="relative w-full rounded-[32px] border border-[#dcd5c7] bg-[#e8e4d5]/90 px-6 py-8 shadow-[0_24px_60px_rgba(28,28,20,0.08)] backdrop-blur-[2px] sm:px-8 sm:py-10 lg:px-8 xl:min-h-[720px] xl:px-8 xl:py-12 2xl:px-10">
                <div className="pointer-events-none absolute right-5 top-5 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.28)_0%,_rgba(255,255,255,0)_72%)]" />

                <h3 className="text-[32px] font-medium tracking-[-0.04em] text-[#060606] sm:text-[36px]">
                  Contact Us
                </h3>
                <div className="mt-6 border-t border-[#d5cebf]" />

                <form onSubmit={handleSubmit} className="mt-8 space-y-6 sm:space-y-7">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                    <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                    <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
                  </div>

                  <div>
                    <label className="mb-3 block text-[15px] font-semibold text-[#0f0f0f]">Message:</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter Message"
                      className="min-h-[150px] w-full rounded-[18px] border border-transparent bg-white px-5 py-4 text-[16px] text-[#1c1c1c] outline-none transition placeholder:text-[#9f9a8d] focus:border-[#a7a04b] focus:ring-0 sm:min-h-[160px] xl:min-h-[150px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-[12px] bg-[#a7a04b] px-7 py-4 text-[18px] font-medium text-white transition hover:bg-[#969041]"
                  >
                    Send to WhatsApp <ArrowUpRight size={19} />
                  </button>
                </form>
              </div>
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
      <label className="mb-3 block text-[15px] font-semibold text-[#0f0f0f]">
        {label}: {error && <span className="text-xs font-normal text-red-500">({error})</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`h-[70px] w-full rounded-[18px] border bg-white px-5 text-[16px] text-[#1c1c1c] outline-none transition placeholder:text-[#9f9a8d] ${error ? "border-red-500" : "border-transparent focus:border-[#a7a04b]"}`}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}
