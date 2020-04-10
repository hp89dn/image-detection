import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Trang chủ',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Công cụ AI',
    icon: 'cube-outline',
    children: [
      {
        title: 'Nhận diện ảnh',
        icon: 'image-outline',
        link: '/pages/ai-tool/cv-image'
      }
    ]
  },
];
