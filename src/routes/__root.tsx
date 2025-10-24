import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { MenuBar } from '@/components/MenuBar/MenuBar';
import 'primeicons/primeicons.css';

export const Route = createRootRoute({
  component: () => (
    <div>
      <MenuBar
        model={[]}
        user={{ name: 'Lucas' }}
      />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})