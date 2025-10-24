import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Menu } from "primereact/menu";
import { Link } from "@tanstack/react-router";
import type { MenuItem } from "primereact/menuitem";

interface IOption {
    model: MenuItem[];
    user?: {
        image?: string;
        name?: string;
    };
}
export function MenuBar({ model, user }: IOption) {
    const [visible, setVisible] = useState(false);

    if (!user) return null;
    return (
        <>
            <Toolbar
                start={<Link to="/" className="font-bold" style={{ color: 'var(--primary-color)' }}>App Generator</Link>}
                end={
                    <Avatar
                        icon="pi pi-user"
                        image={user?.image}
                        size="normal"
                        shape="circle"
                        style={{ backgroundColor: '#2196F3', color: '#ffffff' }}
                        title={user?.name}
                        onClick={() => setVisible(true)}
                        aria-label="avatar"
                    />
                }
            />
            <Sidebar visible={visible} position="right" onHide={() => setVisible(false)}
                header={() => (
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <Avatar
                            icon="pi pi-user" 
                            image={user?.image} 
                            className="mr-2"
                            shape="circle"
                        />
                        <span className="font-bold">{user?.name}</span>
                    </div>
                )}   
            >
                <Menu
                    style={{ width: '100%', border: 'none' }}
                    model={[
                        { separator: true },
                        ...model,
                    ]}
                />
            </Sidebar>
        </>
    );
}