import { toast } from 'react-toastify';

type ToastType = 'success' | 'error' | 'warning' | 'info';


export const showToast = (message: string, type:ToastType = 'success') => {
  toast[type](message);
};