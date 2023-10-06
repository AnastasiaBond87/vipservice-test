import { AppDispatch, AppState } from '@/app/store';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<AppState> = useAppDispatch;

export { useAppDispatch, useAppSelector };
