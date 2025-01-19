import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './shared/Router';
import { QueryProviderProps } from './types/type';

const queryClient = new QueryClient();

function QueryProvider({ children }: QueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
}

export default App;
