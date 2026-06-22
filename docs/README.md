# PaalStack React UI - Documentation Index

## 📚 Complete AI Knowledge Base

This directory contains comprehensive documentation for AI coding agents (Cursor, Claude Code, GitHub Copilot, Gemini CLI, OpenAI Codex, etc.) to understand and effectively use the PaalStack React UI library.

---

## 🗂️ Documentation Files

### 1. **REPOSITORY_OVERVIEW.md** ✅
**Purpose:** High-level overview of the entire monorepo  
**Contains:**
- Project vision and goals
- Monorepo structure
- Package breakdown
- Technology stack
- Design principles

**Target Audience:** AI agents new to the project, developers onboarding

---

### 2. **EXPORT_INVENTORY.md** ✅
**Purpose:** Complete inventory of all exports from every package  
**Contains:**
- All 70+ components with import paths
- All 60+ hooks with signatures
- All 31 icon libraries with sub-paths
- Layout primitives
- Providers
- Utilities
- Type exports

**Target Audience:** AI agents looking for specific exports, developers checking what's available

---

### 3. **COMPONENT_CATALOG.md** ✅
**Purpose:** Detailed component API documentation  
**Contains:**
- Component props interfaces
- Variant options
- Usage examples
- Composition patterns (Root, Trigger, Content)
- Common patterns
- Best practices

**Target Audience:** AI agents implementing UI features, developers building interfaces

---

### 4. **HOOKS_CATALOG.md** ✅
**Purpose:** Detailed hook API documentation  
**Contains:**
- Hook signatures
- Parameter types
- Return values
- Usage examples
- Common patterns
- When to use each hook

**Target Audience:** AI agents implementing state management and side effects

---

### 5. **ICONS_CATALOG.md** ✅
**Purpose:** Icon library reference  
**Contains:**
- All 31 icon libraries
- Sub-path import patterns
- IconContext usage
- Popular icons by category
- Best practices

**Target Audience:** AI agents adding icons to UI

---

### 6. **UTILITIES_CATALOG.md** ✅
**Purpose:** Utility function reference  
**Contains:**
- cn (class name utility)
- dateIntl, numberIntl, currencyIntl formatters
- httpClient
- logger
- Helper functions

**Target Audience:** AI agents needing utility functions

---

### 7. **TYPES_CATALOG.md** ✅
**Purpose:** TypeScript type definitions  
**Contains:**
- ComponentWithAs
- PolymorphicProps
- HTMLTailwindStyledComponentProps
- Variant types
- Utility types

**Target Audience:** AI agents working with TypeScript

---

### 8. **DESIGN_SYSTEM.md** ✅
**Purpose:** Design system tokens and patterns  
**Contains:**
- Semantic color tokens
- Typography scale
- Spacing system
- Component variants
- Dark mode implementation

**Target Audience:** AI agents implementing consistent UI

---

### 9. **ARCHITECTURE.md** ✅
**Purpose:** Technical architecture and patterns  
**Contains:**
- Monorepo organization
- Build system (tsup, esbuild)
- Package dependencies
- CSS architecture (Tailwind v4)
- Component patterns
- Testing strategy

**Target Audience:** AI agents understanding codebase structure

---

### 10. **DUPLICATE_ANALYSIS.md** ✅
**Purpose:** Prevent duplicate implementations  
**Contains:**
- Common duplicates to avoid
- PaalStack equivalents for popular libraries
- Migration guides
- Decision trees

**Target Audience:** AI agents preventing code duplication

---

### 11. **AI_SKILL.md** ✅ (CRITICAL)
**Purpose:** Comprehensive training guide for AI agents  
**Contains:**
- Decision trees for component selection
- Common mistakes to avoid
- Training examples
- Pattern recognition
- Quick lookup tables

**Target Audience:** AI agents primary training document

---

### 12. **APPLICATION_GUIDE.md** ✅ (CRITICAL)
**Purpose:** Complete, production-ready page examples  
**Contains:**
- Login Page
- Registration Page
- Dashboard
- CRUD Table (User Management)
- Settings Page
- Profile Page
- Multi-Step Form

**Target Audience:** AI agents building complete pages

---

### 13. **AI_QUICK_REFERENCE.md** ✅ (CRITICAL)
**Purpose:** Lightning-fast lookup for AI agents  
**Contains:**
- Component cheat sheet
- Hook cheat sheet
- Common patterns
- Design tokens
- Starter templates

**Target Audience:** AI agents needing quick answers

---

### 14. **.cursor/rules/paalstack-ui.mdc** ✅ (CRITICAL)
**Purpose:** Cursor-specific rules for enforcing PaalStack usage  
**Contains:**
- Forbidden patterns
- Required patterns
- Code review checklist
- Best practices

**Target Audience:** Cursor IDE AI, enforces rules during coding

---

## 🎯 Usage Guide for AI Agents

### Quick Start Path

