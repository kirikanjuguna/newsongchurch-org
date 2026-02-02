"use client";

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

  return (
    <div className="flex gap-4 mt-10">
      <button onClick={() => share("twitter")} className="btn">
        Twitter
      </button>
      <button onClick={() => share("facebook")} className="btn">
        Facebook
      </button>
      <button onClick={() => share("whatsapp")} className="btn">
        WhatsApp
      </button>
    </div>
  );
}
