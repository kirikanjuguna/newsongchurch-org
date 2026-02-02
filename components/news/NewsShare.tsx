"use client";

import { Facebook, Twitter, MessageCircle } from "lucide-react";

export default function NewsShare({ title }: { title: string }) {
  const url =
    typeof window !== "undefined" ? window.location.href : "";

  const share = (platform: string) => {
    const text = encodeURIComponent(title);
    const link = encodeURIComponent(url);

    const map: any = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${link}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      whatsapp: `https://wa.me/?text=${text}%20${link}`,
    };

    window.open(map[platform], "_blank");
  };

  const btn =
    "w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent/10 transition";

  return (
    <div className="flex items-center gap-4">

      <span className="text-sm text-secondary mr-2">
        Share:
      </span>

      <button onClick={() => share("twitter")} className={btn}>
        <Twitter size={18} />
      </button>

      <button onClick={() => share("facebook")} className={btn}>
        <Facebook size={18} />
      </button>

      <button onClick={() => share("whatsapp")} className={btn}>
        <MessageCircle size={18} />
      </button>

    </div>
  );
}
