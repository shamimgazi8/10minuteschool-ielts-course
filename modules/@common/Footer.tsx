"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 px-6 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* App Info */}
        <div className="space-y-4">
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="10 Minute School"
            width={140}
            height={40}
          />
          <p className="text-sm">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
          <div className="flex gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                alt="Get it on Google Play"
                width={130}
                height={40}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                alt="Download on App Store"
                width={130}
                height={40}
              />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">কোম্পানি</h4>
          <ul className="space-y-2">
            <li>ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</li>
            <li>শিক্ষক হিসাবে যোগ দিন</li>
            <li>অ্যাফিলিয়েট হিসাবে যোগ দিন</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>রিফান্ড পলিসি</li>
            <li>ব্যবহারকারীর শর্তাবলি</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h4 className="font-semibold mb-3">অন্যান্য</h4>
          <ul className="space-y-2">
            <li>ব্লগ</li>
            <li>বুক স্টোর</li>
            <li>ফ্রি নোটস ও গাইড</li>
            <li>চাকরি প্রস্তুতি কন্টেন্টসমূহ</li>
            <li>সার্টিফিকেট ভেরিফাই করুন</li>
            <li>ফ্রি ডাউনলোড</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">আমাদের যোগাযোগ মাধ্যম</h4>
          <ul className="space-y-2">
            <li>
              কল করুন: <span className="text-green-600">16910</span> (24x7)
            </li>
            <li>
              হোয়াটসঅ্যাপ:{" "}
              <a href="tel:+8801896016252" className="text-green-600">
                +8801896016252
              </a>{" "}
              (24x7)
            </li>
            <li>
              দেশের বাইরে থেকে:{" "}
              <a href="tel:+8809610916910" className="text-green-600">
                +8809610916910
              </a>
            </li>
            <li>
              ইমেইল:{" "}
              <a
                href="mailto:support@10minuteschool.com"
                className="text-green-600"
              >
                support@10minuteschool.com
              </a>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-2 mt-4">
            <a
              href="#"
              target="_blank"
              className="p-2 bg-gray-800 text-white rounded"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-2 bg-gray-800 text-white rounded"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-2 bg-gray-800 text-white rounded"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-2 bg-gray-800 text-white rounded"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-2 bg-gray-800 text-white rounded"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
}
