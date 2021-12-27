import { StatusBar } from 'expo-status-bar';

import StackRoutes from './src/routes/stack';
import colors from './src/theme/colors';

export default function App() {
  return (
    <>
      <StatusBar style='auto' backgroundColor={colors.background} />
      <StackRoutes />
    </>
  );
}