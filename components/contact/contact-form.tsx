"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { PhoneCall, Mail, MapPin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[a-zA-Zа-яА-Я\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[a-zA-Zа-яА-Я\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .regex(/^[\d\s\-+()]+$/, "Phone number can only contain numbers and symbols +, -, (, )"),
  subject: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "general",
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <section className="pb-[50px] px-4 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-background rounded-xl shadow-lg p-2 flex flex-col lg:flex-row">
          {/* Left side - Contact Information */}
          <div className="bg-[#000000] rounded-xl text-[#ffffff] p-6 md:p-10 w-full lg:w-[490px] relative overflow-hidden shrink-0 flex flex-col items-center md:block text-center md:text-left min-h-[450px] md:min-h-0">
            <h2 className="text-xl md:text-[28px] font-semibold mb-2">Contact Information</h2>
            <p className="text-[#C9C9C9] text-[11px] md:text-lg mb-4 md:mb-10">Say something to start a live chat!</p>

            <div className="space-y-4 md:space-y-8 text-xs w-full">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-4">
                <PhoneCall className="w-6 h-6" />
                <span>+1012 3456 789</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-4">
                <Mail className="w-6 h-6" />
                <span>demo@gmail.com</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4">
                <MapPin className="w-6 h-6" />
                <span>
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-auto md:mt-24 w-full relative z-10 pb-0">
              <Link href="/unavailable" className="p-2 rounded-full bg-[#1B1B1B] hover:bg-white hover:text-[#000000] transition-colors">
                <Twitter className="w-[15px] h-[15px]" />
              </Link>
              <Link href="/unavailable" className="p-2 rounded-full bg-[#1B1B1B] hover:bg-white hover:text-[#000000] transition-colors">
                <Instagram className="w-[15px] h-[15px]" />
              </Link>
              <Link href="/unavailable" className="p-2 rounded-full bg-[#1B1B1B] hover:bg-white hover:text-[#000000] transition-colors">
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>
            </div>

            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1A1A1A] rounded-full translate-x-8 translate-y-8" />
            <div className="absolute bottom-12 right-12 w-20 h-20 bg-[#484848]/50 rounded-full" />
          </div>

          {/* Right side - Form */}
          <div className="flex-1 p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-muted-foreground text-xs font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground font-medium text-sm"
                    {...register("firstName")}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground text-xs font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground font-medium text-sm"
                    {...register("lastName")}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-muted-foreground text-xs font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground font-medium text-sm"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground text-xs font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 012 3456 789"
                    className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground font-medium text-sm"
                    {...register("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <Label className="text-foreground font-semibold text-sm">Select Subject?</Label>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-4 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="text-xs text-foreground cursor-pointer">
                          General Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general2" id="general2" />
                        <Label htmlFor="general2" className="text-xs text-foreground cursor-pointer">
                          General Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general3" id="general3" />
                        <Label htmlFor="general3" className="text-xs text-foreground cursor-pointer">
                          General Inquiry
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general4" id="general4" />
                        <Label htmlFor="general4" className="text-xs text-foreground cursor-pointer">
                          General Inquiry
                        </Label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-muted-foreground text-xs font-medium">
                  <span>Message</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message.."
                  className="text-foreground border-0 border-b border-border rounded-none px-0 min-h-[36px] md:min-h-[80px] resize-none focus-visible:ring-0 focus-visible:border-foreground font-medium text-sm"
                />
              </div>

              <div className="flex justify-end relative">
                <Button 
                  type="submit" 
                  className="bg-[#000000] hover:bg-[#333333] text-[#ffffff] px-8 py-2 rounded-md font-medium text-xs md:text-base w-full md:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
