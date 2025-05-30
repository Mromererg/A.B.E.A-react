# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# ABEA - Akademik Bilgi ve Not Paylaşım Platformu

ABEA, öğrencilerin notlarını düzenleyebilecekleri, paylaşabilecekleri ve üniversite bazlı topluluklar oluşturabilecekleri modern bir web platformudur.

## 🚀 Özellikler

### 📚 Not Yönetimi
- Kişisel not oluşturma ve düzenleme
- Notları kategorilere ayırma
- Notları diğer öğrencilerle paylaşma
- Ortak not havuzu oluşturma
- Not arama ve filtreleme

### 🏫 Üniversite Toplulukları
- Üniversite bazlı özel sayfalar
- Bölüm ve ders bazlı gruplar
- Üniversite duyuruları ve etkinlikleri
- Öğrenci toplulukları

### 👥 Kullanıcı Özellikleri
- Kişiselleştirilmiş dashboard
- Profil yönetimi
- Bildirim sistemi
- Arkadaş ekleme ve mesajlaşma

### 🔔 Bildirim Sistemi
- Yeni not paylaşımları
- Grup aktiviteleri
- Duyurular
- Etkileşim bildirimleri

## 🛠 Teknolojiler

- **Frontend**: React.js, Vite
- **UI Framework**: Bootstrap, React Bootstrap Icons
- **State Management**: React Context API
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Routing**: React Router DOM

## 📁 Proje Yapısı

```
ABEA/
├── src/
│   ├── features/
│   │   ├── dashboard/      # Ana dashboard ve sayfalar
│   │   ├── home/          # Ana sayfa
│   │   ├── auth/          # Kimlik doğrulama
│   │   └── universities/  # Üniversite özellikleri
│   ├── app/               # Ana uygulama dosyaları
│   ├── pages/             # Genel sayfalar
│   ├── components/        # Yeniden kullanılabilir bileşenler
│   ├── context/           # React context'leri
│   ├── shared/            # Paylaşılan bileşenler
│   └── assets/            # Statik dosyalar
```

