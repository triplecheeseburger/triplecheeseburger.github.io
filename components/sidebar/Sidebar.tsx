import { SidebarType } from '@/components/layouts/Sider';

export default function Sidebar({
  type,
  setSidebar,
}: {
  type: SidebarType;
  setSidebar: (type: SidebarType | null) => void;
}) {
  return <div className='w-52'>{type}</div>;
}
