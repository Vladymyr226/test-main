import { PhoneCall, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#ffffff]">
      {/* Logo section */}
      <div className="text-center py-10 border-b border-white mx-6 lg:mx-[80px]">
        <Link href="/">
          <h2 className="text-4xl font-extrabold font-inter">Logo Here</h2>
        </Link>
      </div>

      {/* Main footer content */}
      <div className="w-full px-6 lg:px-[80px] py-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:justify-between gap-8 lg:gap-5">
          {/* Reach us */}
          <div className="col-span-1 text-xs md:text-base">
            <h3 className="font-semibold mb-4 text-base md:text-lg">Reach us</h3>
            <div className="space-y-6 md:space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <PhoneCall className="w-6 h-6" />
                <span>+1012 3456 789</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <Mail className="w-6 h-6" />
                <span>demo@gmail.com</span>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-3">
                <MapPin className="w-7 h-7 shrink-0" />
                <span>
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 text-xs md:text-base justify-self-end md:justify-self-auto">
            <h3 className="font-semibold mb-4 text-base md:text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:font-semibold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:font-semibold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:font-semibold transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 text-xs md:text-base">
            <h3 className="font-semibold mb-4 text-base md:text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Terms & Services
                </Link>
              </li>
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-xs md:text-base justify-self-end md:justify-self-auto">
            <h3 className="font-semibold mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Techlabz Keybox
                </Link>
              </li>
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/unavailable" className="hover:font-semibold transition-colors">
                  Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <div className="bg-[#131313] p-5 rounded-lg">
              <h3 className="font-semibold mb-3 text-base md:text-lg">Join Our Newsletter</h3>
              <div className="flex items-center">
                <Input
                  placeholder="Your email address"
                  className="bg-[#1E1E1E] border-0 text-[11px] placeholder:text-[#616161] text-[#ffffff] rounded-r-none h-10 focus-visible:ring-0 flex-1 min-w-0"
                />
                <Link href="/unavailable">
                  <Button className="bg-[#000000] text-[#ffffff] hover:bg-[#333333] text-xs px-6 font-medium rounded-l-none h-10 whitespace-nowrap">
                    Subscribe
                  </Button>
                </Link>
              </div>
              <p className="text-[13px] mt-3 font-manrope font-medium">
                * Will send you weekly updates for your better tool management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