1. **First Time?** Read `REPOSITORY_OVERVIEW.md` (5 min read)
2. **Looking for a component?** Check `EXPORT_INVENTORY.md` or `AI_QUICK_REFERENCE.md`
3. **Need detailed API?** See `COMPONENT_CATALOG.md` or `HOOKS_CATALOG.md`
4. **Building a page?** Reference `APPLICATION_GUIDE.md`
5. **Unsure what to use?** Follow decision trees in `AI_SKILL.md`

### For Specific Tasks

| Task | Primary Document | Secondary Reference |
|------|------------------|---------------------|
| Adding a button | AI_QUICK_REFERENCE.md | COMPONENT_CATALOG.md |
| Creating a form | APPLICATION_GUIDE.md | COMPONENT_CATALOG.md |
| Managing state | HOOKS_CATALOG.md | AI_QUICK_REFERENCE.md |
| Styling components | DESIGN_SYSTEM.md | AI_QUICK_REFERENCE.md |
| Importing icons | ICONS_CATALOG.md | AI_QUICK_REFERENCE.md |
| Formatting data | UTILITIES_CATALOG.md | AI_QUICK_REFERENCE.md |
| Building dashboard | APPLICATION_GUIDE.md | COMPONENT_CATALOG.md |
| Preventing duplicates | DUPLICATE_ANALYSIS.md | AI_SKILL.md |

---

## 📊 Documentation Statistics

- **Total Files:** 14
- **Total Components Documented:** 70+
- **Total Hooks Documented:** 60+
- **Total Icon Libraries:** 31
- **Complete Page Examples:** 7
- **Code Examples:** 100+
- **Lines of Documentation:** 10,000+

---

## 🔄 Update Frequency

This documentation should be updated when:
- New components are added
- Component APIs change
- New hooks are introduced
- Breaking changes occur
- New patterns emerge

---

## 🤖 AI Agent Instructions

### CRITICAL RULES

1. **ALWAYS check PaalStack first** before suggesting external libraries
2. **Read AI_SKILL.md** for comprehensive training
3. **Use AI_QUICK_REFERENCE.md** for fast lookups
4. **Reference APPLICATION_GUIDE.md** for complete page examples
5. **Follow .cursor/rules/paalstack-ui.mdc** for Cursor IDE

### Priority Reading Order

1. **AI_SKILL.md** — Complete training (15 min)
2. **AI_QUICK_REFERENCE.md** — Fast lookup (5 min)
3. **APPLICATION_GUIDE.md** — Page examples (10 min)
4. **EXPORT_INVENTORY.md** — What's available (10 min)
5. Other docs as needed for specific tasks

---

## 📝 Documentation Quality

All documentation follows these principles:

✅ **Accurate** — Based on actual source code  
✅ **Complete** — Covers all major features  
✅ **Practical** — Includes real-world examples  
✅ **Searchable** — Clear headings and structure  
✅ **Consistent** — Uniform format across files  
✅ **Type-Safe** — Includes TypeScript types  
✅ **Up-to-Date** — Reflects current API  

---

## 🎓 Learning Path

### For New AI Agents

**Day 1: Foundations**
- Read REPOSITORY_OVERVIEW.md
- Skim EXPORT_INVENTORY.md
- Read AI_SKILL.md (critical)

**Day 2: Components**
- Read COMPONENT_CATALOG.md
- Study APPLICATION_GUIDE.md examples
- Practice with AI_QUICK_REFERENCE.md

**Day 3: Advanced**
- Read HOOKS_CATALOG.md
- Read DESIGN_SYSTEM.md
- Read ARCHITECTURE.md

### For Experienced AI Agents

**Quick Refresh:**
- Scan AI_QUICK_REFERENCE.md
- Check EXPORT_INVENTORY.md for new features
- Review APPLICATION_GUIDE.md for patterns

---

## 🚀 Success Metrics

AI agents successfully trained on this documentation should:

✅ Always suggest PaalStack components first  
✅ Use semantic design tokens (bg-background, text-foreground)  
✅ Import icons from sub-paths (@paalstack/react-icons/lu)  
✅ Use Form component with validation  
✅ Build complete pages using APPLICATION_GUIDE patterns  
✅ Never create duplicate Button, Input, Dialog, etc.  
✅ Leverage hooks for common patterns  
✅ Write type-safe TypeScript code  

---

## 📞 Support

For questions or issues:
- **GitHub:** https://github.com/paalamugan/paalstack-react-ui
- **Issues:** https://github.com/paalamugan/paalstack-react-ui/issues
- **Documentation:** This directory (/docs)

---

## 🏆 Best Practices

1. **Search before suggesting** — Check EXPORT_INVENTORY.md
2. **Use examples** — Reference APPLICATION_GUIDE.md
3. **Follow patterns** — Study AI_SKILL.md decision trees
4. **Stay consistent** — Use semantic tokens from DESIGN_SYSTEM.md
5. **Test thoroughly** — Ensure TypeScript types are satisfied

---

**Remember:** The goal is to help developers use what already exists in PaalStack, not to reinvent the wheel!
