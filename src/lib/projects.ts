// projects.ts

// 1. Kita definisikan tipe data untuk satu buah proyek
export type ProjectType = {
  title: string;
  course: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveDemoUrl: string;
  githubUrl: string;
};

// 2. Kita definisikan tipe data untuk keseluruhan objek proyek
type ProjectsDataType = {
  [key: string]: ProjectType;
};

// 3. Kita ekspor data kita dengan tipe yang sudah ditentukan
export const projectsData: ProjectsDataType = {
  "kabita-food": {
    title: "Website E-commerce Kabita Food",
    course: "Manajemen Proyek Teknologi Informasi",
    description:
      "Proyek ini mencakup seluruh siklus hidup pengembangan sistem (SDLC) untuk UMKM 'Kabita Food'. meliputi tahap analisis kebutuhan untuk memahami proses bisnis, perancangan sistem (desain database dan arsitektur), manajemen proyek untuk memastikan progres berjalan sesuai jadwal, hingga tahap implementasi backend menggunakan Laravel. Saat ini, proyek masih dalam tahap pengembangan aktif dengan fokus pada penyempurnaan fitur backend menggunakan Laravel.",
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript"],
    imageUrl: "/images/kabita-food.png",
    liveDemoUrl: "#", // Ganti dengan link Anda
    githubUrl: "https://github.com/ihsanardians/KabitaFoodOrder", // Ganti dengan link Anda
  },
  "portal-berita": {
    title: "Website Portal Berita Dinamis",
    course: "Pemrograman Web Dinamis",
    description:
      "Mengembangkan sebuah portal berita dari nol yang kontennya dikelola secara dinamis melalui halaman admin. Pengguna bisa melihat berita berdasarkan kategori, dan admin bisa melakukan operasi CRUD (Create, Read, Update, Delete) pada artikel berita.",
    techStack: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
    imageUrl: "/images/Portal-berita.png",
    liveDemoUrl: "https://diginews.great-site.net",
    githubUrl: "https://github.com/ihsanardians/DigiNews",
  },
  "dashboard-influencer": {
    title: "Dashboard Visualisasi Data Influencer",
    course: "Visualisasi Data",
    description:
      "Menganalisis dan eksplorasi dataset menggunakan python lalu menyajikan dashboard interaktif untuk menganalisis metrik performa influencer di Instagram. Dashboard ini membantu dalam memahami engagement rate, pertumbuhan followers, dan demografi audiens secara visual.",
    techStack: ["Python", "Pandas", "Tableau", "Microsoft Excel"],
    imageUrl: "/images/dashboard-influencer.jpg",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/ihsanardians/EDA-Instagram",
  },
  "klasifikasi-gender": {
    title: "Model Deep Learning Klasifikasi Gender",
    course: "Deep Learning",
    description:
      "Membangun model klasifikasi gender dari gambar wajah menggunakan Convolutional Neural Network (CNN) dengan dataset UTKFace. Proyek ini mencakup seluruh alur kerja machine learning: memuat dan memproses 10.000 gambar, normalisasi, hingga data augmentation untuk meningkatkan ketahanan model. Arsitektur CNN yang dirancang kemudian dilatih dan dievaluasi, berhasil mencapai akurasi yang solid pada data uji dan dianalisis menggunakan confusion matrix.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "OpenCV",
      "Matplotlib",
      "Seaborn",
    ],
    imageUrl: "/images/diagram-cnn.png", // Ganti dengan gambar alur kerja Anda
    liveDemoUrl: "#", // Kita akan sembunyikan tombol ini
    githubUrl: "https://github.com/ihsanardians/CNN-Model", // Ganti dengan link repo Anda
  },
};
