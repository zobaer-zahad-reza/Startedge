import React from "react";

export default function Card({ prod }) {
  const generateWhatsappLink = () => {
    const phoneNumber = "8801625239776";

    // প্রোডাক্টের আসল লিঙ্কের জন্য prod.prodLink ব্যবহার করা হয়েছে।
    // (যদি ডেটাতে লিঙ্ক না থাকে, তবে ডিফল্ট হিসেবে বর্তমান পেজের লিঙ্ক নিবে)
    const productUrl = prod.prodLink || window.location.href;

    const rawMessage = `আসসালামু আলাইকুম, আমি এই প্রোডাক্টটি অর্ডার করতে চাই:\n\n*প্রোডাক্টের নাম:* ${prod.prodTitle}\n*প্রোডাক্ট লিঙ্ক:* ${productUrl}`;

    const encodedMessage = encodeURIComponent(rawMessage);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 mb-5 mx-2 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={prod.prodImg}
          alt={prod.prodTitle}
        />
        {prod.prodOldPrice && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Sale
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="text-lg font-bold text-gray-800 mb-2 line-clamp-2"
          title={prod.prodTitle}
        >
          {prod.prodTitle}
        </h3>

        {/* Price Section */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-extrabold text-gray-900">
            {prod.prodPrice}
          </span>
          {prod.prodOldPrice && (
            <span className="text-sm text-gray-400 line-through font-medium">
              {prod.prodOldPrice}
            </span>
          )}
        </div>

        {/* Description Points (List) */}
        {prod.features && prod.features.length > 0 && (
          <ul className="mb-5 space-y-1.5 flex-grow">
            {prod.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start"
              >
                <svg
                  className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Call to Action Button */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <a
            href={generateWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5b] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 shadow-md"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.606 6.01L.069 24l6.104-1.602c1.745.968 3.738 1.48 5.858 1.48 6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm.006 21.805c-1.802 0-3.562-.486-5.11-1.405l-.366-.217-3.793.994.996-3.71-.238-.379a10.01 10.01 0 0 1-1.545-5.347c0-5.54 4.512-10.052 10.056-10.052 5.545 0 10.054 4.512 10.054 10.052 0 5.542-4.509 10.054-10.054 10.054zm5.513-7.534c-.302-.151-1.791-.885-2.068-.987-.278-.102-.48-.151-.682.151-.202.302-.782.987-.959 1.189-.177.202-.354.227-.657.076-2.124-1.062-3.64-2.502-4.32-3.666-.177-.302.174-.298.471-.892.1-.202.05-.379-.025-.53-.076-.151-.682-1.643-.935-2.247-.247-.59-.496-.511-.682-.52-.177-.01-.379-.01-.581-.01-.202 0-.53.076-.808.379-.278.302-1.061 1.037-1.061 2.528 0 1.492 1.086 2.933 1.237 3.135.151.202 2.138 3.264 5.178 4.577.72.312 1.282.498 1.722.637.723.23 1.381.197 1.899.119.58-.088 1.791-.733 2.043-1.44.252-.708.252-1.315.177-1.44-.076-.126-.278-.202-.581-.353z" />
            </svg>
            অর্ডার করুন
          </a>
        </div>
      </div>
    </div>
  );
}
