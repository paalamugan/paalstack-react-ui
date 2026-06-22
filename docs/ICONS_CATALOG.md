# Icons Catalog

31 icon library groups re-exporting [react-icons](https://react-icons.github.io/react-icons/) v5.

## Import Patterns

```tsx
// Tree-shakeable sub-path (recommended)
import { LuSettings, LuChevronDown } from '@paalstack/react-icons/lu';
import { FiPlus, FiTrash2 } from '@paalstack/react-icons/fi';
import { RiDashboardLine } from '@paalstack/react-icons/ri';

// Full barrel (avoid — large bundle)
import { LuSettings } from '@paalstack/react-icons';
```

## Icon Props (react-icons)
All icons accept standard SVG props: `size`, `color`, `className`, `title`, `aria-hidden`, etc.

```tsx
<LuSettings size={20} className="text-primary" aria-hidden />
```

## Library Groups

| Code | Library | Prefix | Import Path | Best For |
|------|---------|--------|-------------|----------|
| ai | Ant Design Icons | Ai | `@paalstack/react-icons/ai` | See categories below |
| bi | Bootstrap Icons | Bi | `@paalstack/react-icons/bi` | See categories below |
| bs | BoxIcons | Bs | `@paalstack/react-icons/bs` | See categories below |
| cg | css.gg | Cg | `@paalstack/react-icons/cg` | See categories below |
| ci | Circum Icons | Ci | `@paalstack/react-icons/ci` | See categories below |
| di | Devicons | Di | `@paalstack/react-icons/di` | See categories below |
| fa | Font Awesome 5 | Fa | `@paalstack/react-icons/fa` | See categories below |
| fa6 | Font Awesome 6 | Fa6 | `@paalstack/react-icons/fa6` | See categories below |
| fc | Flat Color Icons | Fc | `@paalstack/react-icons/fc` | See categories below |
| fi | Feather Icons | Fi | `@paalstack/react-icons/fi` | See categories below |
| gi | Game Icons | Gi | `@paalstack/react-icons/gi` | See categories below |
| go | Octicons | Go | `@paalstack/react-icons/go` | See categories below |
| gr | Grommet Icons | Gr | `@paalstack/react-icons/gr` | See categories below |
| hi | Heroicons | Hi | `@paalstack/react-icons/hi` | See categories below |
| hi2 | Heroicons v2 | Hi2 | `@paalstack/react-icons/hi2` | See categories below |
| im | IcoMoon Free | Im | `@paalstack/react-icons/im` | See categories below |
| io | Ionicons 4 | Io | `@paalstack/react-icons/io` | See categories below |
| io5 | Ionicons 5 | Io5 | `@paalstack/react-icons/io5` | See categories below |
| lia | Line Awesome | Lia | `@paalstack/react-icons/lia` | See categories below |
| lu | Lucide | Lu | `@paalstack/react-icons/lu` | See categories below |
| md | Material Design | Md | `@paalstack/react-icons/md` | See categories below |
| pi | Phosphor Icons | Pi | `@paalstack/react-icons/pi` | See categories below |
| ri | Remix Icon | Ri | `@paalstack/react-icons/ri` | See categories below |
| rx | Radix Icons | Rx | `@paalstack/react-icons/rx` | See categories below |
| si | Simple Icons | Si | `@paalstack/react-icons/si` | See categories below |
| sl | Simple Line Icons | Sl | `@paalstack/react-icons/sl` | See categories below |
| tb | Tabler Icons | Tb | `@paalstack/react-icons/tb` | See categories below |
| tfi | Themify Icons | Tfi | `@paalstack/react-icons/tfi` | See categories below |
| ti | Typicons | Ti | `@paalstack/react-icons/ti` | See categories below |
| vsc | VS Code Icons | Vsc | `@paalstack/react-icons/vsc` | See categories below |
| wi | Weather Icons | Wi | `@paalstack/react-icons/wi` | See categories below |

## Categories & Recommended Libraries

### Navigation
LuChevron*, LuArrow*, LuMenu, HiHome, RiDashboardLine, TbLayoutDashboard — **lu**, **hi2**, **ri**, **tb**

### Action
FiPlus, FiEdit, FiTrash2, LuCopy, LuDownload — **fi**, **lu**

### Status
LuCheck, LuX, LuAlertCircle, MdError, MdInfo — **lu**, **md**

### Form
LuSearch, LuEye, LuEyeOff, LuCalendar — **lu**, **fi**

### Social
FaTwitter, FaGithub, SiLinkedin — **fa6**, **si**

### Media
LuPlay, LuPause, LuVolume2, MdMovie — **lu**, **md**

### Misc / Tech
VscCode, DiReact, SiTypescript — **vsc**, **di**, **si**

## Usage in Components

```tsx
import { Button } from '@paalstack/react-ui';
import { FiPlus } from '@paalstack/react-icons/fi';

<Button leftIcon={<FiPlus />}>Add item</Button>
```

## Naming Convention
Icon components are PascalCase with library prefix: `LuSettings`, `FiPlus`, `RiCloseLine`.
