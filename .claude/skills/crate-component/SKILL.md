# Component Auto Generation Skill

## Description
Automatically generates React + TypeScript components following project conventions.

## Usage
```
/crate-component <type> <name> [description]
```

### Parameters
- `type`: Component type (component, section, page)
- `name`: Component name in PascalCase (e.g., UserCard, AboutSection)
- `description`: Optional description of component purpose

### Examples
```
/crate-component section TeamSection
/crate-component component Button "A reusable button component"
/crate-component page Dashboard
```

## Instructions

When this skill is invoked:

1. **Parse Arguments**
   - Extract type, name, and optional description
   - Validate name is in PascalCase
   - Determine target directory based on type:
     - `component` → `src/components/`
     - `section` → `src/sections/`
     - `page` → `src/pages/`

2. **Generate Component Structure**
   - Create TypeScript (.tsx) file
   - Use **named export** (NOT default export)
   - Follow this template:

```typescript
export const ComponentName = () => {
  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
};
```

3. **Add Basic Styling**
   - For sections: Add full-screen layout with padding
   - For components: Add minimal wrapper styling
   - Use TailwindCSS classes
   - Include responsive design classes (md:, lg:)

4. **Section Template** (for section type):
```typescript
export const SectionName = () => {
  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Section Title
        </h2>
        {/* Section content */}
      </div>
    </section>
  );
};
```

5. **Component Template** (for component type):
```typescript
interface ComponentNameProps {
  // Add props here
}

export const ComponentName = ({}: ComponentNameProps) => {
  return (
    <div className="p-4">
      {/* Component content */}
    </div>
  );
};
```

6. **Confirm Creation**
   - Show file path
   - Show component preview
   - Suggest next steps (e.g., import in App.tsx)

## Coding Conventions
- Component files: PascalCase (e.g., `HeroSection.tsx`)
- Functions/variables: camelCase
- Always use **named exports** (NOT default export)
- All components must be TypeScript
- Use TailwindCSS for styling

## Notes
- Check if file already exists before creating
- Ensure directory exists, create if needed
- Follow project's existing component patterns
