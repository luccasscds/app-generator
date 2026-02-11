import { config } from '@/config/config';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import type { MenuItem } from 'primereact/menuitem';
import { useRef, useState } from 'react';

interface ThemeSelectorProps {
  className?: string;
}

const availableThemes = [
  { name: 'Arya Blue', value: 'arya-blue' },
  { name: 'Bootstrap 4 Dark Blue', value: 'bootstrap4-dark-blue' },
  { name: 'Bootstrap 4 Dark Purple', value: 'bootstrap4-dark-purple' },
  { name: 'Fluent Light', value: 'fluent-light'},
  { name: 'Lara Light', value: 'lara-light-indigo'},
  { name: 'Lara Dark', value: 'lara-dark-indigo' },
  { name: 'Material Design', value: 'md-dark-indigo' },
  { name: 'Tailwind Light', value: 'tailwind-light'},
];

export function ThemeSelector({ className }: ThemeSelectorProps) {
  const menuRef = useRef<Menu>(null);
  const [currentTheme, setCurrentTheme] = useState(config.getCurrentTheme());

  const themeItems: MenuItem[] = availableThemes.map(theme => ({
    label: theme.name,
    icon: currentTheme === theme.value ? 'pi pi-check' : 'pi pi-stop',
    command: () => {
      config.setTheme(theme.value);
      setCurrentTheme(theme.value);
    }
  }));

  return (
    <div className={className}>
      <Button
        icon="pi pi-palette"
        severity="secondary"
        text
        onClick={(e) => menuRef.current?.toggle(e)}
      />
      <Menu model={themeItems} popup ref={menuRef} />
    </div>
  );
}