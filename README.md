# App Scanner - React Native

## Giới thiệu

**App Scanner** là ứng dụng di động được phát triển bằng React Native, mục đích chính là quét mã vạch (barcode) và kết nối trực tiếp với các thiết bị máy quét Zebra (DataWedge). Ứng dụng hỗ trợ quản lý đăng nhập, phân quyền, giao diện hiện đại với Tailwind (nativewind), và có thể mở rộng cho nhiều nghiệp vụ khác.

- **Nền tảng:** React Native (TypeScript)
- **Quản lý state:** Zustand, React Query
- **Giao diện:** Tailwind (nativewind)
- **API:** Axios + Interceptor
- **Máy quét:** Tích hợp DataWedge cho Zebra

## Mục đích dự án
- Quét mã vạch nhanh chóng, ổn định trên thiết bị Zebra
- Quản lý user, phân quyền (admin, user, ...)
- Giao diện đẹp, dễ mở rộng, dễ bảo trì
- Dễ dàng tích hợp thêm các nghiệp vụ khác

---

## Cài đặt & Chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy Metro Bundler
```bash
npm start
```

### 3. Chạy app trên thiết bị/simulator
- **Android:**
  ```bash
  npm run android
  ```
- **iOS:**
  ```bash
  npm run ios
  ```

> **Lưu ý:**
> - Đảm bảo đã cài đặt môi trường React Native theo [hướng dẫn chính thức](https://reactnative.dev/docs/environment-setup).
> - Để sử dụng DataWedge trên máy Zebra, cần cấp quyền và cấu hình intent phù hợp.

---

## Cấu trúc thư mục

```
src/
  components/      # Các component tái sử dụng (Button, Alert, Loading, ...)
  screens/         # Các màn hình (Login, Home, Profile, ...)
  navigation/      # Điều hướng (AppNavigator, Stack, ...)
  services/        # Logic gọi API (auth, user, ...)
  store/           # State management (zustand)
  hooks/           # Custom hooks
  utils/           # Hàm tiện ích, validate, token, ...
  types/           # Type/interface dùng chung
  assets/          # Ảnh, font, icon, ...
  constants/       # Hằng số, config
```

---

## Công nghệ sử dụng
- React Native (TypeScript)
- Zustand, React Query
- Nativewind (Tailwind cho React Native)
- Axios (API, Interceptor)
- DataWedge (Zebra)
- ESLint, Prettier (format code)

---

## Format code & Quy tắc code
- Sử dụng Prettier, ESLint để format/lint code tự động.
- Đã cấu hình sẵn `.prettierrc`, `.eslintrc.js`, `.editorconfig`, ...
- VSCode: nên cài extension Prettier, ESLint và bật formatOnSave.

---

## Lưu ý khi dùng với máy Zebra
- Đảm bảo app đã được cấp quyền nhận intent từ DataWedge.
- Có thể cần cấu hình intent action/category trong DataWedge profile trên máy Zebra.
- Tham khảo thêm tài liệu: [DataWedge Intent API](https://techdocs.zebra.com/datawedge/latest/guide/api/)

---

## Đóng góp & Phát triển
- Fork, tạo branch mới, pull request như các dự án open source chuẩn.
- Mọi ý kiến đóng góp, bug report đều được hoan nghênh!

---

## Liên hệ
- Dev: [Tên bạn hoặc team]
- Email: [email liên hệ]
