"use client";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useWeatherLocalStorageSync } from '@/hooks/useWeatherLocalStorageSync';

function WeatherSyncer() {
  useWeatherLocalStorageSync();
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <WeatherSyncer />
      {children}
    </Provider>
  );
}
