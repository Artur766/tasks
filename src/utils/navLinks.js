import StudentIcon from '@/assets/images/navigation/Student.svg';
import ArchiveIcon from '@/assets/images/navigation/archive.svg';
import CalendarBlank from '@/assets/images/navigation/CalendarBlank.svg';
import CameraIcon from '@/assets/images/navigation/camera.svg';
import DoorIcon from '@/assets/images/navigation/Door.svg';
import UserListIcon from '@/assets/images/navigation/UserList.svg';
import SettingsIcon from '@/assets/images/navigation/settings.svg';
import GraduationCapIcon from '@/assets/images/navigation/GraduationCap.svg';
const navLinks = [
  {
    name: 'Расписание',
    imageName: CalendarBlank,
    route: '/schedule',
  },
  {
    name: 'Учебные сессии',
    imageName: GraduationCapIcon,
    route: '/training-sessions',
  },
  {
    name: 'Список комнат',
    imageName: DoorIcon,
    route: '/room-list',
  },
  {
    name: 'Пользователи',
    imageName: StudentIcon,
    route: '/users',
  },
  {
    name: 'Учебные группы',
    imageName: UserListIcon,
    route: '/study-groups',
  },
  {
    name: 'Список устройств',
    imageName: CameraIcon,
    route: '/device-list',
  },
  {
    name: 'Настройки системы',
    imageName: SettingsIcon,
    route: '/system-settings',
  },
  {
    name: 'Архив',
    imageName: ArchiveIcon,
    route: '/archive',
  },
];

export default navLinks;
