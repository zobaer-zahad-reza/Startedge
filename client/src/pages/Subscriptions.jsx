import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../Components/Card";
import SubscriptionCatagory from "../Components/SubscriptionCatagory";

export default function Subscriptions() {
  const productsItems = [
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Canva pro (edu) for 6 month official all device support",
      prodPrice: "৳59",

      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳2500",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳1500",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳700",
      prodOldPrice: "৳8000",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳59",
      prodOldPrice: "৳500",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳2500",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳1500",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳700",
      prodOldPrice: "৳8000",
      features: [
        "১০০% কটন ফেব্রিক",
        "দীর্ঘস্থায়ী কালার গ্যারান্টি",
        "সারা বাংলাদেশে হোম ডেলিভারি",
      ],
    },
  ];

  return (
    <div className="max-w-11/12 mx-auto">
      <img
        className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-wooden-surface-free-image.jpeg?w=2210&quality=70"
        alt=""
      />

      <SubscriptionCatagory />

      {/* Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 my-10">
        {productsItems.map((prod) => {
          return <Card prod={prod} />;
        })}
      </div>
    </div>
  );
}
