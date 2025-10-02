import {
  Search,
  MessageCircle,
  Sparkles,
  CreditCard,
  Star,
  Home,
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-white" />,
    title: "Cari Kost dengan Mudah",
    desc: "Filter kost berdasarkan lokasi, harga, dan fasilitas.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-white" />,
    title: "Chat dengan Pemilik",
    desc: "Tanya langsung ke pemilik sebelum booking.",
  },

  {
    icon: <CreditCard className="h-6 w-6 text-white" />,
    title: "Bayar Online",
    desc: "Booking dan pembayaran bisa langsung dari aplikasi.",
  },
  {
    icon: <Star className="h-6 w-6 text-white" />,
    title: "Ulasan Penyewa",
    desc: "Lihat review dari penyewa sebelum kamu sewa.",
  },
  {
    icon: <Home className="h-6 w-6 text-white" />,
    title: "Lihat Kamar & Fasilitas",
    desc: "Semua informasi kost ditampilkan lengkap dan jujur.",
  },
];
const FeaturesSection = () => {
  return (
    <section className="mx-auto rounded-lg bg-blue-50 px-4 py-16 md:px-16 lg:px-36">
      <div className="mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          Kenapa Pakai Aplikasi Kami?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-5 shadow transition hover:shadow-md"
            >
              <div className="bg-primary mb-3 flex h-10 w-10 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
