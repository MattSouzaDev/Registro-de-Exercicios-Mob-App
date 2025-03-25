import { registerRootComponent } from 'expo';
import App from './src/app';


try {
  registerRootComponent(App);
} catch (error) {
  console.error("Erro ao iniciar o aplicativo:", error);
}
