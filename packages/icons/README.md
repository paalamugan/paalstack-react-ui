# @paalstack/react-icons

Tree-shakeable React icon components from 31 popular icon libraries — all available under a single package via sub-path imports.

## Docs

[Storybook → Icons documentation](https://paalamugan.github.io/paalstack-react-ui/?path=/docs/overview-icons--docs)

## Installation

```bash
pnpm add @paalstack/react-icons
# or
npm install @paalstack/react-icons
# or
yarn add @paalstack/react-icons
```

## Usage

Import icons from their specific sub-path to keep bundles small:

```tsx
// Lucide
import { LuHouse, LuSettings, LuUser } from '@paalstack/react-icons/lu';

// Heroicons v2
import { HiMoon, HiSun } from '@paalstack/react-icons/hi2';

// Font Awesome 6
import { FaGithub, FaTwitter } from '@paalstack/react-icons/fa6';

// Tabler Icons
import { TbBrandReact } from '@paalstack/react-icons/tb';

// All icons accept className, size, color, and style props
<LuHouse className="size-6 text-primary" />
<LuSettings size={20} color="gray" />
```

### Global defaults via `IconContext`

```tsx
import { IconContext } from '@paalstack/react-icons';
import { LuHouse, LuSettings } from '@paalstack/react-icons/lu';

function App() {
  return (
    <IconContext.Provider value={{ size: '1.25em', color: 'currentColor' }}>
      <LuHouse />
      <LuSettings />
    </IconContext.Provider>
  );
}
```

## Available icon packs

| Import path    | Library            |
| -------------- | ------------------ |
| `/lu`          | Lucide             |
| `/hi` / `/hi2` | Heroicons v1 / v2  |
| `/fa` / `/fa6` | Font Awesome 5 / 6 |
| `/md`          | Material Design    |
| `/tb`          | Tabler             |
| `/ri`          | Remix Icons        |
| `/bi`          | BoxIcons           |
| `/bs`          | Bootstrap          |
| `/ai`          | Ant Design         |
| `/fi`          | Feather            |
| `/io5`         | Ionicons 5         |
| `/rx`          | Radix              |
| `/si`          | Simple Icons       |
| `/pi`          | Phosphor           |
| `/vsc`         | VS Code            |
| `/go`          | GitHub Octicons    |
| `/gi`          | Game Icons         |
| `/wi`          | Weather Icons      |
| `/ci`          | Circle Flags       |
| `/cg`          | css.gg             |
| `/di`          | Devicons           |
| `/fc`          | Flat Color Icons   |
| `/gr`          | Grommet            |
| `/im`          | IcoMoon            |
| `/io`          | Ionicons 4         |
| `/lia`         | Line Awesome       |
| `/sl`          | Simple Line Icons  |
| `/tfi`         | Themify Icons      |
| `/ti`          | Typicons           |

## Requirements

| Peer dependency | Version |
| --------------- | ------- |
| `react`         | `>= 18` |
| `react-dom`     | `>= 18` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
