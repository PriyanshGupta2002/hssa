import { ProductCardProps } from "@/components/product/product-card";
import { create } from "zustand";

// interface ProductTypes {
//   product_name: string;
//   product_description: string;
//   product_price: string;
//   product_type: string;
//   product_cover_image: {
//     asset: {
//       _ref: string;
//     };
//   };
//   customizable: boolean;
//   length?: {
//     units: string;
//     value: number;
//   };
//   colors?:{
//     hex:string
//   }[]
// }
interface ModaldataType {
  productInfo?: ProductCardProps;
}

type modalType = "quick-view";

interface ModalStoreTypes {
  isOpen: boolean;
  onOpen: (type: modalType, data: ModaldataType) => void;
  onClose: () => void;
  type: modalType | null;
  data?: ModaldataType | undefined;
}
export const useModal = create<ModalStoreTypes>((set) => ({
  isOpen: false,
  data: undefined,
  type: null,
  onOpen: (type: modalType, data = {}) =>
    set({
      isOpen: true,
      type,
      data,
    }),
  onClose: () => set({ isOpen: false }),
}));
